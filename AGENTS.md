# AGENTS.md

## Project context

This workspace is a small static portfolio site. The main file is [index.html](index.html), and there is no application framework, build system, package manifest, or test suite in the project yet.

## Working conventions

- Keep changes focused and minimal.
- Prefer semantic HTML and readable structure over overly clever markup.
- Maintain accessibility and responsive behavior: good contrast, meaningful headings, alt text for images, and keyboard-friendly interactions.
- Avoid introducing frameworks, libraries, or build steps unless the task explicitly requires them.
- Keep the project lightweight and easy to open locally in a browser.

## Preferred implementation style

- For a static page, use simple HTML/CSS/JS in the existing files unless there is a strong reason to split concerns.
- Preserve the current design intent and content unless the request clearly asks for a redesign.
- Favor maintainable, straightforward code over optimization for complexity that does not exist in the project.

## Verification

- Since this is a static HTML site, verify visually by opening [index.html](index.html) in a browser or serving the folder locally, for example:
  `python -m http.server 8000`
  Then open `http://localhost:8000`.
- Check that all relative asset paths still resolve correctly after edits.

## When making changes

- Prefer small, targeted edits.
- Do not add unnecessary dependencies or config files.
- If additional project structure becomes necessary later, document it in this file and keep the instructions aligned with the actual project setup.
