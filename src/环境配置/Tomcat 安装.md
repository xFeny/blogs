---
# 是否收藏在博客主题的文章列表中。
# 当填入数字时，数字越大，排名越靠前，类型: boolean | number，默认值: false
# start: true

# 作者
author: Feny
# 写作时间
date: 2024-01-04
icon: tomcat
# 分类
category:
  - 环境配置

# 标签
tag:
  - Tomcat
---

# Tomcat 安装

## CentOS 下安装

检查是否已安装JDK，如果未安装，可以看这里[教程](http://localhost:1000/%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE/Java%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html)

```sh
java -version
```

Tomcat 官网：<https://tomcat.apache.org/>

<img src="http://oss.feny.ink/blogs/images/202401041615045.png" alt="image-20240104161541981" style="zoom:50%;" /> 

选择安装目录

```sh
cd /usr/local
```

下载

```sh
wget https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.84/bin/apache-tomcat-9.0.84.tar.gz --no-check-certificate
```

如果`wget`未安装

```sh
yum install -y wget
```

解压

```sh
tar -xzvf apache-tomcat-9.0.84.tar.gz
```

启动`Tomcat`

```sh
./apache-tomcat-9.0.84/bin/startup.sh
```

查看启动日志

```sh
tail -f ./apache-tomcat-9.0.84/logs/catalina.out
```

![image-20240104163625104](http://oss.feny.ink/blogs/images/202401041636150.png) 

开放端口

```sh
firewall-cmd --zone=public --add-port=8080/tcp --permanent
```

重启防火墙

```sh
firewall-cmd --reload
```

浏览器访问

<img src="http://oss.feny.ink/blogs/images/202401041641046.png" alt="image-20240104164100949" style="zoom:50%;" /> 

## Docker 下安装

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
