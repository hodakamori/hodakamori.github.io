import { getCollection } from 'astro:content';

/** "[...]" marks a placeholder that is still to be filled in. */
export function isTodo(value: unknown): boolean {
  return typeof value === 'string' && /^\[.*\]$/.test(value.trim());
}

/** Splits text into plain parts and "[placeholder]" parts, so placeholders can appear mid-sentence. */
export function splitTodo(value: string | number): { text: string; todo: boolean }[] {
  return String(value)
    .split(/(\[[^\]]+\])/)
    .filter((part) => part !== '')
    .map((part) => (isTodo(part) ? { text: part.slice(1, -1), todo: true } : { text: part, todo: false }));
}

/** Strips the placeholder brackets for display. */
export function display(value: string | number): string {
  const s = String(value);
  return isTodo(s) ? s.trim().slice(1, -1) : s;
}

/** Prefixes an internal path with the configured base path. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

/** Published blog posts, newest first. */
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
