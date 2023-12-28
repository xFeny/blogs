import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";

export default hopeTheme({
  hostname: "www.feny.ink",

  author: {
    name: "",
    url: "https://www.feny.ink",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  docsDir: "src",

  footer: '<a href="https://beian.miit.gov.cn" target="_blank">粤ICP备18117352号</a>',

  displayFooter: true,

  navbar,

  blog: {
    description: "一个默默无闻的后端开发者",
  },

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
