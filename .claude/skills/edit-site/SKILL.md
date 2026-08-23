---
name: edit-site
description: Make a change to the Jude Polson Photography website — add or edit photographs, change words, adjust the design. Use whenever someone asks to change anything about the site.
---

# Editing the site

## First, always

Read `CLAUDE.md` at the repo root. It routes to `docs/runbook.md`,
`docs/content-model.md`, `docs/design-system.md`, and `docs/voice.md`. Do not
skip this even for a one-word change — the rules in those files are what keep
three people's edits coherent.

## Then follow the runbook

`docs/runbook.md` has the exact procedure: sync, branch, edit, build, push,
pull request, report the preview URL. Follow it step by step. Peter merges.

## Never

- Commit to `main`
- Push a failing build
- Inline a color, size, or space that isn't a token
- Invent a fact about Jude, a photograph, or a place
- Publish an exact location, a school, or a contact address Jude reads alone

## Report back

The preview URL, and one line on what changed.
