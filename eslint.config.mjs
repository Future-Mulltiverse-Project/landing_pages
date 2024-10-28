// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [
  // 1. Base configurations:
  {files: ["**/*.{cjs,vue}"]}, 
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended, 
  ...pluginVue.configs["flat/essential"], // Use 'flat' for Vue 3
  {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},

  // 2. Your custom rules:
  {
    rules: {
      "prettier/prettier": 0,
      "vue/multi-word-component-names": 0,
      "vue/no-multiple-template-root": 0,
      "import/no-named-as-default": 0,
      "vue/prop-name-casing": 0,
      "vue/no-dupe-keys": 0,
      "vue/no-v-html": 0,
      "camelcase": 0,
      "@typescript-eslint/no-unused-vars": 0,
      "no-unused-vars": 0, 
      "no-console": 0,
      "spaced-comment": 0,
      "vue/attributes-order": 0,
      "import/first": 0,
      "import/order": 0,
      "vue/attribute-hyphenation": 0,
      "vue/require-default-prop": 0,
      "vue/valid-v-bind": 0,
      "vue/no-parsing-error": 0,
      "@typescript-eslint/no-empty-object-type": 0,
      "@typescript-eslint/no-wrapper-object-types" : 0,
      "@typescript-eslint/no-unused-vars": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/triple-slash-reference":0,
      "@typescript-eslint/no-require-imports": 0,
      "no-undef": 0,
      "@typescript-eslint/no-unused-expressions" : 0,
      "@typescript-eslint/ban-ts-comment": 0,
      "getter-return":0,
      "no-sparse-arrays":0,
      "no-irregular-whitespace":0,
      "no-constant-condition":0,
      "no-useless-escape":0,
      "no-unexpected-multiline":0,
      "no-cond-assign": 0 ,
      "no-control-regex": 0,
      "no-dupe-keys": 0,
      "no-fallthrough": 0,
      "no-func-assign": 0,
      "no-global-assign": 0,
      "no-empty": 0,
      "no-redeclare": 0,
      "no-self-assign":0,
      "no-unsafe-finally":0,
      "@typescript-eslint/no-this-alias": 0,
      "no-extra-boolean-cast": 0,
      "no-constant-binary-expression" : 0,
      "no-prototype-builtins": 0,
      "no-case-declarations": 0,
      "no-setter-return":0,
      "require-yield": 0,
      "unicorn/no-array-reduce": 0
    }
  }
];