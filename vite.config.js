// vite.config.js
const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "form1.html"),
        nested: resolve(__dirname, "form2.html"),
        nested: resolve(__dirname, "form3.html"),
        nested: resolve(__dirname, "form4.html"),
        nested: resolve(__dirname, "form5.html"),
      },
    },
  },
});
