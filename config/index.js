const path = require("path");

function resolve(dir) {
  return path.resolve(__dirname, "..", dir);
}
const config = {
  projectName: "taro-wzj-mp",
  date: "2021-5-25",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: "src",
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {
    A: '"a"' // JSON.stringify('a')
  },
  sass: {
    resource: ["src/styles/variable.scss", "src/styles/mixins.scss"],
    projectDirectory: path.resolve(__dirname, "..")
  },
  alias: {
    "@/components": resolve("src/components"),
    "@/utils": resolve("src/utils"),
    "@/package": resolve("package.json"),
    "@/project": resolve("project.config.json")
  },
  copy: {
    patterns: [
      // { from: "src/asset/tt/", to: "dist/asset/tt/", ignore: ["*.js"] }, // 指定需要 copy 的目录
      // { from: "src/asset/tt/sd.jpg", to: "dist/asset/tt/sd.jpg" } // 指定需要 copy 的文件
    ],
    options: {
      // ignore: ["*.js", "*.css"] // 全局的 ignore
    }
  },
  framework: "vue",
  mini: {
    postcss: {
      // 可以进行 autoprefixer 的配置。配置项参考官方文档 https://github.com/postcss/autoprefixer
      autoprefixer: {
        enable: true,
        config: {
          // autoprefixer 配置项
        }
      },
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  }
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
