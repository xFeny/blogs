import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e}from"./app-lf4bxT9k.js";const t={},i=e(`<h1 id="utools插件内网穿透使用教程" tabindex="-1"><a class="header-anchor" href="#utools插件内网穿透使用教程" aria-hidden="true">#</a> utools插件内网穿透使用教程</h1><p>原文教程：https://www.yuque.com/xinu/notes/mzagfszkmy1gecaf?singleDoc</p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><h4 id="准备服务器域名" tabindex="-1"><a class="header-anchor" href="#准备服务器域名" aria-hidden="true">#</a> 准备服务器域名</h4><ol><li>一台公网服务器，有公网ip，能通过ssh登录</li><li>准备一个已备案的域名</li></ol><h4 id="设置服务器、安全组" tabindex="-1"><a class="header-anchor" href="#设置服务器、安全组" aria-hidden="true">#</a> 设置服务器、安全组</h4><ol><li>直连模式下开放6080、6443、8088三个端口</li><li>nginx部署模式下 开放 80、443、8088三个端口</li><li>如果代理tcp、udp服务，则额外开放tcp、udp用到的端口</li><li>还要开启ssh用到的22端口</li></ol><h4 id="解析域名" tabindex="-1"><a class="header-anchor" href="#解析域名" aria-hidden="true">#</a> 解析域名</h4><p>推荐用三级域名做内网穿透映射使用。 这里使用ipx前缀，最终的解析路径如下图</p><img src="http://oss.feny.ink/blogs/images/202407151220181.png" alt="image-20240715122014007" style="zoom:80%;"><h4 id="验证解析结果" tabindex="-1"><a class="header-anchor" href="#验证解析结果" aria-hidden="true">#</a> 验证解析结果</h4><img src="http://oss.feny.ink/blogs/images/202407151222855.png" alt="image-20240715122257820" style="zoom:67%;"><p>域名 *.ipx.feny.ink 解析到了 47.107.39.165</p><h4 id="下载服务端" tabindex="-1"><a class="header-anchor" href="#下载服务端" aria-hidden="true">#</a> 下载服务端</h4><p>下载地址: https://github.com/imxiny/easyipx</p><p>根据自身需求，选择下载v4还是v3</p><h4 id="准备配置文件" tabindex="-1"><a class="header-anchor" href="#准备配置文件" aria-hidden="true">#</a> 准备配置文件</h4><p>下载对应版本的<code>conf.json</code>文件</p><p>配置文件内容解释如下，使用的时候请删除注释。下面四种部署方式全部使用此配置文件</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;addr&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 无需修改</span>
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">18088</span><span class="token punctuation">,</span> <span class="token comment">// 通道使用的端口，按需修改</span>
  <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dev_test&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 签名使用的token 不要泄露出去</span>
  <span class="token property">&quot;tunnel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;tls&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否开启通道加密。如果设置为true 则下面的两个文件必须配置</span>
    <span class="token property">&quot;pem_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cert.pem&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 与程序本体的相对路径或绝对路径皆可</span>
    <span class="token property">&quot;key_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;key.pem&quot;</span> <span class="token comment">// 与程序本体的相对路径或绝对路径皆可</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;http&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// http服务的配置</span>
    <span class="token property">&quot;http_port&quot;</span><span class="token operator">:</span> <span class="token number">16080</span><span class="token punctuation">,</span> <span class="token comment">// http端口，按需修改</span>
    <span class="token property">&quot;https_port&quot;</span><span class="token operator">:</span> <span class="token number">6443</span><span class="token punctuation">,</span> <span class="token comment">// https端口，按需修改</span>
    <span class="token comment">// 请注意，如果是nginx转发的，这里的证书不需要配置，证书配置在nginx上</span>
    <span class="token property">&quot;pem_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// https需要的证书, 如果未配置，则https端口不会开通</span>
    <span class="token property">&quot;key_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// https需要的证书，如果未配置，则https端口不会开通</span>
    <span class="token property">&quot;heartbeat&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// 无需修改</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tcp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;buffer_cache&quot;</span><span class="token operator">:</span> <span class="token number">32768</span><span class="token punctuation">,</span> <span class="token comment">// 无需修改</span>
    <span class="token property">&quot;port_range&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8900-8950&quot;</span> <span class="token comment">// 按需修改 按上面开放的端口，所以我们这里设置为 8900-8950</span>
    <span class="token comment">// 这里的端口范围只是为了方便客户端设置端口，不会全部占用，用到哪个开哪个</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;udp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;keep_time&quot;</span><span class="token operator">:</span> <span class="token number">7200</span><span class="token punctuation">,</span> <span class="token comment">// 无需修改</span>
    <span class="token property">&quot;health_check&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token comment">// 无需修改</span>
    <span class="token property">&quot;buffer_cache&quot;</span><span class="token operator">:</span> <span class="token number">32768</span><span class="token punctuation">,</span> <span class="token comment">// 无需修改</span>
    <span class="token property">&quot;port_range&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8951-9000&quot;</span> <span class="token comment">// 按需修改 按上面开放的端口，所以我们这里设置为 8951-9000</span>
    <span class="token comment">// 这里的端口范围只是为了方便客户端设置端口，不会全部占用，用到哪个开哪个</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="准本工作总结" tabindex="-1"><a class="header-anchor" href="#准本工作总结" aria-hidden="true">#</a> 准本工作总结</h3><p>至此，前期准备工作全部完成，我们有了四个文件，分别是</p><ol><li>easyipx-linux-amd64-4.0.2 服务端程序本体</li><li>conf.json 服务端版本对应的配置文件</li><li>key.pem，cert.pem 自签证书。</li></ol><p>有了一台端口放开的服务器 47.107.39.165</p><p>一个已经解析好的泛域名 *.ipx.feny.ink</p><h3 id="开启通道加密【可选】" tabindex="-1"><a class="header-anchor" href="#开启通道加密【可选】" aria-hidden="true">#</a> 开启通道加密【可选】</h3><p><code>conf.json</code>配置通道加密</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;tunnel&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;tls&quot;</span><span class="token builtin class-name">:</span> true, // 是否开启通道加密。如果设置为true 则下面的两个文件必须配置
    <span class="token string">&quot;pem_file&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/data/easyipx/cert.pem&quot;</span>, // 与程序本体的相对路径或绝对路径皆可
    <span class="token string">&quot;key_file&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/data/easyipx/key.pem&quot;</span> // 与程序本体的相对路径或绝对路径皆可
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在设置中心生成证书</p><img src="http://oss.feny.ink/blogs/images/202407151340400.png" alt="image-20240715134053352" style="zoom:80%;"><h3 id="直连模式部署" tabindex="-1"><a class="header-anchor" href="#直连模式部署" aria-hidden="true">#</a> 直连模式部署</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建目录 /data/easyipx</span>
<span class="token function">mkdir</span> /data/easyipx
<span class="token comment"># 将服务端软件、配置文件上传至目录 /data/easyipx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上传<code>easyipx-linux-amd64-4.0.2</code>、<code>config.json</code>，并修改<code>easyipx-linux-amd64-4.0.2</code> 名称为<code>easyipx</code></p><p>如果开启了通道加密要把证书文件<code>key.pem</code>、<code>cert.pem</code>一并上传</p><figure><img src="http://oss.feny.ink/blogs/images/202407151347414.png" alt="image-20240715122741152" tabindex="0" loading="lazy"><figcaption>image-20240715122741152</figcaption></figure><p>添加执行权限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置文件已准备好</span>
<span class="token comment"># 为程序添加执行权限</span>
<span class="token builtin class-name">cd</span> /data/easyipx
<span class="token function">chmod</span> +x easyipx

<span class="token comment"># 启动程序 🚀🚀🚀🚀</span>
<span class="token comment"># -c 指定配置文件路径，不写的话默认值为当前目录下的conf.json</span>
./easyipx <span class="token parameter variable">-c</span> conf.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动成功后 如下图所示</p><img src="http://oss.feny.ink/blogs/images/202407151229373.png" alt="image-20240715122917337" style="zoom:80%;"><p>上述启动方式适用于调试阶段，如果成功启动以后，可以使用以下命令，将程序后台运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> ./easyipx <span class="token parameter variable">-c</span> conf.json <span class="token operator">&gt;</span> runtime.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>error.log <span class="token operator">&amp;</span>

<span class="token comment"># 如果不想看运行日志，可以使用如下操作</span>
<span class="token function">nohup</span> ./easyipx <span class="token parameter variable">-c</span> conf.json <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="封装成系统服务" tabindex="-1"><a class="header-anchor" href="#封装成系统服务" aria-hidden="true">#</a> 封装成系统服务</h3><ol><li><p>创建文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建文件</span>
<span class="token function">touch</span> /usr/lib/systemd/system/easyipx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/lib/systemd/system/easyipx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>内容如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>easyipx daemon
<span class="token assign-left variable">After</span><span class="token operator">=</span>syslog.target network.target
<span class="token assign-left variable">Wants</span><span class="token operator">=</span>network.target
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/data/easyipx/easyipx <span class="token parameter variable">-c</span> /data/easyipx/conf.json
<span class="token assign-left variable">Restart</span><span class="token operator">=</span> always
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span>1min
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重载配置、启动服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重载配置</span>
systemctl daemon-reload
<span class="token comment"># 开机自启</span>
systemctl <span class="token builtin class-name">enable</span> easyipx.service
<span class="token comment"># 启动服务</span>
systemctl start easyipx.service
<span class="token comment"># 停止服务</span>
systemctl stop easyipx.service
<span class="token comment"># 重启服务</span>
systemctl restart easyipx.service

<span class="token comment"># 查看运行状态</span>
systemctl status easyipx.service
<span class="token comment"># 查看日志</span>
journalctl <span class="token parameter variable">-u</span> easyipx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="插件添加主机" tabindex="-1"><a class="header-anchor" href="#插件添加主机" aria-hidden="true">#</a> 插件添加主机</h4><blockquote><p>主机地址：<code>47.107.39.165</code>为公网IP地址，<code>18088</code>端口为<code>conf.json</code>配置的通道地址</p><p>http端口：<code>16080</code>为<code>conf.json</code>配置的http端口</p></blockquote><img src="http://oss.feny.ink/blogs/images/202407151231572.png" alt="image-20240715123154519" style="zoom:80%;"><p>如果开启在<code>conf,json</code>开启通道加密，添加主机时要开启传输加密按钮，并上传证书</p><img src="http://oss.feny.ink/blogs/images/202407151406019.png" alt="image-20240715140644964" style="zoom:67%;"><p>添加成功后 如下图所示</p><img src="http://oss.feny.ink/blogs/images/202407151233761.png" alt="image-20240715123345715" style="zoom:80%;"><p>直连方式部署完成。</p><h3 id="nginx代理部署" tabindex="-1"><a class="header-anchor" href="#nginx代理部署" aria-hidden="true">#</a> Nginx代理部署</h3><h4 id="创建反向代理" tabindex="-1"><a class="header-anchor" href="#创建反向代理" aria-hidden="true">#</a> 创建反向代理</h4><p>在<code>Nginx</code>中添加转发到<code>easyipx</code>的配置</p><div class="language-b line-numbers-mode" data-ext="b"><pre class="language-b"><code>server {
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
		proxy_set_header Connection &quot;upgrade&quot;;
		proxy_read_timeout 7200;
	}


	location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf)$
	{
	   expires      30d;
	   error_log /dev/null;
	   access_log /dev/null;
	}

	location ~ .*\\.(js|css)?$
	{
	   expires      12h;
	   error_log /dev/null;
	   access_log /dev/null; 
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启<code>Nginx</code></p><h4 id="插件添加主机-1" tabindex="-1"><a class="header-anchor" href="#插件添加主机-1" aria-hidden="true">#</a> 插件添加主机</h4><img src="http://oss.feny.ink/blogs/images/202407151416223.png" alt="image-20240715141640163" style="zoom:80%;"><h3 id="添加隧道" tabindex="-1"><a class="header-anchor" href="#添加隧道" aria-hidden="true">#</a> 添加隧道</h3><p>启动本地要内网穿透的服务，如<code>IntelliJ IDEA</code>启动一个<code>SpringBoot</code>服务，请求地址为<code>http://192.168.0.177:10010</code></p><img src="http://oss.feny.ink/blogs/images/202407151330773.png" alt="image-20240715133050716" style="zoom:80%;"><h4 id="启动隧道" tabindex="-1"><a class="header-anchor" href="#启动隧道" aria-hidden="true">#</a> 启动隧道</h4><p>隧道添加完成后，启动隧道</p><img src="http://oss.feny.ink/blogs/images/202407151336825.png" alt="image-20240715133638775" style="zoom:80%;"><img src="http://oss.feny.ink/blogs/images/202407151412543.png" alt="image-20240715141207498" style="zoom:67%;"><p>启动完成后即可外网访问内网的服务地址，外网访问地址为：</p><ol><li>如果为直连模式：http://test.ipx.feny.ink:16080</li><li>nginx代理模式：http://test.ipx.feny.ink</li></ol>`,67),o=[i];function p(l,c){return n(),a("div",null,o)}const u=s(t,[["render",p],["__file","utools插件内网穿透使用教程.html.vue"]]);export{u as default};
