const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        // additionalData: `@import "@/styles/_variables.scss";` // 필요에 따라 글로벌 변수를 설정할 수 있습니다.
      }
    }
  }
})
