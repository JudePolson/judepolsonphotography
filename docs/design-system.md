# Design system

## The one rule

Every color, size, space, and typeface comes from `src/styles/tokens.css`. If
you need a value that isn't there, add it to the tokens file and document it
here. Never inline a raw value in a component. Three people editing with three
agents is exactly how a site ends up with nine shades of the same grey.

## Why it's dark

Near-black ground, minimal chrome, photographs doing all the talking. Nature
and wildlife photographs read the way prints do on a gallery wall, and it's
the shared instinct of both sites Jude picked as references
(simondentremont.com, mattshannon.ca).

**There is no light mode.** Inverting the ground would wreck the photographs.
This is a deliberate commitment, not an omission.

The navigation bar is the deliberate exception: a white strip across the top,
which reads as a gallery label above the work rather than part of it.

## Tokens

| Group  | Tokens                                                                |
| ------ | --------------------------------------------------------------------- |
| Color  | `--c-ground` `--c-surface` `--c-surface-2` `--c-ink` `--c-ink-soft` `--c-ink-faint` `--c-hairline` `--c-accent` `--c-scrim` |
| Nav    | `--c-nav-bg` `--c-nav-ink` `--c-nav-soft` `--c-nav-accent` `--c-nav-line` — the white bar only |
| Type   | `--f-wordmark` (Fraunces) `--f-display` (Instrument Serif) `--f-body` (Instrument Sans), scale `--t--1` → `--t-5` |
| Space  | `--s-1` → `--s-9`, 4px base                                           |
| Layout | `--w-prose` `--w-page` `--gutter`                                     |
| Motion | `--ease` `--dur` `--dur-cross`                                        |

`--c-accent` (warm sand) is the only non-neutral in the system. It appears on
links, hover, and focus — nowhere else. Spending it in more places is how the
restraint breaks.

## Components

| Component            | Used by            | What it does                                        |
| -------------------- | ------------------ | --------------------------------------------------- |
| `SiteHeader.astro`   | every page         | Wordmark top-left, nav top-right. **White bar** — the one light surface on the site, with its own `--c-nav-*` tokens because the dark-ground accent is too pale to read on white. |
| `SiteFooter.astro`   | every page         | Copyright and inquiry link.                          |
| `HeroBanner.astro`   | home               | One photograph as a banner across the top, no text over it. Which photograph and how it's framed are `heroPhoto` and `heroPosition` in `src/data/site.json`. |
| `StoryBand.astro`    | home               | Half photograph, half writing. Alternates sides.     |
| `GalleryLink.astro`  | home               | The link at the foot of the home page. On click, a flock of nine simple white birds lifts off and the gallery loads about a second later. Decorative and `aria-hidden`; the layer never blocks clicks, and anyone who prefers reduced motion goes straight through with no animation. |
| `PhotoGallery.astro` | gallery            | Column layout that preserves every photograph's native aspect ratio — nothing is cropped to fit a tile. Click opens a `<dialog>` lightbox with the photograph and its description beside it. Arrow keys and Escape work. |

Check this table before building anything new — the thing you want may exist.

## Type

Fraunces for the wordmark, Instrument Serif for headings, Instrument Sans for
everything else.

The wordmark has its own token (`--f-wordmark`) on purpose: it's brand rather
than typography, so it can be changed without disturbing a single heading on
the site. Change that one line to try a different face. Uppercase labels get `--tr-wide` letter-spacing and nothing else does.
Running text stays inside `--w-prose`.

## Accessibility floor

Every photograph needs real alt text. That's the `alt` field, which is
separate from `title` precisely so Jude can title his work the way a
photographer does without stranding anyone using a screen reader. Focus is always visible. The lightbox is a real
`<dialog>`, so Escape and Tab behave. `prefers-reduced-motion` stops the hero
rotating.

## Open decisions

Chosen before we had Jude's photographs in hand. Revisit once the galleries
are real:

- **The accent.** Warm sand `#C9A97A` is a guess. It should relate to Jude's
  actual work.
- **The type pairing.** Instrument Serif/Sans is a good default, not a
  considered response to his pictures.
- **Tagline treatment.** Currently over the hero, bottom-left. Worth testing
  against a quieter placement once real photographs are behind it.
