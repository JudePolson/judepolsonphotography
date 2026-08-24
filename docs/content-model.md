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
   alt: "A great blue heron standing motionless in shallow water at dawn"
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
| `title`       | yes      | What you call the photograph. Shown in the lightbox.    |
| `alt`         | no       | What is actually *visible*, for people who can't see it. See below. |
| `description` | yes      | The paragraph beside the photograph in the lightbox.    |
| `image`       | no       | Relative path to the file beside this one.              |
| `order`       | no       | Lower comes first in the gallery. Defaults to 50.       |
| `place`       | no       | General area only. See the privacy rules.               |
| `published`   | no       | `false` keeps it out of the built site entirely.        |

## Titles and alt text are different things

`title` is what Jude calls the photograph. Good titles are short and his own —
"Leap of faith", "Wing check", "Taking a stroll".

`alt` is what is *in* the picture, written for someone who cannot see it: a
person using a screen reader, or anyone whose connection dropped the image.
"Wing check" is an excellent title and tells that person nothing.

So: title it however he likes, and always write an `alt` that describes what's
there. If `alt` is missing the site falls back to the title, which builds fine
but leaves that person with nothing useful — so don't skip it.

## The photograph at the top of the home page

One line in `src/data/site.json`:

```
"heroPhoto": "bald-eagle-in-flight",
```

That's the filename of any photograph in `src/content/photos/`, without the
`.md`. If it doesn't match a real photograph the build fails with a message
saying so, rather than shipping a blank banner.

**The banner shows the whole photograph.** It takes its shape from the
photograph's own proportions, so nothing is ever cropped — no wingtips cut off
on a phone, no heads cut off on a wide monitor. A tall photograph makes a tall
banner; that's the trade for never losing part of the picture.

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
