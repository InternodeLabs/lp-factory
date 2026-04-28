# Outreach

Internal scratch folder for cold-email follow-up artifacts (writeups, playbooks, one-pagers we promised in a thread). Each recipient gets a subfolder named `<company>-<person>/`.

This folder is **not part of the published content catalog**:

- Files here are not parsed by `scripts/generate-content-map.mjs` and never appear in `content/content-map.md` (the generator only walks `src/content/answers/`).
- Files here are not validated by `scripts/check-meta-lengths.mjs` (no frontmatter expected, no em-dash check, no `publishedAt`/`updatedAt` rules).
- Files here are not built into the Astro site (`src/content/` is the only content collection).

That said, when drafting anything in this folder, still apply the house voice from [`content/writing-guide.md`](../content/writing-guide.md). The recipient may forward it; it should sound like the rest of our writing.

## Layout

```
outreach/
  README.md                              (this file)
  pario-daniel-ndukwu/
    email-body.md                        (short version, pastes into Gmail)
    playbook.md                          (longer attached writeup)
```

## Conventions

- One subfolder per recipient. Folder name: `<company>-<first>-<last>` in kebab-case.
- `email-body.md` is the short version meant for the email body itself (no frontmatter, no h1).
- `playbook.md` (or any descriptive name) is the longer attachment-style doc.
- Keep the cold-email thread the file is responding to in a `thread.txt` next to it if useful for context, but never commit anything containing the recipient's private reply text without their consent.
