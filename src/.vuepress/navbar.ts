import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "环境配置",
    icon: "setting",
    prefix: "/环境配置/",
    children: [
      "VirtualBox安装CentOS",
      "Docker 安装",
      "Java环境配置",
      "MySQL 安装",
      "Redis 安装",
      "Nginx 安装",
      "Node.js安装",

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
    prefix: "/杂项/",
    children: [
      {
        text: "常用命令",
        children: ["Docker 常用命令.md", "Linux 常用命令.md"],
      },
      {
        text: "全部内容",
        link: "/杂项/"
      }
    ],
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
