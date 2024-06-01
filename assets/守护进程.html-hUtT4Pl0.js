import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e}from"./app-GjMnSfh8.js";const t={},l=e(`<p>1、安装 epel 源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> epel-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、安装 supervisor</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> supervisor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、启动 supervisord 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start supervisord
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、开机自启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> supervisord
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5、查看 supervisord 服务状态。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl status supervisord
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>supervisor守护经常配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>program:demo01<span class="token punctuation">]</span>
directory <span class="token operator">=</span> /usr/app	<span class="token punctuation">;</span> 程序的启动目录
<span class="token builtin class-name">command</span> <span class="token operator">=</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> /usr/app/demo01.jar	<span class="token punctuation">;</span> 启动命令，可以看出与手动在命令行启动的命令是一样的
autostart <span class="token operator">=</span> <span class="token boolean">true</span>	<span class="token punctuation">;</span> 在 supervisord 启动的时候也自动启动
startsecs <span class="token operator">=</span> <span class="token number">30</span>	<span class="token punctuation">;</span> 启动 <span class="token number">30</span> 秒后没有异常退出，就当作已经正常启动了
autorestart <span class="token operator">=</span> <span class="token boolean">true</span>	<span class="token punctuation">;</span> 程序异常退出后自动重启
startretries <span class="token operator">=</span> <span class="token number">3</span>	<span class="token punctuation">;</span> 启动失败自动重试次数，默认是 <span class="token number">3</span>
redirect_stderr <span class="token operator">=</span> <span class="token boolean">true</span>	<span class="token punctuation">;</span> 把 stderr 重定向到 stdout，默认 <span class="token boolean">false</span>
stdout_logfile_maxbytes <span class="token operator">=</span> 20MB	<span class="token punctuation">;</span> stdout 日志文件大小，默认 50MB
stdout_logfile_backups <span class="token operator">=</span> <span class="token number">20</span>		<span class="token punctuation">;</span> stdout 日志文件备份数
<span class="token punctuation">;</span> stdout 日志文件，需要注意当指定目录不存在时无法正常启动，所以需要手动创建目录（supervisord 会自动创建日志文件）

stdout_logfile <span class="token operator">=</span> /usr/app/demo01.log	<span class="token punctuation">;</span> 应用日志目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>supervisor常用命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看管理进程状态</span>
supervisorctl status
<span class="token comment"># 停止指定进程，如果是all则是操作全部管理的进程</span>
supervisorctl stop <span class="token punctuation">[</span>进程名称<span class="token punctuation">]</span>
<span class="token comment"># 启动指定进程，如果是all则是操作全部管理的进程</span>
supervisorctl start <span class="token punctuation">[</span>进程名称<span class="token punctuation">]</span>
<span class="token comment"># 重启指定进程，如果是all则是操作全部管理的进程</span>
supervisorctl restart <span class="token punctuation">[</span>进程名称<span class="token punctuation">]</span>
<span class="token comment"># 配置文件修改后使用该命令加载新的配置</span>
supervisorctl update
<span class="token comment"># 重新启动配置中的所有程序</span>
supervisorctl reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),i=[l];function p(o,r){return n(),a("div",null,i)}const u=s(t,[["render",p],["__file","守护进程.html.vue"]]);export{u as default};
