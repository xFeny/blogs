---
date: 2023-12-27
category:
  - Node
  - 环境配置
tag:
  - Node
  - 环境配置
---


# Node.js 安装

## Windows 下安装

### 一、下载
Node.js官网：<https://nodejs.org/en>  
Node.js中文网：<http://www.nodejs.com.cn/>  

![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281327821.png)

### 二、安装
（1）、下载好安装包后双击安装，点击 Next 显示Node.js的许可协议页面：  
![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281327327.png)  

（2）、勾选“I accept the terms in the License Agreement”同意许可协议，并单击Next下一步，出现如下界面：  
![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281327420.png)  

（3）、Node.js默认安装路径为“C:\Program Files\nodejs\”，你可以修改，在这里我改到了D盘，单击Next，出现安装模式及模块选择界面：  
![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281327732.png)  

（4）、确认无误后，点击Install，开始安装：  
![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281327896.png)

（5）、安装完成，点击Finish即可


（6）、配置环境变量  

默认Node.js安装完毕，会自动在系统的path环境变量中配置了node.exe的目录路径；  
但是可能你安装完成后，cmd命令下输入node提示错误（需配置环境）。  

打开系统环境变量，在系统变量列表中找到path变量，添加Node.js安装路劲  

（7）、检测是否安装成功  

![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281327544.png)  

### 三、配置淘宝镜像
1、查看当前镜像源  
首先我们需要查看当前Node.js使用的镜像源。在命令行中输入以下命令：
```sh
npm config get registry
```
此命令将返回Node.js当前使用的镜像源地址，如果是默认的官方镜像源，将返回以下结果：  
```
https://registry.npmjs.org/
```
2、使用淘宝镜像  
要使用淘宝镜像，我们需要将npm注册表的地址从默认的官方镜像源切换到淘宝源。命令如下：  
```sh
npm config set registry https://registry.npm.taobao.org
```
此命令将注册表地址改为淘宝镜像源，使用淘宝源即可享受更快的下载速度。  

### 四、自定义 npm 全局包下载路径

1、查看 npm 默认路径配置  

分别执行以下查看命令：  

```sh
npm config get prefix

npm config get cache
```
2、配置自定义的全局模块安装目录  

在node.js安装目录下新建两个文件夹 node_global和node_cache  
分别执行以下命令：
```sh
npm config set prefix "D:\software\nodejs\node_global"

npm config set cache "D:\software\nodejs\node_cache"
```

3、环境配置  

D:\software\nodejs 为 Node 的安装路径，在此路劲下分别创建 node_global 和 node_cache 两个文件夹  

在“我的电脑”-右键-“属性”-“高级系统设置”-“高级”-“环境变量”  
（1）、在【系统变量】下新建【NODE_PATH】，输入
```
D:\software\nodejs\node_global\node_modules
```
（2）、在【系统变量】下的【Path】添加上Node的路径（一般安装Node时已经添加进来）  
```
D:\software\nodejs\
```
（3）、在【用户变量】下的【Path】添加上  
```
D:\software\nodejs\node_global
D:\software\nodejs\node_cache
```

### 五、遇到的问题

#### 问题一、自定义 npm 全局包下载路径遇到的问题

自定义路径后配置好，尝试全局安装yarn试试是否修改成功： 
```sh
npm install -g yarn
```

执行命令后报以下报错：  
```sh
npm ERR! code EPERM
npm ERR! syscall mkdir
npm ERR! path D:\software\nodejs\node_cache\_cacache
npm ERR! errno -4048
npm ERR! Error: EPERM: operation not permitted, mkdir 'D:\software\nodejs\node_cache\_cacache'
npm ERR!  [Error: EPERM: operation not permitted, mkdir 'D:\software\nodejs\node_cache\_cacache'] {
npm ERR!   errno: -4048,
npm ERR!   code: 'EPERM',
npm ERR!   syscall: 'mkdir',
npm ERR!   path: 'D:\\software\\nodejs\\node_cache\\_cacache',
npm ERR!   requiredBy: '.'
npm ERR! }
npm ERR!
npm ERR! The operation was rejected by your operating system.
npm ERR! It's possible that the file was already in use (by a text editor or antivirus),
npm ERR! or that you lack permissions to access it.
npm ERR!
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.

npm ERR! Log files were not written due to an error writing to the directory: D:\software\nodejs\node_cache\_logs
npm ERR! You can rerun the command with `--loglevel=verbose` to see the logs in your terminal
```

**解决方案：**  
找到安装node.js的文件夹 -右键-属性-安全，给用户完全控制的权限。  
![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281327606.png)  
![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281327924.png)  

设置安后重新执行命令，安装成功 

![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281327068.png)  

可以看到刚安装的 yarn 出现在自定义 npm 全局包下载路径中，问题解决  

![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281327908.png)  


