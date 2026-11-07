// All site content lives here. Edit this file to update the site.

export const profile = {
  name: 'Samar Karnani',
  role: 'Full Stack Software Engineer',
  location: 'Boston, MA',
  email: 'sam14501@gmail.com',
  linkedin: 'https://www.linkedin.com/in/samarkarnani-55b2a017b',
  github: 'https://github.com/notsummerkarnani',
  resume: '/Samar-Karnani-Resume.pdf',
};

export type Metric = { value: string; label: string };

export const metrics: Metric[] = [
  { value: '10,000+', label: 'labor hours saved per year across shipped automations' },
  { value: '100,000+', label: 'slips processed through vision language model annually' },
  { value: '3% → 0.7%', label: 'receiving error rate after OCR + vision-model intake' },
  { value: '$300,000+', label: 'in annual operational cost removed' },
];

export type Role = { title: string; dates: string; points: string[] };
export type Job = { company: string; place: string; roles: Role[] };

export const experience: Job[] = [
  {
    company: 'Axcelis Technologies',
    place: 'Beverly, MA',
    roles: [
      {
        title: 'Software Engineer III',
        dates: 'Oct 2026 — Present',
        points: [
          'Designed and deployed a receiving application that automates inbound material processing and ERP data entry using OCR and a cloud vision-language model on Azure AI Foundry. Error rate dropped from 3% to 0.7%, saving 6,300+ labor hours a year.',
        ],
      },
      {
        title: 'Software Engineer II',
        dates: 'Mar 2025 — Sep 2026',
        points: [
          'Architected and maintained full-stack enterprise applications integrating with Microsoft Graph API and manufacturing floor infrastructure.',
          'Designed backend services handling high-throughput API pipelines (100+ req/min) with a focus on reliability, data consistency and performance.',
          'Automated stockroom-to-cell material drop workflows: ~55,000 work orders a year, >95% cycle-time reduction, ~4,200 labor hours saved annually.',
        ],
      },
      {
        title: 'Software Engineer I',
        dates: 'Jun 2023 — Mar 2025',
        points: [
          'Built full-stack applications for manufacturing floor operations, automating repetitive processes and surfacing real-time metrics.',
          'Cut urgent machine-shop request cycle time by ~50–65% and raised on-time completion from ~70–75% to >95% with a centralized, role-based platform.',
          'Eliminated ~300 manual Kanban card updates a month by automating board sync, status tracking and card creation from customer build plans.',
          'Integrated barcode scanning and Zebra label printing into production workflows for automated labeling and traceability.',
        ],
      },
    ],
  },
  {
    company: 'American Greetings Interactive',
    place: 'Digital Product Development Co-op',
    roles: [
      {
        title: 'Co-op Developer',
        dates: 'Jul 2022 — Nov 2022',
        points: [
          'Built eCards and interactive video products with PIXI.js and GSAP for the company storefront.',
          'Contributed to the Christmas premium eCard launch by building a video-game-style eCard.',
        ],
      },
    ],
  },
];

export type CaseStudy = {
  id: string;
  title: string;
  problem: string;
  built: string;
  result: string;
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'RMS-01',
    title: 'Receiving Management System',
    problem:
      'Inbound material was keyed into the ERP by hand from packing slips, slowly and with human error.',
    built:
      'A receiving app that scans packing slips, extracts the data with a cloud vision language model, validates it and routes it to the ERP.',
    result: 'Errors down to 0.7%. 6,300+ labor hours saved a year.',
    stack: ['TypeScript', 'React', 'Azure AI Foundry', 'MSSQL'],
  },
  {
    id: 'DMS-02',
    title: 'Drop Management System',
    problem:
      'Getting parts from the stockroom to assembly cells depended on manual requests, handoffs and chasing status.',
    built:
      'An automated workflow that creates, routes and tracks material drops end to end, integrated with floor infrastructure and Microsoft Graph.',
    result: '~55,000 work orders a year. >95% faster cycle time. ~4,200 hours saved.',
    stack: ['Node.js', 'REST APIs', 'Playwright'],
  },
  {
    id: 'MSM-03',
    title: 'Machine-shop request management',
    problem:
      'Machine-shop jobs arrived through scattered channels with no shared priority, status or tracking.',
    built:
      'A centralized, role-based request platform, with approval loops and audit logs.',
    result: 'Cycle time cut ~50–65%. On-time completion from ~70% to >95%.',
    stack: ['React', 'MaterialUI', 'Sequelize'],
  },
];

export type Project = {
  title: string;
  year: string;
  kind: string;
  description: string;
  image: string;
  play?: string;
  source?: string;
};

// Earlier work from RIT. Dead hosting links (old people.rit.edu and Heroku) were removed.
export const projects: Project[] = [
  {
    title: 'Slip N Slide',
    year: '2022',
    kind: 'Unity · Group',
    description:
      'Endless top-down shooter where you can only move with your gun’s recoil or a grappling hook. Clear each room to unlock the next.',
    image: '/projects/slipnslide.jpg',
    play: 'https://play.unity.com/mg/other/webgl-builds-149187',
    source: 'https://github.com/notsummerkarnani/450_TopDown',
  },
  {
    title: 'Shadow Boxer',
    year: '2022',
    kind: 'Web · Motion tracking',
    description:
      'A controller-free boxing game in the browser. Your webcam tracks your punches against on-screen opponents.',
    image: '/projects/shadowboxer.jpg',
  },
  {
    title: 'Pantry Store 2.0',
    year: '2022',
    kind: 'Full stack',
    description:
      'Accounts, sessions and a saved pantry, then recipe suggestions based on what you actually have.',
    image: '/projects/pantrystore2.jpg',
  },
  {
    title: 'Pantry Store',
    year: '2022',
    kind: 'Node.js · REST',
    description:
      'Track what’s in your pantry with quantities and categories. The prototype that became 2.0.',
    image: '/projects/pantrystore.jpg',
    source: 'https://github.com/notsummerkarnani/Project1',
  },
  {
    title: 'Meal Finder',
    year: '2021',
    kind: 'Web · API',
    description:
      'Recipe search without three pages of backstory. Find dishes and save favourites.',
    image: '/projects/mealfinder.jpg',
  },
  {
    title: 'PEW-PEW-PEW!',
    year: '2020',
    kind: 'PIXI.js · Game',
    description:
      'Side-scrolling shooter. Defend the world of Dun in a flying doughnut armed with a coffee-bean blaster.',
    image: '/projects/pewpewpew.jpg',
    source: 'https://github.com/notsummerkarnani/IGME-235-2201/tree/main/Project3',
  },
  {
    title: 'COVID-19 Tracker',
    year: '2020',
    kind: 'Web · API',
    description:
      'Combines REST Countries and a COVID policy API to show per-country data, cases and policy by date.',
    image: '/projects/covid.jpg',
    source: 'https://github.com/notsummerkarnani/IGME-235-2201/tree/main/Project2',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'SQL', 'C# / .NET', 'Python'] },
  { group: 'Web', items: ['React', 'Node.js', 'REST APIs', 'MaterialUI', 'HTML / CSS'] },
  { group: 'Data', items: ['MSSQL', 'NoSQL', 'Sequelize ORM'] },
  { group: 'Platform', items: ['Azure DevOps', 'Azure AI Foundry', 'Microsoft Graph', 'CI/CD', 'Playwright'] },
  { group: 'Also', items: ['Unity', 'Siemens Plant Simulation', 'Kanbanize', 'Claude Code', 'OpenAI Codex'] },
];
