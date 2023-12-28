---
date: 2023-12-28
category:
  - Markdown
tag:
  - Markdown
  - 图片上传
---

# 实现Markdown文档自动上传图片



## 一、前言

期望编辑的Markdown文章引用的图片不是在本地，而是存放在图床上，在网上百度到的方法后，找到使用typora+picgo+oss解决问题，故记录下来。

## 二、搭建流程

### 1、购买阿里云oss的服务

请自行购买阿里云oss的服务

#### （1）、oss相关配置

##### （1.1）、从右上角头像的下拉菜单里面点击【访问控制】

<img src="https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281529702.png" alt="image-20230102172610021" style="zoom: 67%;" /> 



##### （1.2）、在点击【身份管理】的【用户】，在点击右边的【创建用户】

<img src="https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281531203.png" alt="image-20230102173136573" style="zoom:67%;" /> 

##### （1.3）、创建用户记得勾选【OpenApi调用访问】

这个是PicGo上传图片要用的

<img src="https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281532975.png" alt="image-20230102173820775" style="zoom: 67%;" /> 

##### （1.4）、给设置的用户添加权限

记住要给设置的用户添加权限【AliyunOSSFulAccess】

**这个权限给Ram用户一定要设置下，要不然没法使用oss的各种操作**

<img src="https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281532817.png" alt="image-20230102174319723" style="zoom: 67%;" /> 

##### （1.5）、找到账号对应的key和Secret

![image-20230102201534323](https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281533491.png) 

#### （2）、创建Bucket

打开[OSS控制台](https://oss.console.aliyun.com/overview)，点击Bucket列表--创建Bucket

>**小提示：要记住设置公共读，因为我们的图片是要让大家能在平台上传时能访问的。**

<img src="https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281537737.png" alt="image-20230102175605624" style="zoom:80%;" /> 

可以给要存储图片的目录创建一个文件夹（可选，不创建也没有关系）

点击刚才创建好的Bucket，为了方便我们管理，右边选择新建目录，比如picture之类的。

### 2、安装配置PicGo

PicGo官网：<https://molunerfinn.com/PicGo/>

下载安装后，配置阿里云oss

在【图床设置】里面选择【阿里云OSS】，填入之前复制的key和Secret，还有bucket，储存区域可以从bucket点开，【概览】里面可以看到，.aliyuncs.com之前的oss-cn-shenzhen就是存储区域。 

<img src="https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281619853.png" alt="image-20231228161936779" style="zoom:50%;" /> 

<img src="https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281543842.png" alt="image-20231228154351793" style="zoom:80%;" /> 

##### 验证下效果

在上传区选择切换当前图床为阿里云OSS，随便上传一张图片

<img src="https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281546085.png" alt="image-20231228154641037" style="zoom:50%;" /> 

上传成功后可以在相册中看到刚上传的图片即表示成功。

<img src="https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281548984.png" alt="image-20231228154835939" style="zoom:50%;" />  

### 3、安装配置Typora

官方网站地址：<https://typoraio.cn/>

Typora破解版链接：<https://pan.baidu.com/s/1qoix0s_ue71k99mXd527OQ> 提取码：kygx

下载安装好 Typora 后，进入偏好设置

<img src="https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281519218.png" alt="image-20230102164627305" style="zoom: 80%;" /> 

选择【图像】的设置，插入图片选择上传图片

<img src="https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281521725.png" alt="image-20230102152039088" style="zoom: 67%;" /> 

点击“验证图片上传选择”可以验证是否上传成功阿里云OSS

<img src="https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281551663.png" alt="image-20231228155141615" style="zoom:50%;" /> 

没问题的话以后编写Markdown文档，插入的图片就会自动上传到阿里云OSS啦。
