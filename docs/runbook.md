# Runbook — how to make a change

Follow this exactly. It is written for an agent starting with no memory of any
previous session.

## Every change

1. **Sync.** `git checkout main && git pull`
2. **Branch.** `git checkout -b edit/<short-slug>` — e.g. `edit/heron-caption`,
   `edit/new-gallery-photos`. Never work on `main`.
3. **Read the contract.** `CLAUDE.md` and whichever of `docs/` applies:
   content changes → `content-model.md` and `voice.md`; visual changes →
   `design-system.md`.
4. **Make the change.** Smallest edit that does the job. Content changes should
   touch only `src/content/` and `src/data/site.json`.
5. **Build.** `npm run build`. It must pass. A failed build is never pushed.
6. **Look at it.** `npm run dev` and check the affected page, at a phone width
   as well as a desktop one.
7. **Commit and push.** One commit, present tense, plain language:
   `git commit -am "Add three photos to the gallery"` then
   `git push -u origin edit/<short-slug>`
8. **Open a pull request.** Title it in plain language. Body: what changed and
   what to look at.
9. **Report back exactly two things:** the preview URL Cloudflare posts on the
   pull request, and a one-line summary. Do not paste the diff.

## Who merges

Peter. Not the agent, and not automatically — even when the change is obviously
correct. `main` is protected: it requires a pull request and blocks force
pushes.

## If something looks wrong on the live site

1. `git revert <merge-commit>` on a branch, PR it, merge. Live again in about a
   minute.
2. Faster option for an emergency: Cloudflare keeps every deployment. Roll back
   to the previous version from the Workers dashboard, then fix it properly in
   Git afterwards.

## Adding photographs

See `docs/content-model.md`. Short version: the image file and its `.md` file
sit side by side in `src/content/photos/`, with matching names.
