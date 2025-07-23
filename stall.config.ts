import { build } from "bun";
import chokidar from "chokidar";

const PORT = 5155;
const DIST = "dist";
const ENTRY = ["./src/index.ts"];
const FILENAME = "index.js";
const OUTPUT = `${DIST}/${FILENAME}`;

const rebuild = async () => {
  try {
    await build({
      entrypoints: ENTRY,
      outdir: DIST,
      target: "browser",
      sourcemap: "none",
      minify: true,
      splitting: false,
      format: "esm",
      external: ["react", "react-dom"],
    });
    const date = new Date().toLocaleTimeString();
    console.log(`[✓] Built at ${date}`);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Build failed";
    console.error(`[x] Build error: ${message}`);
  }
};

// Production mde
const isProduction =
  process.argv.includes("--production") ||
  process.env.NODE_ENV === "production";

await rebuild();

// Only run dev server and watch in development mode
if (!isProduction) {
  chokidar.watch("src", { ignoreInitial: true }).on("all", async () => {
    await rebuild();
  });

  // Dev server
  console.log(`🚀 Serving: http://localhost:${PORT}/${DIST}/${FILENAME}`);

  Bun.serve({
    port: PORT,
    fetch(req) {
      const url = new URL(req.url);
      if (url.pathname === `/${DIST}/${FILENAME}`) {
        return new Response(Bun.file(OUTPUT), {
          headers: { "Content-Type": "application/javascript" },
        });
      }

      return new Response("Not Found", { status: 404 });
    },
  });
} else {
  console.log("✅ Build complete!");
  process.exit(0);
}
