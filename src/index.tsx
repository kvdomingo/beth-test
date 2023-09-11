import html from "@elysiajs/html";
import { Elysia } from "elysia";

import * as elements from "typed-html";

const app = new Elysia()
  .use(html())
  .get("/", ({ html }) =>
    html(
      <BaseHtml>
        <body>
          <main class="container flex h-screen flex-col items-center justify-center gap-2">
            <h1>Hello, BETH!</h1>
            <button
              hx-post="/click"
              hx-swap="innerHTML"
              class="rounded border border-solid border-blue-500 bg-blue-400 px-4 py-2 text-white hover:bg-blue-500 active:bg-blue-600"
            >
              KEKW
            </button>
          </main>
        </body>
      </BaseHtml>,
    ),
  )
  .get("/index.css", () => Bun.file("./tailwind-gen/index.css"))
  .post("/click", () => <h2>GIT GUD</h2>)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

function BaseHtml({ children }: elements.Children) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>BETH</title>
      <script src="https://unpkg.com/htmx.org@1.9.5"></script>
      <script src="https://unpkg.com/hyperscript.org@0.9.11"></script>
      <link rel="stylesheet" href="/index.css" />
    </head>
    ${children}
  </html>
  `;
}
