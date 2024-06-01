---
title: Docker 安装
date: 2023-12-28
author: Feny
icon: docker
order: 2
category:
  - Docker
tag:
  - Docker
---

# Docker 安装

## 卸载系统之前的 Docker

这步也算是检查，之前没装docker，也就没有东西可被删除

```sh
yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

## 安装`yum-utils`软件包

```sh
yum install -y yum-utils
```

## 设置存储库

```sh
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

推荐设置为阿里源

```sh
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

执行以下命令安装docker：

```sh
yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## 启动 Docker

```sh
systemctl start docker
```

执行以下命令设置 Docker 开机自启动：

```sh 
systemctl enable docker
```

至此，docker安装完成！

## Portainer 图形化界面安装

拉取镜像

```sh
docker pull portainer/portainer
# 中文版
docker pull 6053537/portainer-ce
```

创建挂载目录

```sh
mkdir -p /data/docker/portainer
```

运行

```sh
docker run -d \
    -p 9000:9000 \
    --name=prtainer \
    --restart=always \
    -v /data/docker/portainer:/data \
    -v /var/run/docker.sock:/var/run/docker.sock \
    6053537/portainer-ce
```

浏览器访问<http://192.168.0.143:9000>，第一次登录的时候需要创建管理员账号，密码长度必须至少为12个字符。

<img src="http://oss.feny.ink/blogs/images/202402052030494.png" alt="image-20240205202956415" style="zoom:50%;" /> 

登录进去选择本地docker环境

<img src="http://oss.feny.ink/blogs/images/202402052048654.png" alt="image-20240205204800579" style="zoom:50%;" />  