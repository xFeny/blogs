---
author: Feny
date: 2023-12-26
icon: nacos
category:
  - Spring Cloud Alibaba
tag:
  - Spring Cloud Alibaba
  - Nacos
---

# Alibaba Nacos 相关

## 一、CentOS 下安装 Nacos

### 单机模式运行

#### 第一步、最新版安装包 

访问 `Nacos GitHub`：<https://github.com/alibaba/nacos/releases/>获取`Nacos `

<img src="http://oss.feny.ink/blogs/images/202401011303922.png" alt="image-20240101130354872" style="zoom:50%;" /> 

#### 第二步、下载解压缩。

进入或创建一个你喜欢的目录

```sh
wget https://github.com/alibaba/nacos/releases/download/2.3.0/nacos-server-2.3.0.tar.gz
tar -xvf nacos-server-2.3.0.tar.gz
```

#### 第三步、初始化数据库表

创建名为`nacos`的数据库，之后使用 `MySQL` 客户端执行 `nacos/conf/mysql-schema.sql` 文件，完成建表工作。
![](http://oss.feny.ink/blogs/images/202312281325914.png)

#### 第四步、配置 Nacos 数据源

找到配置文件 `application.properties`，文件路径如下：

```sh
nacos/conf/application.properties
```

默认数据源配置都被`#`号注释，删除注释按下方示例配置数据源即可。

```sh
spring.sql.init.platform=mysql

### Count of DB:
db.num=1

### Connect URL of DB:
db.url.0=jdbc:mysql://127.0.0.1:3306/nacos?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
db.user.0=root
db.password.0=123456
```

**遇到的问题** 
`Nacos`启动时报以下错误错：

```sh
Caused by: com.mysql.cj.exceptions.UnableToConnectException: Public Key Retrieval is not allowed
        at sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)
        at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)
        at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)
        at java.lang.reflect.Constructor.newInstance(Constructor.java:423)
        at com.mysql.cj.exceptions.ExceptionFactory.createException(ExceptionFactory.java:61)
        at com.mysql.cj.exceptions.ExceptionFactory.createException(ExceptionFactory.java:85)
        at com.mysql.cj.protocol.a.authentication.CachingSha2PasswordPlugin.nextAuthenticationStep(CachingSha2PasswordPlugin.java:130)
        ... 142 common frames omitted
```

**解决办法：** 在 `db.url` 后面加上 `allowPublicKeyRetrieval=true` 即可。

#### 第五步、以单点方式启动 Nacos。

```sh
cd nacos/bin
sh startup.sh -m standalone
```

默认 `Nacos` 以后台模式启动，利用 `tail` 命令查看启动日志。可以看到 `Nacos` 默认端口为 `8848`，下
面日志说明 `Nacos` 单机模式已启动成功。  

```sh
tail -f /usr/local/nacos/logs/start.out
```
#### 第六步、设置防火墙对 Nacos 端口放行。  
|   端口     |   描述     |
| -------- | -------- |
| 8848 | 主端口，客户端、控制台及OpenAPI所使用的HTTP端口 |
| 9848 | 客户端gRPC请求服务端端口，用于客户端向服务端发起连接和请求 |
| 9849 | 服务端gRPC请求服务端端口，用于服务间同步等 |
| 7848 | Jraft请求服务端端口，用于处理服务端间的Raft相关请求 |  

如果服务器启动了防火墙，需要开放以下端口：

```sh 
firewall-cmd --zone=public --add-port=8848/tcp --permanent
firewall-cmd --zone=public --add-port=7848/tcp --permanent
firewall-cmd --zone=public --add-port=9848/tcp --permanent
firewall-cmd --zone=public --add-port=9849/tcp --permanent
```

重启防火墙使配置生效
```sh 
firewall-cmd --reload
```
此时，`Nacos`已单机部署完毕。  

#### 第七步，进入 Nacos 管理界面  
打开浏览器，地址栏输入：<http://localhost:8848/nacos/> 
![](http://oss.feny.ink/blogs/images/202312281325743.png)

### Nacos集群模式运行

#### 集群部署架构图

![deployDnsVipMode.jpg](http://oss.feny.ink/blogs/images/202401011259702.jpeg) 

#### 第一步、环境准备

请确保是在环境中安装使用:

1. 64 bit OS Linux/Unix/Mac，推荐使用Linux系统。
2. 64 bit JDK 1.8+；
3. Nginx；
4. 3个或3个以上Nacos节点才能构成集群。

服务器列表：

```
# Nginx 服务器
192.168.0.143

# Nacos 服务器
192.168.0.134
192.168.0.136
192.168.0.161
```

分别在`192.168.0.134`、`192.168.0.136`、`192.168.0.161`安装好Nacos和配置好数据源。

#### 第二步、下载安装 Nacos 

```sh
cd /usr/local/
wget https://github.com/alibaba/nacos/releases/download/2.3.0/nacos-server-2.3.0.tar.gz
tar -xvf nacos-server-2.3.0.tar.gz
```

#### 第三步、初始化数据库表

使用任意 `MySQL` 客户端工具连接到 `MySQL` 数据库服务器，创建名为`nacos`的数据库，之后使用 `MySQL` 客户端执
行 `nacos/conf/mysql-schema.sql` 文件，完成建表工作。  
![](http://oss.feny.ink/blogs/images/202312281325914.png)

#### 第四步、配置 Nacos 数据源

编辑服务器中`Nacos` 的核心配置文件 `/conf/application.properties`。

默认数据源配置都被`#`号注释，删除`#`号注释按下方示例配置数据源。
```sh
spring.sql.init.platform=mysql

### Count of DB:
db.num=1

### Connect URL of DB:
db.url.0=jdbc:mysql://127.0.0.1:3306/nacos?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
db.user.0=root
db.password.0=123456
```

> **注意：** `192.168.0.134`、`192.168.0.136`、`192.168.0.161` 都需要配置`application.properties`。
>
> 也可以编辑好一台服务器的相关配置后，下载到本地后再上传到其他两台服务器直接替换源文件。

**遇到的问题** 
`Nacos`启动时报以下错误错：

```sh
Caused by: com.mysql.cj.exceptions.UnableToConnectException: Public Key Retrieval is not allowed
        at sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)
        at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)
        at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)
        at java.lang.reflect.Constructor.newInstance(Constructor.java:423)
        at com.mysql.cj.exceptions.ExceptionFactory.createException(ExceptionFactory.java:61)
        at com.mysql.cj.exceptions.ExceptionFactory.createException(ExceptionFactory.java:85)
        at com.mysql.cj.protocol.a.authentication.CachingSha2PasswordPlugin.nextAuthenticationStep(CachingSha2PasswordPlugin.java:130)
        ... 142 common frames omitted
```
**解决办法：** 在 `db.url` 后面加上 `allowPublicKeyRetrieval=true` 即可。


#### 第五步、Nacos 集群节点配置

在 `/nacos/config` 目录下提供了集群示例文件`cluster.conf.example` 
首先利用复制命令创建 `cluster.conf` 文件。  

```sh
cp cluster.conf.example cluster.conf
```

之后打开 `cluster.conf`，添加所有 `Nacos` 集群节点 `IP `及端口，每台服务器上的`nacos`都要配置。
```sh
192.168.0.134:8848
192.168.0.138:8848
192.168.0.161:8848
```

> **注意：** `192.168.0.134`、`192.168.0.136`、`192.168.0.161` 都需要配置`cluster.conf`。

#### 第六步、启动 `Nacos` 服务器

在3台 `Nacos` 节点服务器上分别执行下面的启动命令：

```sh
sh /usr/local/nacos/bin/startup.sh
```
> **注意：** 集群模式下并不需要增加`-m`参数，默认就是以集群方式启动。

启动时可以通过 tail 命令观察启动过程。  

```sh
tail -f /usr/local/nacos/logs/start.out
```

当确保所有节点均启动成功，打开浏览器访问对应的`IP`地址`nacos`后台，便可看到集群列表
![](http://oss.feny.ink/blogs/images/202312281325509.png)
  分别打开<http://192.168.0.134:8848/nacos>、<http://192.168.0.136:8848/nacos>、<http://192.168.0.138:8848/nacos>，可以看到集群的节点

<img src="http://oss.feny.ink/blogs/images/202401011644078.png" alt="image-20240101164412019" style="zoom:50%;" /> 

#### 第七步、整合 Nginx

在已安装nginx的`192.168.0.143`服务器上，编辑`nginx.conf`

```sh
# ./nginx/conf/nginx.conf
vim nginx.conf
```

在`http`内输入以下内容

```sh
# Nacos 集群服务
upstream nacos {
    server 192.168.0.134:8848;
    server 192.168.0.136:8848;
    server 192.168.0.161:8848;
}

server {
    listen       80;
    server_name  192.168.0.143;
    location /nacos {
        proxy_pass http://nacos;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

在`hhtp`外配置

```sh
# nacos的grpc协议配置
stream {
	# 负载均衡配置（TCP长连接配置）,端口号在前面的端口号前要进行偏置1000
	upstream nacos-tcp {
		server 192.168.0.134:9848;
		server 192.168.0.136:9848;
		server 192.168.0.161:9848;
	}

	# 监听端口号在前面的端口号前要进行偏置1000
	#如：http内的server配置listen为8848，则这里为9848
	server {
		listen 1080;
		proxy_pass nacos-tcp;
	}
}
```

整个`nginx.conf`配置如下：

```sh
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;
	
	
	# Nacos 集群服务
	upstream nacos {
		server 192.168.0.134:8848;
		server 192.168.0.136:8848;
		server 192.168.0.161:8848;
	}
	 
	server {
		listen       80;
		server_name  192.168.0.143;
		location /nacos {
			proxy_pass http://nacos;
			proxy_set_header Host $host;
			proxy_set_header X-Real-IP $remote_addr;
		}
	}

    include /etc/nginx/conf.d/*.conf;
}

# nacos的grpc协议配置
stream {
	# 负载均衡配置（TCP长连接配置）,端口号在前面的端口号前要进行偏置1000
	upstream nacos-tcp {
		server 192.168.0.134:9848;
		server 192.168.0.136:9848;
		server 192.168.0.161:9848;
	}

	server {
		# 监听端口号在前面的端口号前要进行偏置1000
		listen 1080;
		proxy_pass nacos-tcp;
	}
}
```

退出保存，重启`nginx`，访问<http://192.168.0.143/nacos>

## 二、Docker 环境安装 Nacos

### 单机模式运行--挂载目录方式

#### 第一步、拉取镜像

```sh
docker pull nacos/nacos-server
```

#### 第二步、创建挂载目录

```sh
mkdir -p /data/docker/nacos/conf /data/docker/nacos/logs /data/docker/nacos/data
```

>-p 作用是在创建多级文件时，不存在某一级文件就会创建，存在就使用原文件

#### 第三步、复制容器的相关文件到挂载目录

启动`Nacos`

```sh
docker run --name nacos -d -p 8848:8848 -e MODE=standalone  nacos/nacos-server
```

复制容器的相关文件到挂载目录

```sh
docker cp nacos:/home/nacos/conf /data/docker/nacos
docker cp nacos:/home/nacos/logs /data/docker/nacos
docker cp nacos:/home/nacos/data /data/docker/nacos
```

停止`Nacos`容器

```sh
docker stop nacos
```

删除`Nacos`容器

```sh
docker rm nacos
```

#### 第四步、初始化数据库表

使用任意 `MySQL` 客户端工具连接到 `MySQL` 数据库服务器，创建名为`nacos`的数据库，之后使用 `MySQL` 客户端执
行 `nacos/conf/mysql-schema.sql` 文件，完成建表工作。
![](http://oss.feny.ink/blogs/images/202312281325914.png)

#### 第五步、配置 Nacos 数据源

找到`nacos`目录下配置文件 `application.properties`，文件路径如下：

```sh
./nacos/conf/application.properties
```

默认数据源配置都被`#`号注释，删除注释按下方示例配置数据源即可。

```sh
spring.sql.init.platform=mysql
db.num=1
db.url.0=jdbc:mysql://192.168.0.143:3306/nacos?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
db.user.0=root
db.password.0=123456
```

#### 第六步、单机模式启动 Nacos

```sh
docker run -itd \
-p 8848:8848 \
-p 9848:9848 \
-p 9849:9849 \
-p 7848:7848 \
-e MODE=standalone \
-e PREFER_HOST_MODE=ip \
-v /data/docker/nacos/conf/:/home/nacos/conf \
-v /data/docker/nacos/logs:/home/nacos/logs \
-v /data/docker/nacos/data:/home/nacos/data \
--name=nacos \
--restart=always \
nacos/nacos-server
```

查看启动日志：

```sh
docker logs -f nacos
```

显示如下内容，表示启动成功：

<img src="http://oss.feny.ink/blogs/images/202401012222414.png" alt="image-20240101222210347" style="zoom:50%;" /> 



### 单机模式运行--docker -e 配置参数

#### 第一步、拉取镜像

```sh
docker pull nacos/nacos-server
```

#### 第二步、启动 Nacos

不连接`MySQL`

```sh
docker run -itd \
-p 8848:8848 \
-p 9848:9848 \
-p 9849:9849 \
-p 7848:7848 \
-e MODE=standalone \
-e PREFER_HOST_MODE=ip \
-e NACOS_AUTH_ENABLE=true \
-e NACOS_AUTH_TOKEN=cjViZWc2MmRndmdwMjNiNGoyNDZnNGN1bTQ0bWpzMXo= \
-e NACOS_AUTH_IDENTITY_KEY=serverIdentity \
-e NACOS_AUTH_IDENTITY_VALUE=security \
--name=nacos \
--restart=always \
nacos/nacos-server
```

连接MySQL数据库

```sh
docker run -itd \
-p 8848:8848 \
-p 9848:9848 \
-p 9849:9849 \
-p 7848:7848 \
-e MODE=standalone \
-e PREFER_HOST_MODE=ip \
-e SPRING_DATASOURCE_PLATFORM=mysql \
-e MYSQL_SERVICE_HOST=192.168.0.143 \
-e MYSQL_SERVICE_PORT=3306 \
-e MYSQL_SERVICE_DB_NAME=nacos \
-e MYSQL_SERVICE_USER=nacos \
-e MYSQL_SERVICE_PASSWORD=nacos \
-e NACOS_AUTH_ENABLE=true \
-e NACOS_AUTH_TOKEN=cjViZWc2MmRndmdwMjNiNGoyNDZnNGN1bTQ0bWpzMXo= \
-e NACOS_AUTH_IDENTITY_KEY=serverIdentity \
-e NACOS_AUTH_IDENTITY_VALUE=security \
--name=nacos \
--restart=always \
nacos/nacos-server
```

`-e`参数各名词解析[请看这里](#公共属性配置)

查看启动日志：

```sh
docker logs -f nacos
```

如果启动时添加了`MySQL`连接，如果还没有在`mysql`中创建`nacos`数据库和初始化相关表，此时启动会报错。

复制`nacos`容器中的`mysql-schema.sql`出来，导入`nacos`数据库中

```sh
docker cp nacos:/home/nacos/conf/mysql-schema.sql /目录
```

数据库初始化表后，重新运行`nacos`

```sh
docker restart nacos
```

### Nacos集群模式运行

#### 第一步、拉取镜像

```sh
docker pull nacos/nacos-server
```

#### 第二步、创建挂载目录

```sh
mkdir -p /data/docker/nacos_1/conf /data/docker/nacos_1/logs /data/docker/nacos_1/data
mkdir -p /data/docker/nacos_2/conf /data/docker/nacos_2/logs /data/docker/nacos_2/data
mkdir -p /data/docker/nacos_3/conf /data/docker/nacos_3/logs /data/docker/nacos_3/data
```

>-p 作用是在创建多级文件时，不存在某一级文件就会创建，存在就使用原文件

#### 第三步、复制容器的相关文件到挂载目录

启动`Nacos`

```sh
docker run --name nacos -d -p 8848:8848 -e MODE=standalone  nacos/nacos-server
```

复制容器的相关文件到挂载目录

```sh
docker cp nacos:/home/nacos/conf /data/docker/nacos_1
docker cp nacos:/home/nacos/logs /data/docker/nacos_1
docker cp nacos:/home/nacos/data /data/docker/nacos_1
```

将`/data/docker/nacos_1`中的目录分别复制到`/data/docker/nacos_2`和`/data/docker/nacos_3`中

```sh
cp -rv /data/docker/nacos_1/* /data/docker/nacos_2/
cp -rv /data/docker/nacos_1/* /data/docker/nacos_3/
```

停止`Nacos`容器

```sh
docker stop nacos
```

删除`Nacos`容器

```sh
docker rm nacos
```

#### 第四步、初始化数据库表

使用任意 `MySQL` 客户端工具连接到 `MySQL` 数据库服务器，创建名为`nacos`的数据库，之后使用 `MySQL` 客户端执
行 `nacos/conf/mysql-schema.sql` 文件，完成建表工作。
![](http://oss.feny.ink/blogs/images/202312281325914.png)

#### 第五步、配置 Nacos 数据源

修改配置文件 `application.properties`

默认数据源配置都被`#`号注释，删除注释按下方示例配置数据源即可。

```sh
spring.sql.init.platform=mysql
db.num=1
db.url.0=jdbc:mysql://192.168.0.143:3306/nacos?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
db.user.0=root
db.password.0=123456
```

#### 第六步、集群模式运行

启动`nacos_1`

```sh
docker run -itd \
-p 18848:8848 \
-p 19848:9848 \
-p 19849:9849 \
-p 17848:7848 \
-e PREFER_HOST_MODE=ip \
-e NACOS_SERVERS="192.168.0.143:28848 192.168.0.143:38848" \
-v /data/docker/nacos_1/conf/:/home/nacos/conf \
-v /data/docker/nacos_1/logs:/home/nacos/logs \
-v /data/docker/nacos_1/data:/home/nacos/data \
--name=nacos_1 \
--restart=always \
nacos/nacos-server
```

> **注意：**-e NACOS_SERVERS=192.168.0.143:27848 192.168.0.143:37848，这是另外两个Nacos服务的IP:端口，不包括自己

查看启动日志

```sh
docker logs -f nacos_1
```

启动`nacos_2

```sh
docker run -itd \
-p 28848:8848 \
-p 29848:9848 \
-p 29849:9849 \
-p 27848:7848 \
-e PREFER_HOST_MODE=ip \
-e NACOS_SERVERS="192.168.0.143:18848 192.168.0.143:38848" \
-v /data/docker/nacos_2/conf/:/home/nacos/conf \
-v /data/docker/nacos_2/logs:/home/nacos/logs \
-v /data/docker/nacos_2/data:/home/nacos/data \
--name=nacos_2 \
--restart=always \
nacos/nacos-server
```

查看启动日志

```sh
docker logs -f nacos_2
```

启动`nacos_`3

```sh
docker run -itd \
-p 38848:8848 \
-p 39848:9848 \
-p 39849:9849 \
-p 37848:7848 \
-e PREFER_HOST_MODE=ip \
-e NACOS_SERVERS="192.168.0.143:18848 192.168.0.143:28848" \
-v /data/docker/nacos_3/conf/:/home/nacos/conf \
-v /data/docker/nacos_3/logs:/home/nacos/logs \
-v /data/docker/nacos_3/data:/home/nacos/data \
--name=nacos_3 \
--restart=always \
nacos/nacos-server
```

查看启动日志

```sh
docker logs -f nacos_3
```

3个`Nacos`服务都启动成功后

<img src="http://oss.feny.ink/blogs/images/202401021346170.png" alt="image-20240102134649124" style="zoom:50%;" /> 

<http://192.168.0.143:18848/nacos>

<img src="http://oss.feny.ink/blogs/images/202401021346817.png" alt="image-20240102134609737" style="zoom:50%;" /> 

<http://192.168.0.143:28848/nacos>

<img src="http://oss.feny.ink/blogs/images/202401021346118.png" alt="image-20240102134633054" style="zoom:50%;" /> 

<http://192.168.0.143:38848/nacos>

<img src="http://oss.feny.ink/blogs/images/202401021348478.png" alt="image-20240102134819416" style="zoom:50%;" /> 

#### 第七步：Nginx代理Nacos集群地址

`Docker`安装`Nginx`，具体步骤[请看这里]()

整个`nginx.conf`的配置如下：

```sh
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;
	
	
	# Nacos 集群服务
	upstream nacos {
		server 192.168.0.143:18848;
		server 192.168.0.143:28848;
		server 192.168.0.143:38848;
	}
	 
	server {
		listen       80;
		# 有域名可以替换为域名，如
		# server_name  nacos.feny.ink;
		server_name  192.168.0.143;
		location /nacos {
			proxy_pass http://nacos;
			proxy_set_header Host $host;
			proxy_set_header X-Real-IP $remote_addr;
		}
	}

    include /etc/nginx/conf.d/*.conf;
}


# nacos的grpc协议配置
stream {
	# 负载均衡配置（TCP长连接配置）,端口号在前面的端口号前要进行偏置1000
	upstream nacos-grpc {
		server 192.168.0.143:19848;
		server 192.168.0.143:29848;
		server 192.168.0.143:39848;
	}

	# 监听端口号在前面的端口号前要进行偏置1000
	server {
		listen 1080;
		proxy_pass nacos-grpc;
	}
}
```

重启`Nginx`

```sh
docker restart nginx
```

浏览器打开<http://192.168.143:8848/nacos>

<img src="http://oss.feny.ink/blogs/images/202401021400377.png" alt="image-20240102140010295" style="zoom:50%;" /> 

Nginx代理Nacos集群地址完成！！！

#### 遇到的问题

##### 问题一：Docker 安装Nginx时没有`-p`映射对应的端口，进行代理时请求`无法访问`

如：

```sh
server {
    listen       8080;
    server_name  192.168.0.143;
    location /nacos {
        proxy_pass http://nacos;
    }
}
```

浏览器请求<http://192.168.0.143:8080>

<img src="http://oss.feny.ink/blogs/images/202401021417704.png" alt="image-20240102141704632" style="zoom:50%;" /> 

**解决办法：**

动态修改Docker运行中的端口映射

查询容器`ip`

```sh
docker inspect --format '{{ .NetworkSettings.IPAddress }}' nginx
```

`Iptables`端口映射

```sh
iptables -t nat -A DOCKER -p tcp --dport 8080 -j DNAT --to-destination 172.17.0.5:8080
```

再次请求<http://192.168.0.143:8080>，就可以了！！！

<img src="http://oss.feny.ink/blogs/images/202401021419127.png" alt="image-20240102141944068" style="zoom:50%;" /> 

##### 问题二：SpringBoot注册服务到Nacos启动报错

错误信息：

```
Caused by: com.alibaba.nacos.api.exception.NacosException: Client not connected, current status:STARTING
```

这是因为新版`Nacos`新增了`9848`端口，用于客户端向服务端发起连接和请求。

**解决办法：**

在`Nginx`增加如下配置

```sh
# nacos的grpc协议配置
stream {
	# 负载均衡配置（TCP长连接配置）,端口号在前面的端口号前要进行偏置1000
	upstream nacos-grpc {
		server 192.168.0.143:19848;
		server 192.168.0.143:29848;
		server 192.168.0.143:39848;
	}

	# 监听端口号在前面的端口号前要进行偏置1000
	server {
		listen 1080;
		proxy_pass nacos-grpc;
	}
}
```

### 公共属性配置

| 属性名称 | 描述 |      |
| -------- | :--: | ---- |
| MODE										|系统启动方式：集群/单机|cluster/standalone默认 **cluster**|
| NACOS_SERVERS								|集群地址|ip1:port1空格ip2:port2 空格ip3:port3|
| PREFER_HOST_MODE							|支持IP还是域名模式|hostname/ip 默认 **ip**|
| NACOS_SERVER_PORT							|Nacos运行端口|默认 **8848**|
| NACOS_SERVER_IP							|多网卡模式下可以指定IP||
| SPRING_DATASOURCE_PLATFORM				|单机模式下支持MYSQL数据库|mysql/空 默认:空|
| MYSQL _SERVICE_HOST					|数据库连接地址||
| MYSQL_SERVICE_PORT				|数据库端口|默认 : **3306**|
| MYSQL_SERVICE_DB_NAME						|数据库库名||
| MYSQL_SERVICE_USER				|数据库用户名||
| MYSQL_SERVICE_PASSWORD					|数据库用户密码||
| MYSQL_SERVICE DB_PARAM				|数据库连接参数|默认：**characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false**|
| MYSOL DATABASE_NUM			|数据库编号|默认 :**1**|
| JVM_XMS									|-Xms|默认 :1g|
| JVM XMX									|-Xmx|默认 :1g|
| JVM_XMN									|-Xmn|默认 :512m|
| JVM_MS									|-XX:MetaspaceSize|默认 :128m|
| JVM_MMS								|-XX:MaxMetaspaceSize|默认 :320m|
| NACOS_DEBUG							|是否开启远程DEBUG|y/n 默认 :n|
| TOMCAT_ACCESSLOG_ENABLED			|server.tomcat.accesslog.enabled|默认 :false|
| NACOS_AUTH SYSTEM_TYPE			|权限系统类型选择，目前只支持nacos类型|默认 :nacos|
| NACOS_AUTH_ENABLE					|是否开启权限系统|默认 :false|
| NACOS_AUTH TOKEN_EXPIRE_SECONDS	|token失效时间|默认 :18000|
| NACOS_AUTH_TOKEN							|token|默认：空|
| NACOS_AUTH CACHE_ENABLE			|权限缓存开关开启后权限缓存的更新默认有15秒的延迟|默认 : false|
| MEMBER_LIST								|通过环境变量的方式设置集群地址|例子:192.168.16.101:8847?raft_port=8807,192.168.16.101?raft_port=8808,192.168.16.101:8849?raft_port=8809|
| EMBEDDED_STORAGE						|是否开启集群嵌入式存储模式|`embedded` 默认 : none|
| NACOS_AUTH_CACHE_ENABLE		|nacos.core.auth.caching.enabled|默认 : false|
| NACOS_AUTH_USER_AGENT_AUTH_WHITE ENABLE	|nacos.core.auth.enable.userAgentAuthWhite|默认 : false|
| NACOS_AUTH_IDENTITY_KEY					|nacos.core.auth.server.identity.key||
| NACOS_AUTH_IDENTITY_VALUE				|nacos.core.auth.server.identity.value||
| NACOS_SECURITY_IGNORE_URLS	|nacos.security.ignore.urls|默认：/,/error,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/v1/auth/**,/v1/console/health/**,/actuator/**,/v1/console/server/**|



## 三、Nacos 开启身份认证

`Nacos`自`2.2.2`版本开始，在未开启鉴权时，默认控制台将不需要登录即可访问，同时在控制台中给予提示，提醒用户当前集群未开启鉴权。  在用户开启鉴权后，控制台才需要进行登录访问。  

修改`application.properties`中的配置信息为：  

```sh
# 在2.2.0.1版本后默认为false
nacos.core.auth.enabled=true

# 在2.2.0.1版本后默认为空，随自己喜欢自定义
nacos.core.auth.server.identity.key=serverIdentity

# 在2.2.0.1版本后默认为空，随自己喜欢自定义
nacos.core.auth.server.identity.value=security

# 自定义密钥时，推荐将配置项设置为Base64编码的字符串，且原始密钥长度不得低于32字符
nacos.core.auth.plugin.nacos.token.secret.key=cjViZWc2MmRndmdwMjNiNGoyNDZnNGN1bTQ0bWpzMXo=
```

为方便省事，使用`Hutool`工具生成 `nacos.core.auth.plugin.nacos.token.secret.key` 的自定义密钥：  

```java
import cn.hutool.core.codec.Base64;
import cn.hutool.core.util.RandomUtil;

// 生成Nacos密码
System.out.println(Base64.encode(RandomUtil.randomString(32)));
```



## 四、服务注册到 Nacos

### （1）、新建项目

在 IntelliJ IDEA 新建项目  
![](http://oss.feny.ink/blogs/images/202312281326203.png)  

选择Spring Initializr-->选Custom，填写阿里 <http://start.aliyun.com>，点击Next进行下一步  
![](http://oss.feny.ink/blogs/images/202312281326235.png)  

依赖选择如下：    
![](http://oss.feny.ink/blogs/images/202312281326925.png)  
选择完成后点击 Next，项目名，存放路径按自己喜好设置好，点击Finish完成  

### （2）、服务注册到 Nacos
打开 application.yml 文件，配置 Nacos 服务地址  

```yml
server:
    port: 10080
spring:
    application:
        name: cloud-alibaba-study
    cloud:
        nacos:
            discovery:
                # 命名空间，一般多环境时使用，如：dev、test、prod
                namespace: public
                group: DEFAULT_GROUP
                # Nacos服务器IP地址:端口
                server-addr: 192.168.0.143:80
                # 用户名，如果Nacos未开启身份认证，请注释掉
                username: nacos
                # 默认密码为 nacos
                password: nacos

```
### （3）、启动服务
服务启动成功后，在Nacos控制台--服务管理--服务列表中看到有服务，表示服务注册成功  

![](http://oss.feny.ink/blogs/images/202312281326377.png)  

## 五、配置管理

