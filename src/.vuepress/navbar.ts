import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "环境配置",
    icon: "setting",
    prefix: "/环境配置/",
    children: [
      "VirtualBox安装CentOS",
      "Java环境配置",
      "Node.js安装",
      "Redis 安装",
      "MySQL 安装",
      "Nginx 安装",
      "Docker 安装",
    ],
  },
  {
    text: "Spring Cloud Alibaba",
    icon: "spring",
    prefix: "/Spring Cloud Alibaba/",
    children: [
      "Nacos",
    ],
  },
  {
    text: "教程",
    icon: "book",
    link: "/教程/",
  },
  {
    text: "杂项",
    icon: "write",
    link: "/杂项/",
  },
  {
    text: '分类',
    icon: "category",
    link: '/category/java'
  },
  {
    text: '标签',
    icon: "tag",
    link: '/tag/java'
  },
  {
    text: '时间轴',
    icon: "timeline",
    link: '/timeline/'
  },
]);
