// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Sri Aspari",
  titleTemplate: "%s | Sri Aspari",
  siteDescription:
    "Hello!, My name is Sri Aspari. I'm Web Developer based in indonesia",

  templates: {
    Post: "/:title",
    Tag: "/tag/:id",
    Project: "/project/:title",
    Tech: "/project/tech/:title"
  },

  plugins: [
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/*.md",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true
          }
        }
      }
    },
    {
      // Project
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Project",
        path: "content/project/*.md",
        refs: {
          tech: {
            typeName: "Tech",
            create: true
          }
        }
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      transformInlineCode: false,
      showLineNumbers: true,
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};