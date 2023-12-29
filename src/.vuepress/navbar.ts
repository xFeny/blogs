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
      "MySQL 安装.md",
      "Nginx 安装.md",
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
    text: "教程",
    link: "/教程/",
  },
  {
    text: "杂项",
    link: "/杂项/",
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
