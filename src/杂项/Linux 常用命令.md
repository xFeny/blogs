---
# 是否收藏在博客主题的文章列表中。
# 当填入数字时，数字越大，排名越靠前，类型: boolean | number，默认值: false
# start: true
title: Linux 常用命令
# 作者
author: Feny
# 写作时间
date: 2024-01-01
icon: linux
# 分类
category:
  - 常用命令

# 标签
tag:
  - 常用命令
  - Linux
---

原文：

<https://www.cnblogs.com/twcat/p/16912345.html>、

<https://mp.weixin.qq.com/s?__biz=MzI3NDc4NTQ0Nw==&mid=2247551648&idx=1&sn=29b3b5d1d8bf7d7cf149f9f05c4547e1>、<https://zhuanlan.zhihu.com/p/448259969>



```sh
# ps与grep 常用组合用法，查找特定进程
ps -ef | grep ssh
```



## 一、目录操作命令

### 目录切换

语法：

```sg
cd /        切换到根目录
cd /usr     切换到根目录下的usr目录
cd ../      切换到上一级目录 或者  cd ..
cd ~        切换到home目录
cd -        切换到上次访问的目录
```

### 查看目录

语法：

```sh
# 查看当前目录下的所有目录和文件
ls
# 查看当前目录下的所有目录和文件（包括隐藏的文件）
ls -a
# 或 ll 列表查看当前目录下的所有目录和文件（列表查看，显示更多信息）
ls -l
#查看指定目录下的所有目录和文件 如：ls /usr
ls /dir
# 将目录下的所有文件列出来(含属性与隐藏档)
ls -al ~
```

### 创建目录

语法：

```sh
mkdir [-mp] 目录名称
```

> 选项与参数：
>
> - -f ：就是 force 的意思，忽略不存在的文件，不会出现警告信息；
> - -i ：互动模式，在删除前会询问使用者是否动作
> - -r ：递归删除啊！最常用在目录的删除了！这是非常危险的选项！！！

### 删除目录或文件

语法：

````sh
rm [-fir] 文件或目录
````

> 选项与参数：
>
> - -f ：就是 force 的意思，忽略不存在的文件，不会出现警告信息；
> - -i ：互动模式，在删除前会询问使用者是否动作
> - -r ：递归删除！最常用在目录的删除了！这是非常危险的选项！！！

### 删除空的目录

```sh
rmdir [-p] 目录名称
```

> 选项与参数：
>
> -p ：连同上一级『空的』目录也一起删除

### 目录修改

**mv 移动文件与目录，或修改名称**

语法：

```shell
mv [-fiu] 来源档(source) 目标档(destination)
mv [options] source1 source2 source3 .... directory 
```

> 选项与参数：
>
> - -f ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；
> - -i ：若目标文件 (destination) 已经存在时，就会询问是否覆盖！
> - -u ：若目标文件已经存在，且 source 比较新，才会升级 (update)

**cp 复制文件或目录**

语法:

```shell
cp [-adfilprsu] 来源档(source) 目标档(destination)
cp [options] source1 source2 source3 .... directory 
```

>选项与参数：
>
>- -a：相当於 -pdr 的意思，至於 pdr 请参考下列说明；(常用)
>- -d：若来源档为连结档的属性(link file)，则复制连结档属性而非文件本身；
>- -f：为强制(force)的意思，若目标文件已经存在且无法开启，则移除后再尝试一次；
>- -i：若目标档(destination)已经存在时，在覆盖时会先询问动作的进行(常用)
>- -l：进行硬式连结(hard link)的连结档创建，而非复制文件本身；
>- -p：连同文件的属性一起复制过去，而非使用默认属性(备份常用)；
>- -r：递归持续复制，用於目录的复制行为；(常用)
>- -s：复制成为符号连结档 (symbolic link)，亦即『捷径』文件；
>- -u：若 destination 比 source 旧才升级 destination ！

