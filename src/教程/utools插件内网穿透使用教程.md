---
# 是否收藏在博客主题的文章列表中。
# 当填入数字时，数字越大，排名越靠前，类型: boolean | number，默认值: false
# start: true

# 作者
author: Feny
# 写作时间
date: 2024-07-15
# 当前页面图标的 FontClass 或文件路径
# icon: string
# 分类
category:
  - 教程

# 标签
tag:
  - 内网穿透
---

# utools插件内网穿透使用教程

原文教程：https://www.yuque.com/xinu/notes/mzagfszkmy1gecaf?singleDoc

## 准备工作

#### 准备服务器域名

1. 一台公网服务器，有公网ip，能通过ssh登录
2. 准备一个已备案的域名

#### 设置服务器、安全组

1. 直连模式下开放6080、6443、8088三个端口
2. nginx部署模式下 开放 80、443、8088三个端口
3. 如果代理tcp、udp服务，则额外开放tcp、udp用到的端口
4. 还要开启ssh用到的22端口

#### 解析域名

推荐用三级域名做内网穿透映射使用。 这里使用ipx前缀，最终的解析路径如下图

<img src="http://oss.feny.ink/blogs/images/202407151220181.png" alt="image-20240715122014007" style="zoom: 80%;" /> 

#### 验证解析结果

<img src="http://oss.feny.ink/blogs/images/202407151222855.png" alt="image-20240715122257820" style="zoom:67%;" /> 

域名 *.ipx.feny.ink 解析到了  47.107.39.165

#### 下载服务端

下载地址: https://github.com/imxiny/easyipx

根据自身需求，选择下载v4还是v3

#### 准备配置文件

下载对应版本的`conf.json`文件

配置文件内容解释如下，使用的时候请删除注释。下面四种部署方式全部使用此配置文件

```json
{
  "addr": "0.0.0.0", // 无需修改
  "port": 18088, // 通道使用的端口，按需修改
  "token": "dev_test", // 签名使用的token 不要泄露出去
  "tunnel": {
    "tls": true, // 是否开启通道加密。如果设置为true 则下面的两个文件必须配置
    "pem_file": "cert.pem", // 与程序本体的相对路径或绝对路径皆可
    "key_file": "key.pem" // 与程序本体的相对路径或绝对路径皆可
  },
  "http": { // http服务的配置
    "http_port": 16080, // http端口，按需修改
    "https_port": 6443, // https端口，按需修改
    // 请注意，如果是nginx转发的，这里的证书不需要配置，证书配置在nginx上
    "pem_file": "", // https需要的证书, 如果未配置，则https端口不会开通
    "key_file": "", // https需要的证书，如果未配置，则https端口不会开通
    "heartbeat": 0 // 无需修改
  },
  "tcp": {
    "buffer_cache": 32768, // 无需修改
    "port_range": "8900-8950" // 按需修改 按上面开放的端口，所以我们这里设置为 8900-8950
    // 这里的端口范围只是为了方便客户端设置端口，不会全部占用，用到哪个开哪个
  },
  "udp": {
    "keep_time": 7200, // 无需修改
    "health_check": 60, // 无需修改
    "buffer_cache": 32768, // 无需修改
    "port_range": "8951-9000" // 按需修改 按上面开放的端口，所以我们这里设置为 8951-9000
    // 这里的端口范围只是为了方便客户端设置端口，不会全部占用，用到哪个开哪个
  }
}
```

### 准本工作总结

至此，前期准备工作全部完成，我们有了四个文件，分别是 

1. easyipx-linux-amd64-4.0.2  服务端程序本体
2. conf.json   服务端版本对应的配置文件
3. key.pem，cert.pem 自签证书。



有了一台端口放开的服务器 47.107.39.165

一个已经解析好的泛域名 *.ipx.feny.ink

### 开启通道加密【可选】

`conf.json`配置通道加密

```bash
{
  "tunnel": {
    "tls": true, // 是否开启通道加密。如果设置为true 则下面的两个文件必须配置
    "pem_file": "/data/easyipx/cert.pem", // 与程序本体的相对路径或绝对路径皆可
    "key_file": "/data/easyipx/key.pem" // 与程序本体的相对路径或绝对路径皆可
  }
}
```

在设置中心生成证书

<img src="http://oss.feny.ink/blogs/images/202407151340400.png" alt="image-20240715134053352" style="zoom:80%;" />

### 直连模式部署

```bash
# 创建目录 /data/easyipx
mkdir /data/easyipx
# 将服务端软件、配置文件上传至目录 /data/easyipx
```

上传`easyipx-linux-amd64-4.0.2`、`config.json`，并修改`easyipx-linux-amd64-4.0.2`	名称为`easyipx`

