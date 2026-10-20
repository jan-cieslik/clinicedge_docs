// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import {readFileSync} from 'node:fs';

const redirects = JSON.parse(readFileSync(new URL('./legacy-redirects.json', import.meta.url), 'utf8'));

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ClinicEdge',
  tagline: 'Clinical simulation guides for teaching, learning, and administration',
  favicon: 'img/favicon.png',
  url: 'https://clinic-edge.org',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'jan-cieslik',
  projectName: 'clinicedge_docs',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    ['classic', {
      docs: {
        sidebarPath: './sidebars.js',
        editUrl: 'https://github.com/jan-cieslik/clinicedge_docs/edit/main/',
      },
      blog: {
        blogTitle: 'ClinicEdge updates',
        blogDescription: 'Project news and practical updates for the ClinicEdge clinical simulation platform.',
        showReadingTime: true,
        feedOptions: {type: ['rss', 'atom'], xslt: true},
        editUrl: 'https://github.com/jan-cieslik/clinicedge_docs/edit/main/',
        onInlineTags: 'throw',
        onInlineAuthors: 'throw',
        onUntruncatedBlogPosts: 'throw',
      },
      theme: {customCss: './src/css/custom.css'},
      sitemap: {
        ignorePatterns: ['/404.html', '/blog/tags/**', '/blog/authors/**'],
      },
    }],
  ],
  plugins: [['@docusaurus/plugin-client-redirects', {redirects}]],
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },
  themeConfig: {
    image: 'img/ce_social.jpg',
    metadata: [
      {name: 'description', content: 'Learn how to deploy ClinicEdge, manage courses and medical cases, supervise teaching, and complete clinical simulations. Guides for administrators, staff, and students.'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    navbar: {
      title: 'ClinicEdge',
      logo: {alt: 'ClinicEdge home', src: 'img/ce_transparent.png'},
      items: [
        {type: 'docSidebar', sidebarId: 'ceSidebar', label: 'Documentation', position: 'left'},
        {to: '/blog', label: 'Updates', position: 'left'},
        {href: 'https://github.com/jan-cieslik/clinicedge', label: 'Application source', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Guides', items: [
          {label: 'For IT Administrators', to: '/docs/it-administrators'},
          {label: 'For Course Administrators', to: '/docs/course-administrators'},
          {label: 'For Course Staff', to: '/docs/course-staff'},
          {label: 'For Students', to: '/docs/students'},
        ]},
        {title: 'Project', items: [
          {label: 'Updates', to: '/blog'},
          {label: 'Documentation source', href: 'https://github.com/jan-cieslik/clinicedge_docs'},
          {label: 'Impressum', to: '/impressum'},
        ]},
      ],
      copyright: `ClinicEdge ${new Date().getFullYear()} · MIT License`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  },
};

export default config;
