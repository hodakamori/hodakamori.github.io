// Your name as it appears in author lists; it is highlighted automatically.
export const me = 'H. Mori';

export type PubType = 'journal' | 'conference' | 'preprint' | 'manuscript' | 'talk';

export const typeLabels: Record<PubType, string> = {
  journal: 'Journal article',
  conference: 'Conference paper',
  preprint: 'Preprint',
  manuscript: 'Manuscript',
  talk: 'Talk',
};

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number | string;
  type: PubType;
  /** e.g. "Invited", "Best paper" */
  note?: string;
  /** Shown under "Selected publications" on the profile page. */
  selected?: boolean;
  /** The title links to the first entry. */
  links?: { label: string; href: string }[];
}

// Text written as "[...]" is a placeholder and is shown greyed out.
export const publications: Publication[] = [
  {
    title: 'megane: a Rust/WebAssembly molecular viewer for notebooks, browsers, and editors',
    authors: ['H. Mori'],
    venue: 'In preparation',
    year: 2026,
    type: 'manuscript',
    selected: true,
    links: [
      { label: 'Code', href: 'https://github.com/megane-labs/megane' },
      { label: 'Docs', href: 'https://megane-labs.github.io/megane/' },
    ],
  },
  {
    title: '[Paper title]',
    authors: ['[Author A]', 'H. Mori', '[Author B]'],
    venue: '[Journal, Volume, Pages]',
    year: '[20XX]',
    type: 'journal',
    selected: true,
  },
  {
    title: '[Talk title]',
    authors: ['H. Mori'],
    venue: '[Conference, City]',
    year: '[20XX]',
    type: 'talk',
    note: 'Invited',
  },
];
