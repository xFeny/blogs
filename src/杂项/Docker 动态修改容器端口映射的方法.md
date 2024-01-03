---
# 是否收藏在博客主题的文章列表中。
# 当填入数字时，数字越大，排名越靠前，类型: boolean | number，默认值: false
# start: true

# 作者
author: Feny
# 写作时间
date: 2024-01-01
# 当前页面图标的 FontClass 或文件路径
# icon: string
# 分类
category:
  - Docker

# 标签
tag:
  - Docker
  - 问题解决
---

# Docker 动态修改容器端口映射的方法

查询容器`ip`

```sh
# docker inspect mysql | grep "IPAddress"
docker inspect --format '{{ .NetworkSettings.IPAddress }}' 容器ID/容器名
```

`Iptables`端口映射

```sh
iptables -t nat -A DOCKER -p tcp --dport <容器外部端口> -j DNAT --to-destination <容器ip>:<容器内部端口>
```

取消端口映射

```sh
iptables -t nat -D DOCKER -p tcp -d 0/0 --dport <容器外部端口> -j DNAT --to-destination <容器ip>:<容器内部端口>
```

## 示例

如`nginx`负载均衡`nacos`集群，要映射`8848`和`9848`端口

```sh
docker inspect --format '{{ .NetworkSettings.IPAddress }}' nginx
```

![image-20240101202602940](http://oss.feny.ink/blogs/images/202401012026973.png) 

```sh
iptables -t nat -A DOCKER -p tcp --dport 8848 -j DNAT --to-destination 172.17.0.3:8848
iptables -t nat -A DOCKER -p tcp --dport 9848 -j DNAT --to-destination 172.17.0.3:9848
```