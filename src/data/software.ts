import type { ImageMetadata } from 'astro';
import meganeImg from '../assets/software/megane.png';
import livemdImg from '../assets/software/livemd.png';

export interface Software {
  name: string;
  tagline: string;
  description: string;
  highlights?: string[];
  tags: string[];
  role: string;
  license: string;
  links: { label: string; href: string }[];
  image?: ImageMetadata;
  imageAlt?: string;
  /** CSS object-position for the thumbnail crop. */
  imagePosition?: string;
}

export const software: Software[] = [
  {
    name: 'megane',
    tagline: 'Spectacles for atomistic data',
    description:
      'A molecular viewer for structures, MD trajectories, volumetric data and spectra that runs the same way wherever you open a file.',
    highlights: [
      '26 file formats parsed by one Rust core, compiled to WebAssembly and Python',
      'The same viewer in Jupyter, JupyterLab, the web, React and VS Code',
      'Over a million atoms at 60 fps with GPU impostor rendering',
      'Visual pipeline editor, structure builder, and VR/AR viewing',
    ],
    tags: ['Rust', 'WebAssembly', 'TypeScript', 'Three.js', 'Python'],
    role: 'Creator',
    license: 'MIT',
    links: [
      { label: 'GitHub', href: 'https://github.com/megane-labs/megane' },
      { label: 'Docs', href: 'https://megane-labs.github.io/megane/' },
      { label: 'PyPI', href: 'https://pypi.org/project/megane/' },
      { label: 'npm', href: 'https://www.npmjs.com/package/megane-viewer' },
    ],
    image: meganeImg,
    imageAlt: 'megane showing a water droplet next to its visualization pipeline',
  },
  {
    name: 'LiveMD',
    tagline: 'Real-time interactive molecular dynamics',
    description:
      'Infrastructure that connects MD engines to interactive clients, so a running simulation can be pulled, poked and shared from a browser.',
    highlights: [
      'User input becomes a bias force, never overwritten coordinates',
      'Engine-agnostic design: OpenMM today, other engines through the same API',
      'Shared sessions in which several people steer one simulation',
    ],
    tags: ['Python', 'OpenMM', 'WebSocket', 'TypeScript'],
    role: 'Creator',
    license: 'MIT',
    links: [{ label: 'GitHub', href: 'https://github.com/hodakamori/livemd' }],
    image: livemdImg,
    imageAlt: 'A gold nanowire being stretched in the LiveMD studio',
    imagePosition: '30% center',
  },
  {
    name: 'megane-rdkit',
    tagline: 'RDKit for the browser',
    description:
      'RDKit compiled to WebAssembly, adding the ETKDG 3D conformer embedding and MMFF94/UFF minimization that the official RDKit.js does not ship.',
    tags: ['C++', 'Emscripten', 'RDKit'],
    role: 'Creator',
    license: 'BSD-3-Clause',
    links: [{ label: 'GitHub', href: 'https://github.com/hodakamori/megane-rdkit' }],
  },
];
