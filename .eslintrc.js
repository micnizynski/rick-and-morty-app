module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  rules: {
    // override/add rules settings here, such as:
    // "vue/no-unused-vars": "error",
    "vue/script-setup-uses-vars": "error",
  },
};
