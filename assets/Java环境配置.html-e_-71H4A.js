import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as i,e as n}from"./app-XhDrXIK6.js";const d="/assets/image-UazS9iZA.png",l="/assets/image-2-cXuJC2io.png",s="/assets/image-3-xYq3SRG3.png",r="/assets/image-6-b126euE2.png",t="/assets/image-7-bsKb6sDd.png",o="/assets/image-9-9TWT_qw7.png",v="/assets/image-10-xbFWlb9M.png",c="/assets/image-8-AfNPcUlM.png",u={},m=n('<h1 id="java-jdk环境配置" tabindex="-1"><a class="header-anchor" href="#java-jdk环境配置" aria-hidden="true">#</a> Java JDK环境配置</h1><h2 id="windows环境下安装配置" tabindex="-1"><a class="header-anchor" href="#windows环境下安装配置" aria-hidden="true">#</a> Windows环境下安装配置</h2><h3 id="第一步-下载jdk并安装" tabindex="-1"><a class="header-anchor" href="#第一步-下载jdk并安装" aria-hidden="true">#</a> 第一步 下载JDK并安装</h3><p>下载好JDK exe文件直接双击，一直点下一步即可，安装成功后，我们开始进行java的环境变量配置</p><h3 id="第二步-配置环境变量" tabindex="-1"><a class="header-anchor" href="#第二步-配置环境变量" aria-hidden="true">#</a> 第二步 配置环境变量</h3><ol><li><p>首先找到jdk的安装目录，默认情况下在C:\\Program Files\\Java目录下</p></li><li><p>然后我们点击桌面“我的电脑”右键“属性”：<br><img src="'+d+'" alt="Alt text" loading="lazy"></p></li><li><p>点击“高级系统设置”：<br><img src="'+l+'" alt="Alt text" loading="lazy"></p></li><li><p>点击“环境变量”：<br><img src="'+s+'" alt="Alt text" loading="lazy"></p></li><li><p>在“系统变量”中新建一个，变量名：JAVA_HOME，变量值为JDK的安装路径。<br><img src="'+r+`" alt="Alt text" loading="lazy"></p></li><li><p>新建一个CLASSPATH路径，输入：</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><ol start="7"><li><p>找到path变量：<br><img src="'+o+`" alt="Alt text" loading="lazy"></p></li><li><p>点击编辑，然后选择新建，加入下面变量值，最后点确定:</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%JAVA_HOME%\\bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+v+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><ol start="9"><li>在cmd中输入javac，出现以下页面，就可以了</li></ol><figure><img src="'+c+`" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><p>如果运行没有出任何问题的话，那么表示JDK已经配置成功了！</p><h2 id="linux-centos环境下安装配置" tabindex="-1"><a class="header-anchor" href="#linux-centos环境下安装配置" aria-hidden="true">#</a> Linux/Centos环境下安装配置</h2><h3 id="方法一-手动解压jdk的压缩包-然后设置环境变量" tabindex="-1"><a class="header-anchor" href="#方法一-手动解压jdk的压缩包-然后设置环境变量" aria-hidden="true">#</a> 方法一：手动解压JDK的压缩包，然后设置环境变量</h3><h4 id="_1-在-usr-目录下创建java目录" tabindex="-1"><a class="header-anchor" href="#_1-在-usr-目录下创建java目录" aria-hidden="true">#</a> 1.在/usr/目录下创建java目录</h4><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>[root@localhost ~]# mkdir/usr/java
[root@localhost ~]# cd /usr/java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-下载-然后解压" tabindex="-1"><a class="header-anchor" href="#_2-下载-然后解压" aria-hidden="true">#</a> 2.下载，然后解压</h4><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>[root@localhost java]# curl -O http://download.oracle.com/otn-pub/java/jdk/7u79-b15/jdk-7u79-linux-x64.tar.gz 
[root@localhost java]# tar -zxvf jdk-7u79-linux-x64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-设置环境变量" tabindex="-1"><a class="header-anchor" href="#_3-设置环境变量" aria-hidden="true">#</a> 3.设置环境变量</h4><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>[root@localhost java]# vim /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在最后面添加如下内容：</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>#set java environment
export JAVA_HOME=/usr/lib/jvm/java-1.7.0-openjdk-1.7.0.75.x86_64
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让修改生效：</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>[root@localhost java]# source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-验证" tabindex="-1"><a class="header-anchor" href="#_4-验证" aria-hidden="true">#</a> 4.验证</h4><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>[root@localhost java]# java -version
java version &quot;1.7.0_79&quot;
Java(TM) SE Runtime Environment (build 1.7.0_79-b15)
Java HotSpot(TM) 64-Bit Server VM (build 24.79-b02, mixed mode)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法二-用yum安装jdk-centos" tabindex="-1"><a class="header-anchor" href="#方法二-用yum安装jdk-centos" aria-hidden="true">#</a> 方法二：用yum安装JDK(CentOS)</h3><h4 id="_1-查看yum库中都有哪些jdk版本" tabindex="-1"><a class="header-anchor" href="#_1-查看yum库中都有哪些jdk版本" aria-hidden="true">#</a> 1.查看yum库中都有哪些jdk版本</h4><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>[root@localhost ~]# yum search java|grep jdk
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-选择版本-进行安装" tabindex="-1"><a class="header-anchor" href="#_2-选择版本-进行安装" aria-hidden="true">#</a> 2.选择版本，进行安装</h4><p>我们这里安装1.8版本</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>[root@localhost ~]# yum -y install java-1.8.0-openjdk-devel.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完之后，默认的安装目录是在: /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.272.b10-1.el7_9.x86_64</p><h4 id="_3-设置环境变量-1" tabindex="-1"><a class="header-anchor" href="#_3-设置环境变量-1" aria-hidden="true">#</a> 3.设置环境变量</h4><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>[root@localhost java]# vim /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在最后面添加如下内容：</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>#set java environment
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.272.b10-1.el7_9.x86_64（修改为你自己所对应的版本）
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让修改生效：</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>[root@localhost java]# source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-验证-1" tabindex="-1"><a class="header-anchor" href="#_4-验证-1" aria-hidden="true">#</a> 4.验证</h4><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>[root@localhost java]# java -version
java version &quot;1.7.0_79&quot;
Java(TM) SE Runtime Environment (build 1.7.0_79-b15)
Java HotSpot(TM) 64-Bit Server VM (build 24.79-b02, mixed mode)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),p=[m];function b(h,x){return a(),i("div",null,p)}const _=e(u,[["render",b],["__file","Java环境配置.html.vue"]]);export{_ as default};
