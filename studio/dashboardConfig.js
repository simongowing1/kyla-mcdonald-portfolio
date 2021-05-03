export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '60901b2a34e7ea0df8d5d225',
                  title: 'Sanity Studio',
                  name: 'kyla-mcdonald-portfolio-studio',
                  apiId: '6b870deb-e577-42a4-8489-8552e54554f7'
                },
                {
                  buildHookId: '60901b2aeec3dd111849e810',
                  title: 'Portfolio Website',
                  name: 'kyla-mcdonald-portfolio',
                  apiId: 'f0464d9f-4940-44d0-b074-6aef4c1b82ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simongowing1/kyla-mcdonald-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://kyla-mcdonald-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