**一、重命名目录**  
命令：mv 当前目录 新目录  
例如：mv aaa bbb 将目录aaa改为bbb  
注意：mv的语法不仅可以对目录进行重命名而且也可以对各种文件，压缩包等进行 重命名的操作

**二、剪切目录**  
命令：mv 目录名称 目录的新位置  
示例：将/usr/tmp目录下的aaa目录剪切到 /usr目录下面 mv /usr/tmp/aaa /usr  
注意：mv语法不仅可以对目录进行剪切操作，对文件和压缩包等都可执行剪切操作

**三、拷贝目录**  
命令：cp -r 目录名称 目录拷贝的目标位置 -r代表递归  
示例：将/usr/tmp目录下的aaa目录复制到 /usr目录下面 cp /usr/tmp/aaa /usr  
注意：cp命令不仅可以拷贝目录还可以拷贝文件，压缩包等，拷贝文件和压缩包时不 用写-r递归

### 搜索目录

```sh
find 
```



### 显示当前目录

```sh
pwd
```

## 二、文件操作命令

### 新建文件

```sh
touch testfile
```

### 删除文件

语法：

```sh
rm [-fir] 文件或目录
```

> 选项与参数：
>
> - -f ：就是 force 的意思，忽略不存在的文件，不会出现警告信息；
> - -i ：互动模式，在删除前会询问使用者是否动作
> - -r ：递归删除啊！最常用在目录的删除了！这是非常危险的选项！！！

### 修改文件

**打开文件**

命令：

```sh
vi 文件名
```

示例：

打开当前目录下的aa.txt文件

```sh
 vi aa.txt 
 # 或者
 vim aa.txt
```

注意：使用`vi`编辑器打开文件后，并不能编辑，因为此时处于命令模式，点击键盘i/a/o进入编辑模式。

**编辑文件**

使用`vi`编辑器打开文件后点击按键：i ，a或者o即可进入编辑模式。

i：在光标所在字符前开始插入
a：在光标所在字符后开始插入
o：在光标所在行的下面另起一新行插入

> 编辑模式下：
>
> - **ENTER**，回车键，换行
> - **BACK SPACE**，退格键，删除光标前一个字符
> - **DEL**，删除键，删除光标后一个字符
> - **方向键**，在文本中移动光标
> - **HOME**/**END**，移动光标到行首/行尾
> - **Page Up**/**Page Down**，上/下翻页
> - **Insert**，切换光标为输入/替换模式，光标将变成竖线/下划线
> - **ESC**，退出输入模式，切换到命令模式

**保存文件：**

第一步：`ESC` 进入命令行模式
第二步：: 进入底行模式
第三步：`wq` 保存并退出编辑

**取消编辑：**

第一步：`ESC` 进入命令行模式
第二步：: 进入底行模式
第三步：`q!` 撤销本次修改并退出编辑

### 文件的查看

Linux系统中使用以下命令来查看文件的内容：

- cat 由第一行开始显示文件内容
- tac 从最后一行开始显示，可以看出 tac 是 cat 的倒着写！
- nl 显示的时候，顺道输出行号！
- more 一页一页的显示文件内容
- less 与 more 类似，但是比 more 更好的是，他可以往前翻页！
- head 只看头几行
- tail 只看尾巴几行

你可以使用 *man [命令]*来查看各个命令的使用文档，如 ：man cp。

#### cat

语法：

```shell
cat [-AbEnTv] 
```

选项与参数：

- -A ：相当於 -vET 的整合选项，可列出一些特殊字符而不是空白而已；
- -b ：列出行号，仅针对非空白行做行号显示，空白行不标行号！
- -E ：将结尾的断行字节 $ 显示出来；
- -n ：列印出行号，连同空白行也会有行号，与 -b 的选项不同；
- -T ：将 [tab] 按键以 ^I 显示出来；
- -v ：列出一些看不出来的特殊字符

