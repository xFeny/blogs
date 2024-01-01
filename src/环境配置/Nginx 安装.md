---

author: Feny
date: 2023-12-28
icon: nginx
category:
  - 环境配置
  - Nginx
tag:
  - Nginx
  - 环境配置
---

# Nginx 安装

## Windows 下安装

### 一、下载安装

官网下载地址：<https://nginx.org/en/download.html>

选择最新的Stable version（稳定版本）下载到本地

<img src="http://oss.feny.ink/blogs/images/202312281742294.png" alt="image-20231228174212239" style="zoom:50%;" /> 

下载完成后，解压放入本地非中文的文件夹中

### 二、启动 nginx

在此之前打开**conf**文件夹下的**nginx.conf**查看端口占用情况

默认是80端口，改成自己要部署网站使用的端口。改好以后再使用命令启动。

进入解压后的nginx，启动cmd，输入 start nginx 启动服务

```sh
start nginx
```

<img src="http://oss.feny.ink/blogs/images/202312281745994.png" alt="image-20231228174525951" style="zoom:50%;" /> 

<img src="http://oss.feny.ink/blogs/images/202312281745583.png" alt="image-20231228174542552" style="zoom:50%;" /> 

::: tip 相关启动命令

注意不要直接双击nginx.exe，这样会导致修改配置后重启、停止nginx无效，需要手动关闭任务管理器内的所有nginx进程

在nginx.exe目录，打开命令行工具，用命令 启动/关闭/重启nginx 

start nginx	启动nginx

nginx -s reload	修改配置后重新加载生效

nginx -s reopen	重新打开日志文件

nginx -t -c /path/to/nginx.conf	测试nginx配置文件是否正确

nginx -s stop	快速停止nginx

nginx -s quit	完整有序的停止nginx

:::

### 三、验证是否成功

浏览器输入在浏览器输入：**http://localhost:端口** ， 默认80端口直接<http://localhost>，能看到界面说明启动成功。

<img src="http://oss.feny.ink/blogs/images/202312281755015.png" alt="image-20231228175540971" style="zoom:50%;" /> 

## CentOS 下安装



### 一、准备工作

首先需要安装gcc，安装G++编译器，安装PCRE库，安装zlib库，安装openssl

```sh
#查看是否存在
gcc -v
yum install -y gcc 		
yum install -y pcre pcre-devel
yum install -y zlib zlib-devel
yum install -y openssl openssl-devel
```

### 二、安装 nginx

#### 1、下载nginx解压安装包

```sh
wget http://nginx.org/download/nginx-1.24.0.tar.gz
tar -zxvf nginx-1.24.0.tar.gz
```

#### 2、编译安装Nginx

进入nginx-1.24.0目录下，按顺序执行

```sh
cd nginx-1.24.0
./configure
make
make install
```

### 三、启动服务

切换目录到/usr/local/nginx/sbin下面，启动nginx服务

```sh
cd /usr/local/nginx/sbin
./nginx
```

也可直接

```sh
/usr/local/nginx/sbin/nginx
```

查看nginx服务是否启动成功

```sh
ps -ef | grep nginx
```

停止服务

```sh
/usr/local/nginx/sbin/nginx -s stop
```

重启服务

```sh
/usr/local/nginx/sbin/nginx -s reload
```



### 四、开放端口

开启80端口，以便外部访问

```sh
firewall-cmd --zone=public --add-port=80/tcp --permanent
```

重启防火墙

```bash
firewall-cmd --reload
```

### 五、验证是否成功

浏览器输入服务器IP地址，如下图所示即表示成功。

<img src="http://oss.feny.ink/blogs/images/202312281705155.png" alt="image-20231228170558106" style="zoom:50%;" /> 

### 六、设置开机启动

编辑 /etc/systemd/system/nginx.service 文件

```sh
vim /etc/systemd/system/nginx.service
```

添加内容如下：

```sh
[Unit]
#描述服务
Description=nginx
#描述服务类别
After=network.target
 
#服务运行参数的设置，注意【Service】的启动、重启、停止命令都要用绝对路径
[Service]
#后台运行的形式
Type=forking
#服务具体运行的命令
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
#重启命令
ExecReload=/usr/local/nginx/sbin/nginx -s reload
#停止命令
ExecStop=/usr/local/nginx/sbin/nginx -s quit
#表示给服务分配独立的临时空间
PrivateTmp=true
 
#运行级别下服务安装的相关设置，可设置为多用户，即系统运行级别为3
[Install]
WantedBy=multi-user.target
```

>ExecStart 配置成自己的路径

重新加载系统服务
```sh
systemctl daemon-reload
```

开机自动启动
```sh
systemctl enable nginx
```

启动服务
```sh
systemctl start nginx
```

所有命令
```sh
# 启动nginx服务
systemctl start nginx
# 停止nginx服务
systemctl stop nginx
# 设置开机自启动
systemctl enable nginx
# 停止开机自启动
systemctl disable nginx  	#（）
# 查看服务当前状态
systemctl status nginx
# 重新启动服务
systemctl restart nginx
# 查看所有已启动的服务
systemctl list-units --type=service
```

### 七、其他

如果是阿里云服务器，可能还需要在服务器控制台安全组添加相应的端口才行

<img src="http://oss.feny.ink/blogs/images/202312282140114.png" style="zoom: 50%;" /> 

## Docker 下安装

### 拉取镜像

```sh
docker pull nginx
```

### 创建挂载目录

```sh
mkdir -p /data/nginx/conf /data/nginx/conf/conf.d /data/nginx/logs /data/nginx/html
```

### 复制 nginx 配置文件

启动 `nginx`

```sh
docker run --name=nginx -p 80:80 -d nginx
```

将容器中的`nginx.conf`文件和`conf.d`文件夹复制到宿主机

```sh
# 将容器nginx.conf文件复制到宿主机
docker cp nginx:/etc/nginx/nginx.conf /data/nginx/conf
# 将容器conf.d文件夹下内容复制到宿主机
docker cp nginx:/etc/nginx/conf.d /data/nginx/conf
# 将容器中的html文件夹复制到宿主机
docker cp nginx:/usr/share/nginx/html /data/nginx
```

停止 `nginx`

```sh
docker stop nginx
```

删除 `nginx`

```sh
docker rm nginx
```

### 启动容器并作目录挂载

```sh
docker run -idt --name=nginx -p 80:80 -p 443:443 --restart=always --privileged=true \
-v /data/nginx/html:/usr/share/nginx/html \
-v /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /data/nginx/conf/conf.d/:/etc/nginx/conf.d/ \
-v /data/nginx/logs:/var/log/nginx \
nginx
```

**命令含义**

```sh
docker run  在docker中启动一个容器实例
		-itd
            i：以交互模式运行容器，通常与 -t 同时使用；
            t：为容器重新分配一个伪输入终端，通常与 -i 同时使用；
            d：表示后台启动
		-p 80:80  容器与主机映射端口为，主机80，容器80
		--name nginx  容器运行后的名称
		--restart=always  自动启动容器
		-v /data/nginx/html:/usr/share/nginx/html  挂载nginx静态文件
		-v /data/nginx/conf/nginx.conf  挂载nginx.conf配置文件
		-v /data/nginx/conf/conf.d/  挂载nginx配置文件
		-v /data/nginx/logs:/var/log/nginx  挂载nginx日志文件
		nginx	运行的版本
```

部署完成！！！
