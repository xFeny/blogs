---
# 是否收藏在博客主题的文章列表中。
# 当填入数字时，数字越大，排名越靠前，类型: boolean | number，默认值: false
# start: true

# 作者
author: Feny
# 写作时间
date: 2024-01-04
# 当前页面图标的 FontClass 或文件路径
# icon: tomcat
# 分类
category:
  - 环境配置

# 标签
tag:
  - Tomcat
---

# Tomcat 安装

```sh
docker pull tomcat
```

挂载目录

```sh
mkdir -p /data/docker/tomcat /data/docker/tomcat/logs
```

启动

```sh
docker run -d --name=tomcat -p 8080:8080 tomcat
```

复制`tomcat`文件

```sh
docker cp tomcat:/usr/local/tomcat/conf /data/docker/tomcat/
docker cp tomcat:/usr/local/tomcat/webapps.dist/ /data/docker/tomcat/webapps/
```

删除

```sh
docker stop tomcat && docker rm tomcat
```

启动

```sh
docker run -itd \
--name=tomcat \
--restart=always \
-p 8080:8080 \
-v /data/docker/tomcat/conf:/usr/local/tomcat/conf \
-v /data/docker/tomcat/logs:/usr/local/tomcat/logs \
-v /data/docker/tomcat/webapps:/usr/local/tomcat/webapps \
tomcat
```
