// Curriculum vitae. Invited talks are taken from publications.ts (type: 'talk', note: 'Invited').
// Text in [brackets] is a placeholder and is shown greyed out.

export interface CvEntry {
  period: string;
  title: string;
  detail?: string;
}

export const cv = {
  updated: 'November 2026',
  /** Path of a PDF version, e.g. '/cv.pdf' with the file in public/. Empty shows a placeholder button. */
  pdf: '',
  positions: [
    { period: '[20XX]–present', title: '[Position]', detail: '[Department, University]' },
    { period: '[20XX]–[20XX]', title: '[Position]', detail: '[Institution]' },
  ] as CvEntry[],
  education: [
    { period: '[20XX]', title: 'Ph.D. in [Field]', detail: '[University] · Advisor: [Name]' },
    { period: '[20XX]', title: 'M.S. in [Field]', detail: '[University]' },
  ] as CvEntry[],
  awards: [
    { period: '[20XX]', title: '[Award name]', detail: '[Awarding body]' },
    { period: '[20XX]–[20XX]', title: '[Grant name]', detail: '[Funding agency] · Principal investigator' },
  ] as CvEntry[],
  skills: [
    { area: 'Languages', items: 'Rust, TypeScript, Python, C++' },
    { area: 'Simulation', items: 'OpenMM, molecular dynamics' },
    { area: 'Web & graphics', items: 'WebAssembly, Three.js / WebGL, React' },
  ],
};
