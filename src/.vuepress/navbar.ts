import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "环境配置",
    prefix: "/posts/环境配置/",
    children: [
      "虚拟机/VirtualBox安装CentOS.md",
      "Java环境配置/Java环境配置.md",
      "Node.js安装/Node.js安装.md",
      "Redis 安装/Redis 安装",
      
    ],
  },
  {
    text: "Spring Cloud Alibaba",
    prefix: "/posts/Spring Cloud Alibaba/",
    children: [
      "nacos/Nacos配置.md",
    ],
  },
  {
    text: "Docker 相关",
    link: "/posts/Docker/",
  },
  {
    text: '分类',
    icon: 'categoryselected',
    link: '/category/java'
  },
  {
    text: '标签',
    icon: 'tag',
    link: '/tag/java'
  },
  {
    text: '时间轴',
    icon: 'time',
    link: '/timeline/'
  },
]);
