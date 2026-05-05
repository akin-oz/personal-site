import { XMLParser } from "fast-xml-parser";

export type SubstackPost = {
  title: string;
  href: string;
  date: string;
  blurb: string;
};

type RawItem = {
  title?: string;
  link?: string;
  description?: string;
  pubDate?: string;
};

type RawFeed = {
  rss?: { channel?: { item?: RawItem | RawItem[] } };
};

const FEED_URL = "https://ownershipinpractice.substack.com/feed";
const REVALIDATE_SECONDS = 3600;

const parser = new XMLParser({
  ignoreAttributes: true,
  trimValues: true,
  cdataPropName: false,
  processEntities: true,
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

function asArray<T>(value: T | T[] | undefined): T[] {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

function formatDate(pubDate: string | undefined): string {
  if (!pubDate) return "";
  const parsed = new Date(pubDate);
  return Number.isNaN(parsed.getTime()) ? "" : dateFormatter.format(parsed);
}

function toPost(item: RawItem): SubstackPost | null {
  const title = item.title?.trim();
  const href = item.link?.trim();
  if (!title || !href) return null;
  return {
    title,
    href,
    date: formatDate(item.pubDate),
    blurb: item.description?.trim() ?? "",
  };
}

export async function fetchSubstackPosts(): Promise<SubstackPost[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) {
      console.error(`Substack feed responded ${res.status}`);
      return [];
    }
    const xml = await res.text();
    const parsed = parser.parse(xml) as RawFeed;
    const items = asArray(parsed.rss?.channel?.item);
    return items
      .map(toPost)
      .filter((post): post is SubstackPost => post !== null);
  } catch (err) {
    console.error("Failed to fetch Substack feed", err);
    return [];
  }
}
