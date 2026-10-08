<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


## Project Instructions

- Use Tailwind CSS for styling
- When needed break up pages or large/heavy components into readable and modular components and place them inside a "components" folder in the subdirectory
- Name new component files in kebab-case

### Sanity CMS Instructions
- Ignore this section if the request doesn't require Sanity or Sanity is not in the project
- Add queries in sanity/queries folder and split them into files as needed
- Try to use sanityFetch to retrieve Sanity data
- Do ```npm run typegen``` when you add/update queries
- When page content is being connected with Sanity, break up pages into section objects if needed, like Hero Section, About Section for the Home Page singleton (and set its Sanity icon to DocumentIcon)