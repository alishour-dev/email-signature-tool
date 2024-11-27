import { defineConfig, type UserConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { visualizer } from "rollup-plugin-visualizer"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
	publicDir: "public",
	build: {
		outDir: "dist",
		rollupOptions: {
			output: {
				manualChunks: {
					dependencies: ["react", "react-dom"],
				},
			},
			treeshake: true,
		},
		chunkSizeWarningLimit: 2000,
		minify: true,
		sourcemap: false,
		commonjsOptions: {
			ignore: ["bufferutil", "utf-8-validate"],
		},
	},
	optimizeDeps: {
		include: ["react", "react-dom"],
	},
	base: "/",
	plugins: [react(), tsconfigPaths({ ignoreConfigErrors: true }), visualizer({ open: false })],
} as UserConfig)
