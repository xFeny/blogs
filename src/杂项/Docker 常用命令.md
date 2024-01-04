---
# 是否收藏在博客主题的文章列表中。
# 当填入数字时，数字越大，排名越靠前，类型: boolean | number，默认值: false
# start: true

# 作者
author: Feny
# 写作时间
date: 2024-01-04
icon: docker
# 分类
category:
  - Docker

# 标签
tag:
  - Docker
  - 常用命令
---

# Docker 常用命令

原文：<https://blog.51cto.com/u_16099178/7533617?abTest=51cto>

## 容器操作

### 创建一个新的容器

```sh
docker run -itd -p 8080:8080 --name=tomcat tomcat
```

run命令常用参数：

```sh
-i 以交互模式运行容器，通常与 -t 同时使用
-t 为容器重新分配一个伪输入终端，通常与 -i 同时使用
-d 后台运行容器，并返回容器ID
-c 参数用于给运行的容器分配cpu的shares值
-m 参数用于限制为容器的内存信息，以 B、K、M、G 为单位
-v 参数用于挂载一个卷，可以用多个-v参数同时挂载多个卷
-p 指定端口映射，格式为：主机(宿主)端口:容器端口 或者 主机(宿主)IP:主机(宿主)端口:容器端口
-P 随机端口映射，容器内部端口随机映射到主机的端口
-e 设置环境变量
--name=nginx-lb 为容器指定一个名称
--net=bridge 指定容器的网络连接类型，支持 bridge/host/none/container: 四种类型
```

可以使用 docker run --help 可以查看详细参数。

**实例：** <https://www.runoob.com/docker/docker-run-command.html>

### 停止容器

停止一个运行中的容器

```sh
docker stop demo1
```

### 启动容器

启动一个或多个已经被停止的容器

```sh
docker start demo1
```

### 重启容器

```sh
docker restart demo1
```

### 查看容器

```sh
# 查看正在运行的容器
docker ps
# 查看所有容 包括停止的容器
docker ps -a
# 查看容器详细信息
docker inspect demo1
```

### 容器进程

```sh
#top支持 ps 命令参数，格式：docker top [OPTIONS] CONTAINER [ps OPTIONS]
#列出redis容器中运行进程
docker top redis
#查看所有运行容器的进程信息
for i in  `docker ps |grep Up|awk '{print $1}'`;do echo \ &&docker top $i; done
```

### 容器日志

```sh
#查看redis容器日志，默认参数
docker logs redis
#查看redis容器日志，参数：-f 跟踪日志输出；-t 显示时间戳；--tail 仅列出最新N条容器日志；
docker logs -f -t --tail=20 redis
#查看容器redis从2020年06月01日后的最新10条日志。
docker logs --since="2020-06-01" --tail=10 redis
```

### 进入容器

```sh
docker exec -it demo1 /bin/sh
```

### 删除容器

删除一个或多个容器

```sh
#　删除一个已经停止运行的容器
docker rm demo1
# 强制删除正在运行的容器
docker rm -f dome1
```

### 停止容器

```sh
#停止一个运行中的容器
docker stop redis
#杀掉一个运行中的容器
docker kill redis
```

### 数据拷贝

用于容器与主机之间的数据拷贝

```sh
# 将容器nginx.conf文件复制到宿主机
docker cp nginx:/etc/nginx/nginx.conf /data/docker/nginx/conf

# 将宿主机nginx.conf文件复制到容器
docker cp /data/docker/nginx/conf/nginx.conf nginx:/etc/nginx
```

### 导入、导出容器

```sh
# 将容器导出为镜像
docker export demo1 > demo1.tar
# 导入镜像
docker import demo1.tar xxx/demo
```

![](http://oss.feny.ink/blogs/images/202401041334279.webp) 

## 镜像操作

### 搜索镜像

```sh
# 在远程仓库搜索镜像
docker search ngix
```

### 获取镜像

```sh
docker pull ngix
# 指定版本
docker pull mysql:8.0
# 从不同的仓库拉取镜像
# docker pull [Docker Registry 地址[:端口号]/]仓库名[:标签]

```

### 删除镜像

```sh
docker rmi ngix
```

### 列出本地镜像

```sh
docker images
```