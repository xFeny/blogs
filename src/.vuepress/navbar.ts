import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "环境配置",
    prefix: "/环境配置/",
    children: [
      "VirtualBox安装CentOS.md",
      "Java环境配置.md",
      "Node.js安装.md",
      "Redis 安装.md",
      
    ],
  },
  {
    text: "Spring Cloud Alibaba",
    prefix: "/Spring Cloud Alibaba/",
    children: [
      "Nacos配置.md",

    ],
  },
  {
    text: "Docker 相关",
    link: "/Docker/",
  },
  {
    text: "杂谈",
    link: "/杂谈/",
  },
  {
    text: '分类',
    link: '/category/java'
  },
  {
    text: '标签',
    link: '/tag/java'
  },
  {
    text: '时间轴',
    link: '/timeline/'
  },
]);
