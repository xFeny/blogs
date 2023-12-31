---
date: 2023-12-28
author: Feny
icon: docker
category:
  - Docker
tag:
  - Docker
---

# Docker 安装

## 一、卸载系统之前的 Docker

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

## 二、设置安装地址

安装`yum-utils`软件包

```sh
yum install -y yum-utils
```

设置存储库

```sh
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

推荐设置为阿里源

```sh
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

## 三、安装docker

执行以下命令安装docker：

```sh
yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## 四、启动 Docker

启动 Docker

```sh
systemctl start docker
```

通过运行镜像来验证Docker Engine安装是否成功

```sh
docker run hello-world
```

此命令下载测试映像并在容器中运行它。当容器运行时，它会打印一条确认消息并退出。

## 五、设置 Docker 开机自启动

执行以下命令设置 Docker 开机自启动：

```sh 
systemctl enable docker
```

至此，docker安装完成！

## 七、附录（Docker的常用命令）



| 序号 | 命令                                    | 释义                                                         |
| ---- | --------------------------------------- | ------------------------------------------------------------ |
| 1    | docker --help                           | 帮助，查看docker命令                                         |
| 2    | systemctl start docker                  | 启动docker                                                   |
| 3    | systemctl stop docker                   | 关闭docker                                                   |
| 5    | systemctl enable docker                 | 自启动docker                                                 |
| 6    | systemctl restart docker                | 重启docker                                                   |
|      | systemctl status docker                 | 查看docker的运行状态                                         |
| 7    | docker version                          | 查看docker版本信息                                           |
| 8    | docker-v                                | 查看docker版本号                                             |
| 9    | docker info                             | 查看docker版本信息                                           |
| 10   | docker images                           | 查看docker所有镜像                                           |
| 11   | docker pull [镜像名]                    | 拉取镜像，不指定版本号时，默认拉取最新版本。如：<br>① 不指定版本 docker pull mysql<br/>② 指定版本 docker pull mysql:5.7.7 |
| 12   | docker rmi -f [镜像名/镜像ID]           | 按名或ID删除镜像                                             |
| 13   | docker image rm [镜像名/镜像ID]         | 强制删除镜像                                                 |
| 14   | docker ps                               | 查看正在运行的镜像容器                                       |
| 15   | docker ps -a                            | 查看时所有镜像容器                                           |
| 16   | docker update [容器名] --restart=always | 设置docker内容器的自启动。<br/>docker内的容器默认是不会自启动的，要自启动需要设置。<br/>如 docker update redis --restart=always<br/>和 docker update mysql --restart=always |

