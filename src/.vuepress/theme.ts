import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "www.feny.ink",

  author: {
    name: "",
    url: "https://www.feny.ink",
  },

  // 图标支持
  iconAssets: "//at.alicdn.com/t/c/font_4393867_ped7m1yzhlk.css",
  // 设置图标前缀
  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  // 文档目录
  docsDir: "src",

  // 页脚
  footer: '<a href="https://beian.miit.gov.cn" target="_blank">粤ICP备18117352号</a>',

  // 是否显示页脚
  displayFooter: true,

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  blog: {
    // sidebarDisplay: "always", 
    description: "一个默默无闻的后端开发者",
  },

  pageInfo: ["Author", "Date", "Original", "Category", "Tag", "ReadingTime", "Word", "PageView"],

  plugins: {
    blog: true,
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
});
