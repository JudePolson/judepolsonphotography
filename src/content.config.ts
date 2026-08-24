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
      /** What Jude calls the photograph. Shown in the lightbox. */
      title: z.string(),
      /**
       * What is actually visible, for people using a screen reader and for
       * when an image fails to load. A title like "Wing check" is a good
       * title and useless as alt text, which is why these are separate.
       * Falls back to the title if absent.
       */
      alt: z.string().optional(),
      /** Shown beside the photograph in the lightbox. A few sentences. */
      description: z.string(),
      /**
       * Required. If this line goes missing the build fails loudly, naming
       * the file — rather than quietly publishing a grey box with the title
       * written in it, which is what used to happen.
       */
      image: image(),
      /** Lower numbers come first in the gallery. */
      order: z.number().default(50),
      /** Optional, and general only — never a precise location. */
      place: z.string().optional(),
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
     * Which photograph to show on the film strip beside this writing — the
     * filename of an entry in src/content/photos/, without the .md. The
     * image isn't copied, just referenced.
     */
    photo: z.string(),
    /** The little orange code along the top edge of the film strip. */
    edgeCode: z.string().optional(),
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
