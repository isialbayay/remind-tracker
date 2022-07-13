const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/profe": {
        target:
          "https://7qak3a37b4dh7kisebhllubdxq0dnehm.lambda-url.us-east-1.on.aws",
        pathRewrite: { "^/profe": "" },
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
