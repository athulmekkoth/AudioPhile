import react from "@vitejs/plugin-react";

export default {
  server: {
    proxy: {
      "/api": {
        target: "http://143.110.183.82",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx",
    },
  }
}