## CentOS 下安装

### 一、下载安装 Node.js

官网找到想要安装的版本：<https://nodejs.org/download/release/>  

若wget未安装，先安装   
```sh
yum install -y wget
```

下载 Node 解压：  
```sh
# 可以修改为你想要的 Node 安装路劲
cd /usr/local/
wget https://nodejs.org/download/release/latest-v18.x/node-v18.19.0-linux-x64.tar.gz
tar -xvf node-v18.19.0-linux-x64.tar.gz
```

### 二、配置环境变量 

修改/etc/profile文件  
```sh
vim /etc/profile
```

在profile文件末尾加入下面内容，并保存  
```sh
export NODEJS=/usr/local/node-v18.19.0-linux-x64
export PATH=$PATH:$NODEJS/bin
```

刷新环境变量  
```sh
source /etc/profile
```

### 三、建立软连接，是否安装成功
建立软连接  
```sh
# 建立 node 软链接
ln -s /usr/local/node-v18.19.0-linux-x64/bin/node /usr/bin
# 建立 npm 软链接
ln -s /usr/local/node-v18.19.0-linux-x64/bin/npm /usr/bin
```

验证是否安装成功
```sh
[root@localhost ~]# node -v
[root@localhost ~]# npm -v
```
>**注意：** CentOS 7 安装 Node v18 及以后版本执行 node -v 会报错，具体解决办法看[遇到的问题](#六、遇到的问题)  

### 四、切换淘宝镜像 
```sh
npm config set registry http://registry.npm.taobao.org/
```

### 五、自定义 npm 全局包下载路径

```sh
npm config set prefix "/data/.cache/node/node_global"

npm config set cache "/data/.cache/node/node_cache"
```

### 六、遇到的问题

#### 问题一、CentOS 7 下安装Node.js，配置好环境变量后，验证是否成功时报以下错误：  
```sh
[root@localhost local]# node -v
node: /lib64/libm.so.6: version `GLIBC_2.27' not found (required by node)
node: /lib64/libc.so.6: version `GLIBC_2.25' not found (required by node)
node: /lib64/libc.so.6: version `GLIBC_2.28' not found (required by node)
node: /lib64/libstdc++.so.6: version `CXXABI_1.3.9' not found (required by node)
node: /lib64/libstdc++.so.6: version `GLIBCXX_3.4.20' not found (required by node)
node: /lib64/libstdc++.so.6: version `GLIBCXX_3.4.21' not found (required by node)
```
**问题原因：** Node从v18开始不再支持CentOS 7，而CentOS 7的 GLIBC 版本过低，造成报错  

查看GLIBC版本：  
```sh
ldd --version
```

> **注意：** 直接升级系统为 CentOS 8，可以有效解决问题

**解决办法：** 

①、升级bison  
```sh
yum -y install bison
```

②、升级 gcc

```sh
# 安装devtoolset-8-gcc
yum install centos-release-scl
yum install devtoolset-8
scl enable devtoolset-8 -- bash

# 启用工具
source /opt/rh/devtoolset-8/enable

# 安装GCC-8
yum install -y devtoolset-8-gcc devtoolset-8-gcc-c++ devtoolset-8-binutils

# 设置环境变量
echo "source /opt/rh/devtoolset-8/enable" >> /etc/profile
source /etc/profile
```

③、升级make
```sh
# 下载并解压安装包
wget https://ftp.gnu.org/gnu/make/make-4.3.tar.gz --no-check-certificate
tar -xzvf make-4.3.tar.gz
cd make-4.3/

# 安装到指定目录
./configure  --prefix=/usr/local/make
make
make install

# 创建软链接
cd /usr/bin/
# backup
mv make make.bak
ln -sv /usr/local/make/bin/make /usr/bin/make
```

④、升级 libstdc++  
```sh
cd
yum whatprovides libstdc++.so.6
yum update -y libstdc++.x86_64

wget http://www.vuln.cn/wp-content/uploads/2019/08/libstdc.so_.6.0.26.zip
unzip libstdc.so_.6.0.26.zip
cp libstdc++.so.6.0.26 /lib64/
cd /lib64

# 把原来的命令做备份
cp libstdc++.so.6 libstdc++.so.6.bak
rm -f libstdc++.so.6

# 重新链接
ln -s libstdc++.so.6.0.26 libstdc++.so.6
```

⑤、更新 glibc  
```sh
cd
wget http://ftp.gnu.org/gnu/glibc/glibc-2.28.tar.gz
tar xf glibc-2.28.tar.gz
cd glibc-2.28/ && mkdir build  && cd build

# 配置环境
../configure --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/bin
# 安装
# make -j4 多线程编译
make
make install
```
make安装耗时比较久，需耐心等待完成

⑥、查看版本  
```sh
ldd --version
```

⑦、再次执行
```sh
node -v
```