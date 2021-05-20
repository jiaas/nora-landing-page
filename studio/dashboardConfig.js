export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60a5c6b1bf68b16e6797e0b5',
                  title: 'Sanity Studio',
                  name: 'nora-landing-page-studio',
                  apiId: 'f4126d9f-55e0-4e90-9a56-48f658c34acc'
                },
                {
                  buildHookId: '60a5c6b190bb9c6e77e35580',
                  title: 'Blog Website',
                  name: 'nora-landing-page',
                  apiId: '4b19285b-bffc-4302-bef7-b90caa9b6a15'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jiaas/nora-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nora-landing-page.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
