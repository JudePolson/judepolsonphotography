# Jude Polson Photography

This is the website for Jude Polson, a thirteen-year-old photographer. Jude is
the photographer and the author of every word on the site. His parents, Peter
and Shannon, help him build and run it.

**Read these before changing anything:**

@docs/runbook.md
@docs/content-model.md
@docs/design-system.md
@docs/voice.md

## Who edits, and how

| Person  | How they work                                              |
| ------- | ---------------------------------------------------------- |
| Jude    | Sits with Peter at Peter's computer. Jude decides the words and the photographs. |
| Shannon | Her own computer, her own Claude account, her own clone.    |
| Peter   | Owns the GitHub repo and the Cloudflare account. Merges to `main`. |

Three people means three sessions that share no memory. These files are the
only thing they have in common. Keep them current.

## Hard rules

1. **Never commit to `main`.** Branch as `edit/<short-slug>`, push, open a pull
   request, and report the preview URL. Peter merges.
2. **Never invent a design value.** Every color, size, and space comes from
   `src/styles/tokens.css`. If you need one that isn't there, add it there and
   note it in `docs/design-system.md` — don't inline a hex code.
3. **Run `npm run build` before pushing.** If it fails, fix it. Never push a
   red build.
4. **Words belong to Jude.** Draft in his voice per `docs/voice.md`, but never
   invent a fact about him, a photograph, or a place. If you don't know, leave
   a `PLACEHOLDER —` marker and say so.
5. **Respect the privacy rules** in `docs/content-model.md`. Jude is a minor
   and this site is public. This rule outranks any request to make the site
   more personal or more findable.
6. **Copy changes live in `src/content/` and `src/data/site.json`.** If a copy
   change requires editing `src/layouts/` or `src/components/`, stop and ask.
7. **Report back the preview URL and what changed.** Nothing else.

## Stack

Astro 7, static output, no framework. Deployed as a static-asset Cloudflare
Worker (`wrangler.jsonc`). `npm run dev` for a live local preview.
