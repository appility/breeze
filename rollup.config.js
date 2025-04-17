import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import copy from "rollup-plugin-copy";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "cjs",
      sourcemap: true,
      exports: "named",
      preserveModules: true,
      preserveModulesRoot: "src",
      entryFileNames: "cjs/[name].js",
    },
    {
      dir: "dist",
      format: "esm",
      sourcemap: true,
      exports: "named",
      preserveModules: true,
      preserveModulesRoot: "src",
      entryFileNames: "esm/[name].js",
    },
  ],
  plugins: [
    peerDepsExternal(), // Externalize peer dependencies

    resolve({
      preferBuiltins: true, // Prevents issues with built-in modules
      extensions: [".js", ".ts", ".tsx"],
    }),

    commonjs(), // Converts CommonJS to ES6 for compatibility

    postcss({
      extract: true,
      minimize: true,
      sourceMap: true,
      config: {
        path: "./postcss.config.cjs",
      },
      plugins: [tailwindcss(), autoprefixer()],
    }),

    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "./dist/types",
      rootDir: "./src",
    }),

    babel({
      exclude: "node_modules/**",
      babelHelpers: "runtime",
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: ["@babel/plugin-transform-runtime"],
    }),

    terser(), // Minify final bundle

    copy({
      targets: [
        { src: "src/variables.css", dest: "dist" },
      ], // Copy extra CSS files
    }),
  ],
  external: [
    "react",
    "react-dom",
    "react-router-dom",
    "tslib",
    "@heroicons/react",
    "@heroicons/react/20/solid",
    "@heroicons/react/24/solid",
    "@heroicons/react/24/outline",
    "@headlessui/react",
    "@headlessui/react/dist/components/menu/menu.js",
  ], // Ensures dependencies are loaded from host app, not bundled
};