查看 /etc/issue 这个文件的内容：

```shell
cat /etc/issue
```

`tac`与`cat`命令刚好相反，文件内容从最后一行开始显示，可以看出 `tac` 是 `cat` 的倒着写！如：

```shell
tac /etc/issue
```

#### nl

显示行号

```sh
nl /etc/issue
```

#### more

一页一页翻动

```sh
more /etc/man_db.config
```

在 more 这个程序的运行过程中，你有几个按键可以按的：

- 空白键 (space)：代表向下翻一页；
- Enter ：代表向下翻『一行』；
- /字串 ：代表在这个显示的内容当中，向下搜寻『字串』这个关键字；
- :f ：立刻显示出档名以及目前显示的行数；
- q ：代表立刻离开 more ，不再显示该文件内容。
- b 或 [ctrl]-b ：代表往回翻页，不过这动作只对文件有用，对管线无用。

#### less

一页一页翻动

```sh
less /etc/man.config
```

less运行时可以输入的命令有：

- 空白键 ：向下翻动一页；
- [pagedown]：向下翻动一页；
- [pageup] ：向上翻动一页；
- /字串 ：向下搜寻『字串』的功能；
- ?字串 ：向上搜寻『字串』的功能；
- n ：重复前一个搜寻 (与 / 或 ? 有关！)
- N ：反向的重复前一个搜寻 (与 / 或 ? 有关！)
- q ：离开 less 这个程序；

#### head

取出文件前面几行

语法：

```shell
head [-n number] 文件  
```

选项与参数：

- -n ：后面接数字，代表显示几行的意思

#### tail

取出文件后面几行

语法：

```shell
tail [-n number] 文件  
```

选项与参数：

- -n ：后面接数字，代表显示几行的意思
- -f ：表示持续侦测后面所接的档名，要等到按下[ctrl]-c才会结束tail的侦测

### 权限修改

```sh
chmod 
```

## 三、压缩文件操作

### tar

这条命令是将所有 `.jpg` 的文件打成一个名为 `all.tar` 的包。`-c` 是表示产生新的包，`-f` 指定包的文件名。

```css
tar -cf all.tar *.jpg
```

这条命令是将所有 `.gif` 的文件增加到 `all.tar` 的包里面去，`-r` 是表示增加文件的意思。

```css
tar -rf all.tar *.gif
```

这条命令是更新原来 `tar` 包 `all.tar` 中 `logo.gif` 文件，`-u `是表示更新文件的意思。

```css
tar -uf all.tar logo.gif
```

这条命令是列出 `all.tar `包中所有文件，`-t` 是列出文件的意思。

```css
 tar -tf all.tar
```

这条命令是解出 `all.tar` 包中所有文件，`-x `是解开的意思。

```css
tar -xf all.tar
```

这条命令是将所有 `.jpg` 的文件打成一个 `tar` 包，并且将其用 `gzip` 压缩，生成一个 `gzip` 压缩过的包，包名为 `all.tar.gz`。

```css
tar -czf all.tar.gz *.jpg
```

这条命令是将上面产生的包解开。

```css
tar -xzf all.tar.gz
```

### zip

这条命令是将所有`.jpg` 的文件压缩成一个 zip 包:

```sh 
zip all.zip *.jpg
```

这条命令是将 `all.zip` 中的所有文件解压出来

```sh
unzip all.zip
```

## 四、查找命令

### grep

**`grep`命令是一种强大的文本搜索工具**

使用实例：

```sh
# 查找指定ssh服务进程
ps -ef | grep sshd
# 查找指定服务进程，排除gerp身
ps -ef | grep sshd | grep -v grep
# 查找指定进程个数
ps -ef | grep sshd -c
```

从文件内容查找匹配指定字符串的行：

```sh
grep “被查找的字符串” 文件名
```

例子：在当前目录里第一级文件夹中寻找包含指定字符串的 .in 文件

