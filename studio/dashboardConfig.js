export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6349102b243bdf7fbe9cad3a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-acnv4699',
                  apiId: '1c5757ac-d69a-472f-ae94-1bf558dfed3b'
                },
                {
                  buildHookId: '6349102c8393900180686841',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-a3hnf639',
                  apiId: '03807abf-5637-4b99-9858-ada7a7423990'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/salikanwer/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-a3hnf639.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
