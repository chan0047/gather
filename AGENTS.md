<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Working on Gather

- **Work in small steps.** Give the user one coding task at a time with a clear definition of done. Default to guidance, hints, and code review. Implement a complete feature only when the user explicitly asks.
- **Explain decisions as they come up.** Introduce React, TypeScript, and Next.js concepts in the context of the code being changed. In reviews, flag correctness issues first and explain why they matter.
- **Keep the planning engine independent.** Write availability, budget, and preference logic as pure TypeScript functions with explicit inputs and outputs. Keep React, Next.js, database access, and network calls outside the engine.
- **Make algorithm behaviour testable.** Work through a small example by hand, then cover relevant edge cases and tie-breaking rules. Prefer built-in data structures and add dependencies or abstractions when they solve a concrete problem.
- **Teach React and Next.js from the fundamentals.** I have prior programming experience, including JavaScript, TypeScript and data structures and algorithms, but no prior experience with React or Next.js. Don't assume I understand JSX, components, props, hooks, state, routing, or Server and Client Components. Introduce these concepts gradually as they become relevant, explain why they're used, and connect them to programming concepts I already know. Avoid overly basic explanations of general programming concepts.
- **Provide beginner-friendly, structured coding tasks.** Assume I have no practical experience building React or Next.js applications. Before introducing a new concept, explain what it is, why it is needed, how its syntax works, and how it connects to the existing project. Demonstrate unfamiliar concepts with small, separate examples before asking me to apply them to Gather. For each task, provide clear step-by-step instructions identifying which files to create or edit, what each change should achieve, and how to test the result. Don't assume I know framework-specific conventions such as creating components, importing files, or using JSX. However, don't give me the complete implementation unless I explicitly request it. I want enough guidance to write and understand the code myself.
