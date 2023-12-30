---
author: Feny
date: 2023-12-28
icon: mysql
star: true
category:
  - MySQL
  - 环境配置
tag:
  - MySQL
  - 环境配置
---

# MySQL 8 安装



## Windows 下 解压包安装

安装教程详见：<https://blog.csdn.net/weixin_45857665/article/details/127286920>



## Centos 下安装

### 一、安装前

安装前先清理 mariadb 和 mysql 相关文件

查询是否安装了mariadb

```sh
rpm -qa|grep mariadb
```

![](http://oss.feny.ink/blogs/images/202312281955470.png) 

卸载mariadb

```sh
rpm -e --nodeps mariadb-libs-5.5.68-1.el7.x86_64
```

查询跟mysql相关的文件

```sh
find / -name mysql
```

![](http://oss.feny.ink/blogs/images/202312281957856.png) 

删除文件

```sh
rm -rf /etc/selinux/targeted/active/modules/100/mysql
rm -rf /usr/lib64/mysql
```

### 二、下载 MySQL

选择Community社区免费版，[下载网址](https://dev.mysql.com/downloads/mysql/)

**Select Version** 根据个人选择，**Select Operating System** 选择 **Red Hat Enterprise Linux Oracle Linux** ，**Select OS Version**  根据个人服务器版本选择，CentOS 7 就选择 7 的，CentOS8 就选 8，以此类推。

<img src="http://oss.feny.ink/blogs/images/202312282000456.png" alt="image-20231228200006400" style="zoom:80%;" /> 

然后找到对应安装包，本教程选择 RPM Bundle，点击Download

<img src="http://oss.feny.ink/blogs/images/202312282035687.png" alt="image-20231228203500646" style="zoom: 67%;" /> 

复制下载地址

<img src="http://oss.feny.ink/blogs/images/202312282002439.png" alt="image-20231228200258388" style="zoom:67%;" />  

到 /usr/local 目录下，创建mysql目录，并进入mysql文件夹

```sh
cd /usr/local
mkdir mysql
cd mysql
```

输入下载mysql安装包命令回车下载：**wget + 上面右键复制的链接粘贴过来**

```sh
wget https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.35-1.el7.x86_64.rpm-bundle.tar
```

解压文件

```sh
tar -xvf mysql-8.0.35-1.el7.x86_64.rpm-bundle.tar
```

### 三、安装 MySQL

解压后的文件列表

```sh
[root@localhost mysql]# tar -xvf mysql-8.0.35-1.el7.x86_64.rpm-bundle.tar
mysql-community-client-8.0.35-1.el7.x86_64.rpm
mysql-community-client-plugins-8.0.35-1.el7.x86_64.rpm
mysql-community-common-8.0.35-1.el7.x86_64.rpm
mysql-community-debuginfo-8.0.35-1.el7.x86_64.rpm
mysql-community-devel-8.0.35-1.el7.x86_64.rpm
mysql-community-embedded-compat-8.0.35-1.el7.x86_64.rpm
mysql-community-icu-data-files-8.0.35-1.el7.x86_64.rpm
mysql-community-libs-8.0.35-1.el7.x86_64.rpm
mysql-community-libs-compat-8.0.35-1.el7.x86_64.rpm
mysql-community-server-8.0.35-1.el7.x86_64.rpm
mysql-community-server-debug-8.0.35-1.el7.x86_64.rpm
mysql-community-test-8.0.35-1.el7.x86_64.rpm
```

依次执行以下命令：

```sh
rpm -ivh mysql-community-common-8.0.35-1.el7.x86_64.rpm --nodeps
rpm -ivh mysql-community-libs-8.0.35-1.el7.x86_64.rpm --nodeps --force
rpm -ivh mysql-community-client-8.0.35-1.el7.x86_64.rpm --nodeps --force
rpm -ivh mysql-community-server-8.0.35-1.el7.x86_64.rpm --nodeps --force
```

通过 **rpm -qa | grep mysql** 命令查看 mysql 的安装包，确认是否全部安装好

```sh
[root@localhost mysql]# rpm -qa | grep mysql
mysql-community-server-8.0.35-1.el7.x86_64
mysql-community-common-8.0.35-1.el7.x86_64
mysql-community-client-8.0.35-1.el7.x86_64
mysql-community-libs-8.0.35-1.el7.x86_64
```

### 四、初始化 MySQL

修改 my.cnf 配置，在 [mysqld] 配置节点下添加 **lower-case-table-names=1**，如果想要区分大小写，请忽略。

```sh
vim /etc/my.cnf
```

<img src="http://oss.feny.ink/blogs/images/202312282057089.png" alt="image-20231228205705043" style="zoom:67%;" /> 

::: tip 

在 Linux 环境下默认是区分大小写的，如要改变这种默认方式，需要在初始化前修改 **lower_case_table_names**，mysql 8.0 要求我们不能在initialize之后再更改 **lower_case_table_names** 的值，也就是说，再通过更改 my.cnf 文件是不管用的。

::: 

在 /var/log 下新建一个 slowsql.log 文件，用来记录慢SQL的日志

```sh
# 创建
touch /var/log/slowsql.log
# 赋权限
chown mysql:mysql /var/log/slowsql.log
chmod 664 /var/log/slowsql.log

```

通过以下命令，完成对 mysql 数据库的初始化和相关配置

```sh
mysqld --initialize
chown mysql:mysql /var/lib/mysql -R
# 启动 mysql 服务
systemctl start mysqld.service
# mysql 开机自动启动
systemctl enable mysqld
```

### 五、修改密码

#### 查看数据库的密码

```sh
cat /var/log/mysqld.log | grep password
```

<img src="http://oss.feny.ink/blogs/images/202312282104750.png" alt="image-20231228210457698" style="zoom:80%;" /> 

使用查看到的密码登录

```sh
mysql -uroot -p
```

<img src="http://oss.feny.ink/blogs/images/202312282106935.png" alt="image-20231228210644903" style="zoom:80%;" /> 

#### 修改密码

```sh
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你要设置的密码';
```

#### 修改密码重新登录

通过 exit 命令退出 MySQL，然后通过新密码再次登陆

<img src="http://oss.feny.ink/blogs/images/202312282111702.png" alt="image-20231228211136661" style="zoom: 80%;" /> 

### 六、开放远程访问

分别执行以下命令：

```sh
create user 'root'@'%' identified with mysql_native_password by '你要设置的密码';
grant all privileges on *.* to 'root'@'%' with grant option;
flush privileges;
```

![](http://oss.feny.ink/blogs/images/202312282114411.png) 

### 七、配置防火墙

#### 开放端口

```sh
firewall-cmd --zone=public --add-port=3306/tcp --permanent
```

#### 重启防火墙

```sh
firewall-cmd --reload
```

#### 在Navicat上测试连接

<img src="http://oss.feny.ink/blogs/images/202312282118304.png" alt="image-20231228211827250" style="zoom:50%;" /> 



### 八、其他

如果是阿里云服务器，可能还需要在服务器控制台安全组添加相应的端口才行

<img src="http://oss.feny.ink/blogs/images/202312282137797.png" style="zoom: 50%;" /> 
