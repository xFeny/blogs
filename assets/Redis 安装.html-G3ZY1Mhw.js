import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as l,c as r,a as s,b as e,d as c,f as t,e as a}from"./app-AWJbACMg.js";const o={},p=a(`<h1 id="redis-安装" tabindex="-1"><a class="header-anchor" href="#redis-安装" aria-hidden="true">#</a> Redis 安装</h1><h2 id="一、安装依赖" tabindex="-1"><a class="header-anchor" href="#一、安装依赖" aria-hidden="true">#</a> 一、安装依赖</h2><p>因为 Redis 是用C语言开发的，所以在安装之前需要确定是否安装gcc环境</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gcc <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有安装可以执行以下命令进行安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> gcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二、下载安装" tabindex="-1"><a class="header-anchor" href="#二、下载安装" aria-hidden="true">#</a> 二、下载安装</h2>`,7),u={href:"http://download.redis.io/releases",target:"_blank",rel:"noopener noreferrer"},v=a(`<p>下载并解压</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://download.redis.io/releases/redis-6.2.6.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> redis-6.2.6.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>切换到redis解压目录下，执行编译</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> redis-6.2.6
<span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>指定安装目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> <span class="token function">install</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr/local/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三、启动-redis" tabindex="-1"><a class="header-anchor" href="#三、启动-redis" aria-hidden="true">#</a> 三、启动 Redis</h2><h3 id="_1、后台方式启动" tabindex="-1"><a class="header-anchor" href="#_1、后台方式启动" aria-hidden="true">#</a> 1、后台方式启动</h3><p>进入到解压的 redis-6.2.6 文件夹中复制 redis.conf 到 redis 的安装目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> ~/redis-6.2.6/redis.conf /usr/local/redis/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入/usr/local/redis/bin修改 redis.conf 文件，把 daemonize no 改为 daemonize yes</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/local/redis/bin/redis.conf

<span class="token comment">#搜索daemonize</span>
/daemonize
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># /usr/local/redis/bin/redis.conf</span>
<span class="token comment"># daemonize no</span>
daemonize <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 /usr/local/redis/bin 路径下后台启动命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./redis-server redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 是否启动成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、开机启动" tabindex="-1"><a class="header-anchor" href="#_2、开机启动" aria-hidden="true">#</a> 2、开机启动</h3><p>编辑 /etc/systemd/system/redis.service 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/systemd/system/redis.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>复制粘贴以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>redis-server
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target
 
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/redis/bin/redis-server /usr/local/redis/bin/redis.conf
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true
 
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ExecStart配置成自己的路径</p></blockquote><p>重新加载系统服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开机自动启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动redis服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建 Redis 命令软链接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/redis/bin/redis-cli /usr/bin/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试 redis</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># redis</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、修改redis密码" tabindex="-1"><a class="header-anchor" href="#_3、修改redis密码" aria-hidden="true">#</a> 3、修改redis密码</h3><p>编辑 /usr/local/redis/bin/redis.conf 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/local/redis/bin/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># /usr/local/redis/bin/redis.conf</span>
<span class="token comment"># requirepass foobared</span>
<span class="token comment"># 去掉前面的注释，将foobared 改为自己的密码</span>
 requirepass <span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启 Redis</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>验证 Redis 密码修改是否成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输入未输入密码</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># redis </span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys <span class="token string">&#39;*&#39;</span>
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> NOAUTH Authentication required.

<span class="token comment"># 输入正确密码</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># redis </span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth <span class="token number">123456</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys <span class="token string">&#39;*&#39;</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;test&quot;</span>

<span class="token comment"># 输入错误密码</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># redis </span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth <span class="token number">11</span>
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> WRONGPASS invalid username-password pair or user is disabled.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、设置端口" tabindex="-1"><a class="header-anchor" href="#_4、设置端口" aria-hidden="true">#</a> 4、设置端口</h3><p>找到port，修改为想要的端口号</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/local/redis/bin/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># /usr/local/redis/bin/redis.conf</span>
<span class="token comment"># 改为自己的想要的端口</span>
port <span class="token number">6379</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、允许远程访问" tabindex="-1"><a class="header-anchor" href="#_5、允许远程访问" aria-hidden="true">#</a> 5、允许远程访问</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/local/redis/bin/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找到 bind 127.0.0.1 -::1，修改为</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># /usr/local/redis/bin/redis.conf</span>
<span class="token comment"># bind 127.0.0.1 -::1</span>
<span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启 Redis</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开放 Redis 端口</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">6379</span>/tcp <span class="token parameter variable">--permanent</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启防火墙</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试客户端连接成功<br><img src="https://feny-blogs.oss-cn-shenzhen.aliyuncs.com/images/202312281328437.png" alt="" loading="lazy"></p><h3 id="_6、服务操作命令" tabindex="-1"><a class="header-anchor" href="#_6、服务操作命令" aria-hidden="true">#</a> 6、服务操作命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#启动redis服务</span>
systemctl start redis
<span class="token comment">#停止redis服务</span>
systemctl stop redis
<span class="token comment">#重新启动服务</span>
systemctl restart redis
<span class="token comment">#查看服务当前状态</span>
systemctl status redis
<span class="token comment">#设置开机自启动</span>
systemctl <span class="token builtin class-name">enable</span> redis
<span class="token comment">#停止开机自启动</span>
systemctl disable redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58);function m(b,h){const n=d("ExternalLinkIcon");return l(),r("div",null,[p,s("p",null,[e("Redis 版本："),s("a",u,[e("http://download.redis.io/releases"),c(n)])]),v,t(" ## 四、Redis 集群部署 ")])}const f=i(o,[["render",m],["__file","Redis 安装.html.vue"]]);export{f as default};
