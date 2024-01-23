---
author: Feny
date: 2023-12-28
icon: Redis
order: 5
category:
  - Redis
  - 环境配置
tag:
  - Redis
  - 环境配置
---

# Redis 安装



## Windows 下安装

### 一、下载安装

Redis 下载地址：<https://github.com/MicrosoftArchive/redis/releases>

Redis可视化工具：<https://gitee.com/qishibo/AnotherRedisDesktopManager/releases>

将下载的压缩包解压到一个文件夹中

![img](http://oss.feny.ink/blogs/images/202312281802988.png) 

### 二、启动临时服务

<img src="http://oss.feny.ink/blogs/images/202312281803809.png" alt="img" style="zoom: 80%;" />  

```sh
redis-server.exe redis.windows.conf
```

> **备注：** 通过这个命令，会创建Redis临时服务，不会在window Service列表出现Redis服务名称和状态，此窗口关闭，服务会自动关闭。

<img src="http://oss.feny.ink/blogs/images/202312281806314.png" alt="img" style="zoom: 80%;" /> 

打开另一个cmd窗口，客户端调用：redis-cli.exe -h 127.0.0.1 -p 6379

<img src="http://oss.feny.ink/blogs/images/202312281807495.png" alt="img" style="zoom: 80%;" /> 



### 三、添加到Windows服务

进入Redis安装包目录，安装服务

```sh
redis-server --service-install redis.windows.conf
```

<img src="http://oss.feny.ink/blogs/images/202312281808908.png" alt="img" style="zoom:80%;" />  

win+r -> services.msc可以看到服务安装成功

<img src="http://oss.feny.ink/blogs/images/202312281809830.png" alt="img" style="zoom:80%;" />   

::: tip 相关启动命令

安装服务：redis-server --service-install redis.windows.conf

开启服务：redis-server --service-start

停止服务：redis-server --service-stop

卸载服务：redis-server --service-uninstall

:::



## CentOS 下安装

### 一、安装依赖

因为 Redis 是用C语言开发的，所以在安装之前需要确定是否安装gcc环境  
```sh
gcc -v
```

如果没有安装可以执行以下命令进行安装：  
```sh
yum install -y gcc
```

### 二、下载安装

Redis 版本：<http://download.redis.io/releases>  

下载并解压  
```sh
wget http://download.redis.io/releases/redis-6.2.6.tar.gz
tar -zxvf redis-6.2.6.tar.gz
```

切换到redis解压目录下，执行编译  
```sh
cd redis-6.2.6
make
```

指定安装目录  
```sh
make install PREFIX=/usr/local/redis
```

### 三、启动 Redis  

#### 1、后台方式启动  

<!-- 进入到解压的 redis-6.2.6 文件夹中复制 redis.conf 到 redis 的安装目录   
```sh
cp ~/redis-6.2.6/redis.conf /usr/local/redis/bin
``` -->

进入/usr/local/redis/bin修改 redis.conf 文件，把 daemonize no 改为 daemonize yes  
```sh
vim /usr/local/redis/bin/redis.conf

#搜索daemonize
/daemonize
```

```sh
# /usr/local/redis/bin/redis.conf
# daemonize no
daemonize yes
```

在 /usr/local/redis/bin 路径下后台启动命令  
```sh
./redis-server redis.conf
```

查看 是否启动成功  
```sh
ps -ef |grep redis
```

#### 2、开机启动  

编辑 /etc/systemd/system/redis.service 文件  
```sh
vim /etc/systemd/system/redis.service
```

复制粘贴以下内容：  
```sh
[Unit]
Description=redis-server
After=network.target
 
[Service]
Type=forking
ExecStart=/usr/local/redis/bin/redis-server /usr/local/redis/bin/redis.conf
PrivateTmp=true
 
[Install]
WantedBy=multi-user.target
```

> ExecStart配置成自己的路径    

重新加载系统服务  
```sh
systemctl daemon-reload
```

开机自动启动  
```sh
systemctl enable redis
```

启动redis服务  
```sh
systemctl start redis
```

创建 Redis 命令软链接
```sh
ln -s /usr/local/redis/bin/redis-cli /usr/bin/redis
```

测试 redis  
```sh
[root@localhost ~]# redis
127.0.0.1:6379>
```


#### 3、修改redis密码  

编辑 /usr/local/redis/bin/redis.conf 文件
```sh
vim /usr/local/redis/bin/redis.conf
```

```sh
# /usr/local/redis/bin/redis.conf
# requirepass foobared
# 去掉前面的注释，将foobared 改为自己的密码
 requirepass 123456
```

重启 Redis  
```sh
systemctl restart redis
```

验证 Redis 密码修改是否成功  
```sh
# 输入未输入密码
[root@localhost ~]# redis 
127.0.0.1:6379> keys '*'
(error) NOAUTH Authentication required.

# 输入正确密码
[root@localhost ~]# redis 
127.0.0.1:6379> auth 123456
OK
127.0.0.1:6379> keys '*'
1) "test"

# 输入错误密码
[root@localhost ~]# redis 
127.0.0.1:6379> auth 11
(error) WRONGPASS invalid username-password pair or user is disabled.
```

#### 4、设置端口
找到port，修改为想要的端口号  
```sh
vim /usr/local/redis/bin/redis.conf
```
```sh
# /usr/local/redis/bin/redis.conf
# 改为自己的想要的端口
port 6379
```

#### 5、允许远程访问  

```sh
vim /usr/local/redis/bin/redis.conf
```

找到 bind 127.0.0.1 -::1，修改为
```sh
# /usr/local/redis/bin/redis.conf
# bind 127.0.0.1 -::1
bind 0.0.0.0
```

重启 Redis  
```sh
systemctl restart redis
```

开放 Redis 端口  
```sh
firewall-cmd --zone=public --add-port=6379/tcp --permanent
```

重启防火墙  
```sh
firewall-cmd --reload
```

测试客户端连接成功  
![](http://oss.feny.ink/blogs/images/202312281328437.png)

#### 6、服务操作命令 

```sh
#启动redis服务
systemctl start redis
#停止redis服务
systemctl stop redis
#重新启动服务
systemctl restart redis
#查看服务当前状态
systemctl status redis
#设置开机自启动
systemctl enable redis
#停止开机自启动
systemctl disable redis
```

### 四、其他

如果是阿里云服务器，可能还需要在服务器控制台安全组添加相应的端口才行

<img src="http://oss.feny.ink/blogs/images/202312282141996.png" style="zoom: 50%;" /> 



<!-- ## 四、Redis 集群部署 -->



## Docker 下安装

### 1、拉取 redis 镜像

```sh
docker pull redis
```

### 2、创建需要挂载的文件夹

```sh
mkdir -p /data/docker/redis/conf /data/docker/redis/data
```

### 3、配置 redis.conf

进入`/data/docker/redis/conf`下载配置文件`redis.conf`

```sh
cd /data/docker/redis/conf
wget http://download.redis.io/redis-stable/redis.conf
```

下载好`redis.conf`，编辑文件

```sh
vim redis.conf
```

修改以下配置：

```sh
# 使redis可以远程访问
# 找到 bind 127.0.0.1 -::1 修改为下面的内容
bind 0.0.0.0
# 去除requirepass 前面的 # ，设置密码
requirepass qwe123456
# redis持久化，默认是no
appendonly yes
```

### 4、创建容器

```sh
docker run -itd --restart=always --name redis --privileged=true -p 6379:6379 \
-v /data/docker/redis/conf/redis.conf:/etc/redis/redis.conf \
-v /data/docker/redis/data:/data \
redis \
redis-server /etc/redis/redis.conf
```

参数解析

```sh
--restart=always 开机启动，失败也会一直重启；
-p 6379:6379 将宿主机6379端口与容器内6379端口进行映射；
-v 将宿主机目录或文件与容器内目录或文件进行挂载映射；
-itd
 	i：以交互模式运行容器，通常与 -t 同时使用；
 	t：为容器重新分配一个伪输入终端，通常与 -i 同时使用；
 	d：表示后台启动redis；
--name 给容器命名；
redis-server /etc/redis/redis.conf 以配置文件启动redis，加载容器内的conf文件；
```

查看启动状态

```sh
docker ps -a | grep redis
```

查看容器日志

```sh
docker logs -f  redis
```

<img src="http://oss.feny.ink/blogs/images/202312311800306.png" alt="image-20231231180053245" style="zoom:80%;" /> 

启动成功完成安装！！！