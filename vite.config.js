import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://shabana0406.github.io/city_data/city_data.json",
    },
  },
  base: "/World/",
  plugins: [react(), eslint()],
});

// export default defineConfig({
//   server: {
//     watch: {
//       usePolling: true,
//     },
//   },

//   plugins: [
//     react({
//       include: "**/*.jsx",
//     }),

//     eslint(),
//   ],
// });