如果开启了通道加密要把证书文件`key.pem`、`cert.pem`一并上传

![image-20240715122741152](http://oss.feny.ink/blogs/images/202407151347414.png) 

添加执行权限

```bash
# 配置文件已准备好
# 为程序添加执行权限
cd /data/easyipx
chmod +x easyipx

# 启动程序 🚀🚀🚀🚀
# -c 指定配置文件路径，不写的话默认值为当前目录下的conf.json
./easyipx -c conf.json
```

启动成功后 如下图所示

<img src="http://oss.feny.ink/blogs/images/202407151229373.png" alt="image-20240715122917337" style="zoom:80%;" /> 

上述启动方式适用于调试阶段，如果成功启动以后，可以使用以下命令，将程序后台运行

```bash
nohup ./easyipx -c conf.json > runtime.log 2>error.log &

# 如果不想看运行日志，可以使用如下操作
nohup ./easyipx -c conf.json > /dev/null 2>&1 &
```
### 封装成系统服务

1. 创建文件

   ```bash
   # 创建文件
   touch /usr/lib/systemd/system/easyipx.service
   ```

2. 修改文件

   ```bash
   vim /usr/lib/systemd/system/easyipx.service
   ```

   内容如下

   ```bash
   [Unit]
   Description=easyipx daemon
   After=syslog.target network.target
   Wants=network.target
   [Service]
   Type=simple
   ExecStart=/data/easyipx/easyipx -c /data/easyipx/conf.json
   Restart= always
   RestartSec=1min
   [Install]
   WantedBy=multi-user.target
   ```

3. 重载配置、启动服务

   ```bash
   # 重载配置
   systemctl daemon-reload
   # 开机自启
   systemctl enable easyipx.service
   # 启动服务
   systemctl start easyipx.service
   # 停止服务
   systemctl stop easyipx.service
   # 重启服务
   systemctl restart easyipx.service
   
   # 查看运行状态
   systemctl status easyipx.service
   # 查看日志
   journalctl -u easyipx.service
   ```

#### 插件添加主机

> 主机地址：`47.107.39.165`为公网IP地址，`18088`端口为`conf.json`配置的通道地址
>
> http端口：`16080`为`conf.json`配置的http端口



<img src="http://oss.feny.ink/blogs/images/202407151231572.png" alt="image-20240715123154519" style="zoom:80%;" />

如果开启在`conf,json`开启通道加密，添加主机时要开启传输加密按钮，并上传证书



<img src="http://oss.feny.ink/blogs/images/202407151406019.png" alt="image-20240715140644964" style="zoom: 67%;" />



添加成功后 如下图所示

<img src="http://oss.feny.ink/blogs/images/202407151233761.png" alt="image-20240715123345715" style="zoom:80%;" />  

直连方式部署完成。

### Nginx代理部署

#### 创建反向代理

在`Nginx`中添加转发到`easyipx`的配置

```b
server {
  listen 80;
  server_name *.ipx.fney.ink;
 
	# 转发到easyipx
	location / {
		proxy_pass http://127.0.0.1:16080; # 反向代理目标地址
		proxy_cache off;
		proxy_set_header Host $host; # 设置请求头
		proxy_set_header X-Real-IP $remote_addr; # 设置真实IP头
		proxy_set_header X-Forwarded-Host $host;
		proxy_set_header X-Forwarded-Port $server_port;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; # 设置转发头
		proxy_set_header X-Forwarded-Proto $scheme; # 设置转发协议头
		proxy_redirect http://$host/ http://$host:$server_port/;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "upgrade";
		proxy_read_timeout 7200;
	}


	location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
	{
	   expires      30d;
	   error_log /dev/null;
	   access_log /dev/null;
	}

	location ~ .*\.(js|css)?$
	{
	   expires      12h;
	   error_log /dev/null;
	   access_log /dev/null; 
	}
}
```

重启`Nginx`

#### 插件添加主机

<img src="C:/Users/Administrator/Desktop/202407151327808.png" alt="image-20240715132731701" style="zoom:80%;" /> 

### 添加隧道

启动本地要内网穿透的服务，如`IntelliJ IDEA`启动一个`SpringBoot`服务，请求地址为`http://192.168.0.177:10010`

<img src="http://oss.feny.ink/blogs/images/202407151330773.png" alt="image-20240715133050716" style="zoom:80%;" /> 

#### 启动隧道

隧道添加完成后，启动隧道

<img src="http://oss.feny.ink/blogs/images/202407151336825.png" alt="image-20240715133638775" style="zoom:80%;" />

启动完成后即可外网访问内网的服务地址，外网访问地址为：

1. 如果为直连模式：http://test.ipx.feny.ink:16080
2. nginx代理模式：http://test.ipx.feny.ink







