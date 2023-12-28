---
date: 2023-12-25
category:
  - Java
  - 环境配置
tag:
  - Java
  - 环境配置
---

# Java JDK环境配置

## Windows环境下安装配置

### 第一步 下载JDK并安装
下载好JDK exe文件直接双击，一直点下一步即可，安装成功后，我们开始进行java的环境变量配置

### 第二步 配置环境变量
1. 首先找到jdk的安装目录，默认情况下在C:\Program Files\Java目录下  
2. 然后我们点击桌面“我的电脑”右键“属性”：  
![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281326725.png)  

3. 点击“高级系统设置”：  
![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281326801.png)  

4. 点击“环境变量”：  
![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281326559.png)  

5. 在“系统变量”中新建一个，变量名：JAVA_HOME，变量值为JDK的安装路径。  
![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281326919.png)  

6. 新建一个CLASSPATH路径，输入：

```
.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar
```
![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281326522.png)  

7. 找到path变量：  
![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281326042.png)  

8. 点击编辑，然后选择新建，加入下面变量值，最后点确定:  

```
%JAVA_HOME%\bin
```
![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281326206.png)  

9. 在cmd中输入javac，出现以下页面，就可以了  

![](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281326935.png)

如果运行没有出任何问题的话，那么表示JDK已经配置成功了！  

## Linux/Centos环境下安装配置

### 方法一：手动解压JDK的压缩包，然后设置环境变量
#### 1.在/usr/目录下创建java目录 
```sh
[root@localhost ~]# mkdir/usr/java
[root@localhost ~]# cd /usr/java
```
#### 2.下载，然后解压
```sh
[root@localhost java]# curl -O http://download.oracle.com/otn-pub/java/jdk/7u79-b15/jdk-7u79-linux-x64.tar.gz 
[root@localhost java]# tar -zxvf jdk-7u79-linux-x64.tar.gz
```
#### 3.设置环境变量
```sh
[root@localhost java]# vim /etc/profile
```
在最后面添加如下内容：  
```sh
#set java environment
export JAVA_HOME=/usr/lib/jvm/java-1.7.0-openjdk-1.7.0.75.x86_64
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
```
让修改生效：  
```sh
[root@localhost java]# source /etc/profile
```
#### 4.验证
```sh
[root@localhost java]# java -version
java version "1.7.0_79"
Java(TM) SE Runtime Environment (build 1.7.0_79-b15)
Java HotSpot(TM) 64-Bit Server VM (build 24.79-b02, mixed mode)
```
### 方法二：用yum安装JDK(CentOS)
#### 1.查看yum库中都有哪些jdk版本  

```sh
[root@localhost ~]# yum search java|grep jdk
java-1.6.0-openjdk.x86_64 : OpenJDK Runtime Environment
java-1.6.0-openjdk-demo.x86_64 : OpenJDK Demos
java-1.6.0-openjdk-devel.x86_64 : OpenJDK Development Environment
java-1.6.0-openjdk-javadoc.x86_64 : OpenJDK API Documentation
java-1.6.0-openjdk-src.x86_64 : OpenJDK Source Bundle
java-1.7.0-openjdk.x86_64 : OpenJDK Runtime Environment
java-1.7.0-openjdk-accessibility.x86_64 : OpenJDK accessibility connector
java-1.7.0-openjdk-demo.x86_64 : OpenJDK Demos
java-1.7.0-openjdk-devel.x86_64 : OpenJDK Development Environment
java-1.7.0-openjdk-headless.x86_64 : The OpenJDK runtime environment without
java-1.7.0-openjdk-javadoc.noarch : OpenJDK API Documentation
java-1.7.0-openjdk-src.x86_64 : OpenJDK Source Bundle
java-1.8.0-openjdk.x86_64 : OpenJDK Runtime Environment 8
java-1.8.0-openjdk.i686 : OpenJDK 8 Runtime Environment
java-1.8.0-openjdk-accessibility.i686 : OpenJDK accessibility connector
java-1.8.0-openjdk-accessibility.x86_64 : OpenJDK accessibility connector
java-1.8.0-openjdk-demo.i686 : OpenJDK Demos 8
java-1.8.0-openjdk-demo.x86_64 : OpenJDK 8 Demos
java-1.8.0-openjdk-devel.i686 : OpenJDK Development Environment 8
java-1.8.0-openjdk-devel.x86_64 : OpenJDK 8 Development Environment
java-1.8.0-openjdk-headless.x86_64 : OpenJDK Headless Runtime Environment 8
java-1.8.0-openjdk-headless.i686 : OpenJDK 8 Headless Runtime Environment
java-1.8.0-openjdk-javadoc.noarch : OpenJDK 8 API documentation
java-1.8.0-openjdk-javadoc-zip.noarch : OpenJDK 8 API documentation compressed
java-1.8.0-openjdk-src.i686 : OpenJDK Source Bundle 8
java-1.8.0-openjdk-src.x86_64 : OpenJDK 8 Source Bundle
```
#### 2.选择版本，进行安装  

我们这里安装1.8版本

```sh
[root@localhost ~]# yum -y install java-1.8.0-openjdk-devel.x86_64
```
安装完之后，默认的安装目录是在: /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.272.b10-1.el7_9.x86_64  

#### 3.设置环境变量  

```sh
[root@localhost java]# vim /etc/profile
```

在最后面添加如下内容：    

```sh
#set java environment
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.272.b10-1.el7_9.x86_64（修改为你自己所对应的版本）
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
```
让修改生效：  
```sh
[root@localhost java]# source /etc/profile
```

#### 4.验证  

```sh
[root@localhost java]# java -version
java version "1.7.0_79"
Java(TM) SE Runtime Environment (build 1.7.0_79-b15)
Java HotSpot(TM) 64-Bit Server VM (build 24.79-b02, mixed mode)
```