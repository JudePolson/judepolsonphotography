import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * PHOTOS — one markdown file per photograph.
 *
 * Put the image file and its .md file side by side in src/content/photos/,
 * with matching names:
 *
 *   src/content/photos/great-blue-heron.jpg
 *   src/content/photos/great-blue-heron.md   (image: ./great-blue-heron.jpg)
 *
 * See docs/content-model.md for the full procedure.
 */
const photos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/photos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Shown beside the photograph in the lightbox. A few sentences. */
      description: z.string(),
      /** Optional until the photograph itself is added. */
      image: image().optional(),
      /** Lower numbers come first in the gallery. */
      order: z.number().default(50),
      /** true = this photograph joins the rotating hero on the home page. */
      featured: z.boolean().default(false),
      /** Where it lands in the hero rotation. Lower goes first. */
      heroOrder: z.number().default(50),
      /** Optional, and general only — never a precise location. */
      place: z.string().optional(),
      /** 'large' photographs take a 2x2 tile in the gallery mosaic. */
      span: z.enum(['normal', 'large']).default('normal'),
      published: z.boolean().default(true),
    }),
});

/**
 * STORIES — the alternating photo-and-text bands down the home page.
 * Each story is half a screen of photograph and half a screen of writing.
 */
const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    /**
     * Which photograph to show beside this writing — the filename of an entry
     * in src/content/photos/, without the .md. No need to copy the image.
     */
    photo: z.string(),
    order: z.number().default(50),
    published: z.boolean().default(true),
  }),
});

/**
 * PAGES — standing pages whose words live apart from their layout.
 */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      portrait: image().optional(),
      portraitAlt: z.string().default(''),
    }),
});

export const collections = { photos, stories, pages };
