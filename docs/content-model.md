# Content model

Everything a person reads on this site lives in `src/content/` or
`src/data/site.json`. Layout lives in `src/pages/` and `src/components/` and is
edited far less often.

## Privacy rules — these come first

Jude is thirteen. The site is public and indexed. These rules override any
request to make the site warmer, more personal, or easier to find.

- **No exact locations.** A region or a park is fine ("the Olympic Peninsula").
  A trail name, a neighborhood, or a spot Jude visits regularly is not.
- **No school, team, club, or daily routine.** Nothing that establishes where
  Jude is at a predictable time.
- **No street address, no phone number.** Ever.
- **Inquiries go to a parent-monitored inbox.** `site.json → contact.email`
  reaches Peter. Never publish an address that only Jude reads.
- **No other children** identifiable in photographs without their parents'
  say-so. If a photo has a recognizable kid in it, ask before publishing.
- **Photo metadata.** Camera files carry GPS coordinates. Strip EXIF before
  committing a photograph. If you're not sure it's stripped, say so.

## Adding a photograph

1. Put the image in `src/content/photos/`. Name it in lowercase with hyphens:
   `great-blue-heron.jpg`. JPEG, long edge around 2400px, under about 1.5 MB.
   Astro generates every smaller size the site needs.
2. Create `src/content/photos/great-blue-heron.md` beside it:

   ```
   ---
   title: "Great Blue Heron"
   description: "The story behind the photograph, in Jude's words. Two or
     three sentences. This is what appears next to the big version."
   image: ./great-blue-heron.jpg
   order: 30
   featured: false
   span: normal
   published: true
   ---
   ```

3. `npm run build` to confirm it resolves.

### Fields

| Field         | Required | What it does                                            |
| ------------- | -------- | ------------------------------------------------------- |
| `title`       | yes      | Shown in the lightbox and used as the image's alt text. |
| `description` | yes      | The paragraph beside the photograph in the lightbox.    |
| `image`       | no       | Relative path to the file beside this one.              |
| `order`       | no       | Lower comes first in the gallery. Defaults to 50.       |
| `featured`    | no       | `true` puts it in the rotating hero on the home page.   |
| `heroOrder`   | no       | Position in the hero rotation. Lower goes first.        |
| `place`       | no       | General area only. See the privacy rules.               |
| `span`        | no       | `large` gives the photograph a 2x2 tile in the mosaic.  |
| `published`   | no       | `false` keeps it out of the built site entirely.        |

## Changing the hero photographs

Jude wanted these easy to swap. Set `featured: true` on the photographs he
wants and `featured: false` on the ones he doesn't. The home page takes the
first five by `heroOrder`. Nothing else to touch.

## The home page bands

`src/content/stories/*.md` — each file is one band: a photograph on half the
screen, writing on the other. They alternate sides automatically, so `order`
controls sequence, not side. Delete a file to remove a band.

## Standing pages

`src/content/pages/about.md` holds the About Me copy and Jude's portrait.
`src/data/site.json` holds the wordmark, tagline, nav, and contact address.

## What not to put in this repo

The repo is public. No API keys, no tokens, no passwords, no family
information beyond what's already on the site. Secrets belong in Cloudflare.