```sh
grep “thermcontact” /.in
```

从文件内容查找与正则表达式匹配的行：

```sh
grep –e “正则表达式” 文件名
```

查找时不区分大小写：

```sh
grep –i “被查找的字符串” 文件名
```

查找匹配的行数：

```sh
grep -c “被查找的字符串” 文件名
```

从文件内容查找不匹配指定字符串的行：

```sh
grep –v “被查找的字符串” 文件名
```

### find

`find`命令在目录结构中搜索文件，并对搜索结果执行指定的操作。

`find` 默认搜索当前目录及其子目录，并且不过滤任何结果（也就是返回所有文件），将它们全都显示在屏幕上。

使用实例：

```sh
find . -name "*.log" -ls  在当前目录查找以.log结尾的文件，并显示详细信息。 
find /root/ -perm 600   查找/root/目录下权限为600的文件 
find . -type f -name "*.log"  查找当目录，以.log结尾的普通文件 
find . -type d | sort   查找当前所有目录并排序 
find . -size +100M  查找当前目录大于100M的文件
```

例子：从根目录开始查找所有扩展名为 `.log` 的文本文件，并找出包含 `“ERROR”` 的行：

```sh
find / -type f -name “*.log” | xargs grep “ERROR”
```

例子：从当前目录开始查找所有扩展名为 `.in` 的文本文件，并找出包含 `“thermcontact”` 的行：

```sh
find . -name “*.in” | xargs grep “thermcontact”
```

### whereis

`whereis`命令是定位可执行文件、源代码文件、帮助文件在文件系统中的位置。这些文件的属性应属于原始代码，二进制文件，或是帮助文件。

使用实例：

```sh
# 将和ls文件相关的文件都查找出来
whereis ls
```

### which

`which`命令的作用是在`PATH`变量指定的路径中，搜索某个系统命令的位置，并且返回第一个搜索结果。

使用实例：

```sh
# 查找pwd命令所在路径
which pwd 
# 查找path中java的路径
which java
```

## 五、下载与安装

### yum

语法

```sh
yum (选项) (参数)
```

选项：

```bash
-h：显示帮助信息；
-y：对所有的提问都回答“yes”；
-c：指定配置文件；
-q：安静模式；
-v：详细模式；
-d：设置调试等级（0-10）；
-e：设置错误等级（0-10）；
-R：设置yum处理一个命令的最大等待时间；
-C：完全从缓存中运行，而不去下载或者更新任何头文件。
```

参数：

```bash
install：安装rpm软件包；
update：更新rpm软件包；
check-update：检查是否有可用的更新rpm软件包；
remove：删除指定的rpm软件包；
list：显示软件包的信息；
search：检查软件包的信息；
info：显示指定的rpm软件包的描述信息和概要信息；
clean：清理yum过期的缓存；
shell：进入yum的shell提示符；
resolvedep：显示rpm软件包的依赖关系；
localinstall：安装本地的rpm软件包；
localupdate：显示本地rpm软件包进行更新；
deplist：显示rpm软件包的所有依赖关系。
```



>  **yum 常用命令：**
>
> - 1.列出所有可更新的软件清单命令：yum check-update
> - 2.更新所有软件命令：yum update
> - 3.仅安装指定的软件命令：yum install <package_name>
> - 4.仅更新指定的软件命令：yum update <package_name>
> - 5.列出所有可安裝的软件清单命令：yum list
> - 6.删除软件包命令：yum remove <package_name>
> - 7.查找软件包 命令：yum search
> - 8.清除缓存命令:
>   - yum clean packages: 清除缓存目录下的软件包
>   - yum clean headers: 清除缓存目录下的 headers
>   - yum clean oldheaders: 清除缓存目录下旧的 headers
>   - yum clean, yum clean all (= yum clean packages; yum clean oldheaders) :清除缓存目录下的软件包及旧的headers