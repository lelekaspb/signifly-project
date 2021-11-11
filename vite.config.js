// vite.config.js
const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        form1: resolve(__dirname, "form1.html"),
        form2: resolve(__dirname, "form2.html"),
        form3: resolve(__dirname, "form3.html"),
        form4: resolve(__dirname, "form4.html"),
        form5: resolve(__dirname, "form5.html"),
      },
    },
  },
});
