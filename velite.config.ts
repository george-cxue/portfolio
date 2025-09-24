import { defineConfig, defineCollection, s } from 'velite';

const pages = defineCollection({
  name: 'Page',
  pattern: 'pages/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      subtitle: s.string().max(999).optional(),
      slug: s.slug('page'),
      body: s.mdx(),
      toc: s.toc({
        prefix: 'anchor:',
      }),
      showToc: s.boolean().default(true),
      ogDescription: s.string().max(999).optional(),
    })
    .transform((data, { meta }) => ({
      ...data,
      permalink: `/${data.slug}`,
      path: meta.path,
    })),
});

// Define a 'posts' collection
const posts = defineCollection({
  name: 'Post', // Name of the collection
  pattern: 'content/posts/**/*.mdx', // Path to the content files
  schema: s.object({
    title: s.string(), // Zod-like schema for title
    description: s.string(), // Schema for description
    date: s.string(), // Schema for date
    // Velite adds a 'content' property for the MDX body automatically
  }),
});

export default defineConfig({
  // Add all your collections here
  collections: { pages, posts },
});
