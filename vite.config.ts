import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  build: {
    sourcemap: true,
  },
  base: process.env.VITE_BASE_URL || "/",
});
