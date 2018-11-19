const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: true }], // change importing css to less
    config
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "primary-color": "#5F26FA",
      "link-color": "#1DA57A",
      "border-radius-base": "1px",
      "success-color": "#52c41a",
      "body-background": "#181818",
      "text-color": "#AAAAAA",
      "input-bg": "#333333",
      "component-background": "#333333",
      "heading-color": "fade(#fff, 85%)",
      "text-color": "fade(#fff, 65%)",
      "text-color-secondary": "fade(#fff, 45%)",
      "heading-color-dark": "fade(#fff, 100%)",
      "text-color-dark": "fade(#fff, 85%)",
      "text-color-secondary-dark": "fade(#fff, 65%)",
      "border-color-base": "#5F26FA",
      "border-width-base": "0px",
      "background-color-base": "#282828",
      "table-selected-row-bg": "#B04AEA",
      "table-expanded-row-bg": "#B04AEA",
      "tree-directory-selected-color": "#B04AEA",
      "font-size-base ": "inherit",
      "font-size-lg ": "inherit",
      "font-size-sm": "inherit",
    },
    javascriptEnabled: true
  })(config, env);
  return config;
};
