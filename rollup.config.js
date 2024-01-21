// rollup.config.js
import { babel } from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import tailwindConfig from "./tailwind.config.js";

export default {
  input: "src/index.tsx", // 프로젝트 진입점 파일
  output: [
    {
      file: "dist/index.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({
      extensions: [".css"],
      plugins: [tailwindcss(tailwindConfig)],
    }),
    commonjs(),
    nodeResolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: "./tsconfig.json",
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**/*.(ts|tsx|js|jsx)",
      include: "src/**/*.(ts|tsx|js|jsx)",
      extensions: [".ts", ".tsx", ".js", ".jsx", ".es", ".es6", ".mjs"],
    }),
  ],
  external: ["react", "react-dom"], // 외부 의존성 지정
};
