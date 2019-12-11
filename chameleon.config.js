
// 设置静态资源的线上路径
const publicPath = 'http://www.hisanlian.com';
// 设置api请求前缀
const apiPrefix = 'http://api.hisanlian.com';

cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  platforms: ["web","weex","wx","alipay","baidu","qq"],
  apiDomain: apiPrefix,
  buildInfo: {
    wxAppId: '123456'
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}`,
      apiPrefix
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  }
})

