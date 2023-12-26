import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  hostname: "www.feny.ink",
  // 全局禁用路径导航
  breadcrumb: false,
  // 作者信息
  author: {
    name: "",
    url: "https://www.feny.ink",
  },
  docsDir: "src",

  footer: '<a href="https://beian.miit.gov.cn" target="_blank">粤ICP备18117352号</a>',

  displayFooter: true,

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
