import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c as i,a as s,b as n,d as r,e as a}from"./app-3HwIjC1l.js";const p={},c=a(`<h1 id="联通vn007-修改超级管理员密码" tabindex="-1"><a class="header-anchor" href="#联通vn007-修改超级管理员密码" aria-hidden="true">#</a> 联通VN007+修改超级管理员密码</h1><p>通过 admin 用户登录设备，按 F12 打开浏览器调试模式，复制 sessionId 并记录下来，如下图：</p><img src="http://oss.feny.ink/blogs/images/202407301448504.png" alt="image-20240730144837438" style="zoom:50%;"><p>打开Http调试工具，如<strong>Postman</strong>、<strong>Apipost</strong>、<strong>Apifox</strong>，填写信息，发送请求</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>请求地址：http://192.168.0.1/cgi-bin/http.cgi
提交数据:{&quot;adbSwitch&quot;:&quot;1&quot;,&quot;cmd&quot;:237,&quot;method&quot;:&quot;POST&quot;,&quot;language&quot;:&quot;CN&quot;,&quot;sessionId&quot;:&quot;修改成你自己sessionId&quot;}
返回 {&quot;success&quot;:true,&quot;cmd&quot;:237,&quot;message&quot;:&quot;&quot;} 代表开启成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图所示</p><img src="http://oss.feny.ink/blogs/images/202407301456816.png" alt="image-20240730145641740" style="zoom:80%;"><p>开启成功后，登录<strong>adb</strong>修改<strong>superadmin</strong>密码</p>`,8),d=s("strong",null,"adb下载地址：",-1),m={href:"https://adbdownload.com/",target:"_blank",rel:"noopener noreferrer"},u=a(`<img src="http://oss.feny.ink/blogs/images/202407301507034.png" alt="image-20240730150712982" style="zoom:67%;"><p><strong>cmd</strong>进入命令控制，通过如下命令设置superadmin用户密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>adb connect <span class="token number">192.168</span>.0.1:5555
adb shell
<span class="token comment"># 系统最好降级到1.10.17版本</span>
mdlcfg <span class="token parameter variable">-f</span> <span class="token assign-left variable">SYS_WEB_SUPER_PWD_RULE</span><span class="token operator">=</span><span class="token string">&quot;1&quot;</span>
mdlcfg <span class="token parameter variable">-a</span> <span class="token assign-left variable">SYS_WEB_SUPER_PWD_RULE</span><span class="token operator">=</span><span class="token string">&quot;1&quot;</span>
<span class="token comment"># 修改用户名，默认用户名：Gztz@83583#</span>
mdlcfg <span class="token parameter variable">-f</span> <span class="token assign-left variable">SYS_SUPER_LOGIN_NAME</span><span class="token operator">=</span><span class="token string">&quot;superadmin&quot;</span>
mdlcfg <span class="token parameter variable">-a</span> <span class="token assign-left variable">SYS_SUPER_LOGIN_NAME</span><span class="token operator">=</span><span class="token string">&quot;superadmin&quot;</span>
<span class="token comment"># 设置密码</span>
mdlcfg <span class="token parameter variable">-f</span> <span class="token assign-left variable">SYS_SUPER_LOGIN_PWD</span><span class="token operator">=</span><span class="token string">&quot;你要设置的密码&quot;</span>
mdlcfg <span class="token parameter variable">-a</span> <span class="token assign-left variable">SYS_SUPER_LOGIN_PWD</span><span class="token operator">=</span><span class="token string">&quot;你要设置的密码&quot;</span>
mdlcfg <span class="token parameter variable">-c</span>

<span class="token comment"># 查询root账号密码（重启系统后才会看到变化）</span>
<span class="token function">cat</span> /tmp/mdlcfg.sysconfig <span class="token operator">|</span> <span class="token function">grep</span> SYS_SUPER_LOGIN_
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="http://oss.feny.ink/blogs/images/202407301511893.png" alt="image-20240730151130845" style="zoom:67%;"><p>到这里你就可以通过<strong>superadmin</strong>用户登录了！</p><blockquote><p>**注意：**如果升级固件到1.15以上，修改的超级管理员密码将无效</p></blockquote>`,6);function g(v,_){const e=o("ExternalLinkIcon");return l(),i("div",null,[c,s("p",null,[d,s("a",m,[n("https://adbdownload.com/"),r(e)]),n("，下载完成后解压，进入解压目录")]),u])}const q=t(p,[["render",g],["__file","联通VN007_修改超级密码.html.vue"]]);export{q as default};
