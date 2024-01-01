---
author: Feny
date: 2023-12-25
icon: java
star: true
category:
  - Java
  - 环境配置
tag:
  - Java
  - 环境配置
---

# Java JDK环境配置

## Oracle 免登录下载JDK

Oracle JDK下载地址：<https://www.oracle.com/java/technologies/downloads/>

打开JDK下载页，找到需要的JDK版本，在弹出窗中勾选协议，然后鼠标右键复制地址，即可下载

<img src="http://oss.feny.ink/blogs/images/202401011344311.png" alt="image-20240101134453251" style="zoom:50%;" /> 



## Windows 下安装

### 第一步 下载JDK并安装

Oracle JDK下载地址：<https://www.oracle.com/java/technologies/downloads/>

OpenJDK下载地址：<https://jdk.java.net/>

下载好`JDK exe`文件直接双击，一直点下一步即可，安装成功后，我们开始进行java的环境变量配置

### 第二步 配置环境变量
1. 首先找到jdk的安装目录，默认情况下在C:\Program Files\Java目录下  
2. 然后我们点击桌面“我的电脑”右键“属性”：  
![](http://oss.feny.ink/blogs/images/202312281326725.png)  

3. 点击“高级系统设置”：  
![](http://oss.feny.ink/blogs/images/202312281326801.png)  

4. 点击“环境变量”：  
![](http://oss.feny.ink/blogs/images/202312281326559.png)  

5. 在“系统变量”中新建一个，变量名：JAVA_HOME，变量值为JDK的安装路径。  
![](http://oss.feny.ink/blogs/images/202312281326919.png)  

6. 新建一个CLASSPATH路径，输入：

```
.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar
```
![](http://oss.feny.ink/blogs/images/202312281326522.png)  

7. 找到path变量：  
![](http://oss.feny.ink/blogs/images/202312281326042.png)  

8. 点击编辑，然后选择新建，加入下面变量值，最后点确定:  

```
%JAVA_HOME%\bin
```
![](http://oss.feny.ink/blogs/images/202312281326206.png)  

9. 在cmd中输入javac，出现以下页面，就可以了  

![](http://oss.feny.ink/blogs/images/202312281326935.png)

如果运行没有出任何问题的话，那么表示JDK已经配置成功了！  

## Centos 下安装

### 方法一：手动解压JDK安装

OpenJDK官网：<https://jdk.java.net>

<img src="http://oss.feny.ink/blogs/images/202401011411068.png" alt="image-20240101141132019" style="zoom:50%;" /> 

选择想要的版本，复制地址

<img src="http://oss.feny.ink/blogs/images/202401011413817.png" alt="image-20240101141335760" style="zoom:50%;" /> 

#### 1.在/usr/目录下创建java目录
```sh
mkdir /usr/java && cd /usr/java
```
#### 2.下载，然后解压
```sh
# 下载
wget https://download.java.net/openjdk/jdk8u43/ri/openjdk-8u43-linux-x64.tar.gz
tar -zxvf openjdk-8u43-linux-x64.tar.gz
```
#### 3.设置环境变量
```sh
vim /etc/profile
```
在最后面添加如下内容：  
```sh
#set java environment
# java-se-8u43-ri 为tar解压时的目录名
export JAVA_HOME=/usr/java/java-se-8u43-ri
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
```
让修改生效：  
```sh
source /etc/profile
```
#### 4.验证
```sh
java -version
```
![image-20240101155549673](http://oss.feny.ink/blogs/images/202401011555713.png) 

安装完成！！！

### 方法二：用yum安装JDK

#### 1、yum 安装 openjdk

```sh
yum -y install java-1.8.0-openjdk
```
安装完之后，默认的安装目录是在: `/usr/lib/jvm/java-1.8.0-openjdk `

#### 2.设置环境变量  

```sh
vim /etc/profile
```

在最后面添加如下内容：    

```sh
#set java environment
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
```
让修改生效：  
```sh
source /etc/profile
```

#### 3.验证  

```sh
java -version
```

![image-20240101155652031](http://oss.feny.ink/blogs/images/202401011556060.png) 

安装完成！！！