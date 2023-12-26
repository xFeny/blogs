import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "环境配置",
    prefix: "/posts/环境配置/",
    // collapsable: true,
    // children: "structure",
    children: [
      "Java环境配置/Java环境配置.md",
      "VirtualBox安装CentOS/VirtualBox安装CentOS.md",
    ],
  },
  {
    text: "Spring Could Alibaba",
    prefix: "/posts/Spring Cloud Alibaba/",
    children: [
      "nacos/Nacos配置.md",
    ],
  },
  {
    text: '标签',
    icon: 'tag',
    link: '/tag/java'
  },
  {
    text: '分类',
    icon: 'categoryselected',
    link: '/category/java'
  },
  {
    text: '时间轴',
    icon: 'time',
    link: '/timeline/'
  },
]);
