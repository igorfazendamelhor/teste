module.exports = {
  title: 'Edy',
  tagline: 'Documentation website',
  url: 'https://FedericoTartarini.github.io',
  baseUrl: '/docusaurus-example-youtube/',
  onBrokenLinks: 'throw',
  favicon: 'img/logotipoFazenda.ico',
  organizationName: 'FedericoTartarini', // Usually your GitHub org/user name.
  projectName: 'docusaurus-example-youtube', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Fazenda Melhor',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logotipoFazenda.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: '06ff4d22bb3b76ffcd3e10024e7cf658',
      indexName: 'documentacao_fazenda',
      appId: '918IP2G6I3',

      // Optional: see doc section bellow
      // contextualSearch: true,

      //... other Algolia params
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitLab',
              href: 'https://gitlab.com/contato152/documentacao-fazenda-melhor',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fazenda Melhor, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc3',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://gitlab.com/contato152/documentacao-fazenda-melhor',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://gitlab.com/contato152/documentacao-fazenda-melhor',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
