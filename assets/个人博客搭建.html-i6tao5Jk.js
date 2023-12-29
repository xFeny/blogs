import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as i,c,b as n,d as s,e,a as t}from"./app-nZn_qjwv.js";const l={},u=t(`<h1 id="基于-vuepress-theme-hope-搭建个人博客" tabindex="-1"><a class="header-anchor" href="#基于-vuepress-theme-hope-搭建个人博客" aria-hidden="true">#</a> 基于 vuepress-theme-hope 搭建个人博客</h1><h2 id="一、创建项目模板" tabindex="-1"><a class="header-anchor" href="#一、创建项目模板" aria-hidden="true">#</a> 一、创建项目模板</h2><p>使用文件管理器打开对应文件夹，然后在上方的地址栏中输入 <code>cmd</code> 并按下回车。</p><img src="http://oss.feny.ink/images/202312291251097.png" alt="image-20231229125148053" style="zoom:80%;"><p>在终端中执行下列命令:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init vuepress-theme-hope my-docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里的 <code>my-docs</code> 是一个参数，代表 VuePress Theme Hope 项目的文件夹名称。</p><p>执行完命令后根据提示，通过键盘 <code>↓</code> 选择 <code>简体中文</code> 并回车来按需选择：</p><img src="http://oss.feny.ink/images/202312291302153.png" alt="image-20231229130212097" style="zoom:80%;"><h3 id="项目命令" tabindex="-1"><a class="header-anchor" href="#项目命令" aria-hidden="true">#</a> 项目命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动开发服务器</span>
<span class="token function">npm</span> docs:dev
<span class="token comment"># 构建项目并输出</span>
<span class="token function">npm</span> docs:build
<span class="token comment"># 清除缓存并启动开发服务器</span>
<span class="token function">npm</span> docs:clean-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),r={href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"},d=t(`<figure><img src="http://oss.feny.ink/images/202312291306333.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── .github (可选的) → GitHub 配置文件存放路径
│    └── workflow → GitHub 工作流配置
│         └── docs-deploy.yml → 自动部署文档的工作流
│
├── src → 文档文件夹
│    │
│    ├── .vuepress (可选的) → VuePress 配置文件夹
│    │    │
│    │    ├── dist (默认的) → 构建输出目录
│    │    │
│    │    ├── public (可选的) → 静态资源目录
│    │    │
│    │    ├── styles (可选的) → 用于存放样式相关的文件
│    │    │
│    │    ├── config.{js,ts} (可选的) → 配置文件的入口文件
│    │    │
│    │    └── client.{js,ts} (可选的) → 客户端文件
│    │
│    ├── ... → 其他项目文档
│    │
│    └── README.md → 项目主页
│
└── package.json → Nodejs 配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、配置项目" tabindex="-1"><a class="header-anchor" href="#二、配置项目" aria-hidden="true">#</a> 二、配置项目</h2><h3 id="_1、修改端口" tabindex="-1"><a class="header-anchor" href="#_1、修改端口" aria-hidden="true">#</a> 1、修改端口</h3><p>项目默认启动端口为<code>8080</code>，如果想要修改为其他端口，在<code>.vuepress/config.ts</code>增加<code>port</code>即可：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  port<span class="token operator">:</span> <span class="token number">8099</span><span class="token punctuation">,</span> <span class="token comment">//端口号</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新启动项目：</p><figure><img src="http://oss.feny.ink/images/202312291358101.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2、首页图片全屏设置" tabindex="-1"><a class="header-anchor" href="#_2、首页图片全屏设置" aria-hidden="true">#</a> 2、首页图片全屏设置</h3><p>如果不想首页图片全屏,，打开<code>README.md</code>找到heroFullScreen修改为fasle</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>heroFullScreen: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果：</p><figure><img src="http://oss.feny.ink/images/202312291325811.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3、首页项目设置" tabindex="-1"><a class="header-anchor" href="#_3、首页项目设置" aria-hidden="true">#</a> 3、首页项目设置</h3><p>初始化是会默认生成以下内容，如果要修改为自己的项目要怎么修改呢。</p><img src="http://oss.feny.ink/images/202312291327029.png" style="zoom:50%;"><p>打开<code>README.md</code>，找到<code>projects</code>，编辑成你要的内容即可。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>projects:
  <span class="token list punctuation">-</span> icon: project
    name: 项目名称
    desc: 项目详细描述
    link: https://你的项目链接

  <span class="token list punctuation">-</span> icon: link
    name: 链接名称
    desc: 链接详细描述
    link: https://链接地址

  <span class="token list punctuation">-</span> icon: book
    name: 书籍名称
    desc: 书籍详细描述
    link: https://你的书籍链接

  <span class="token list punctuation">-</span> icon: article
    name: 文章名称
    desc: 文章详细描述
    link: https://你的文章链接

  <span class="token list punctuation">-</span> icon: friend
    name: 伙伴名称
    desc: 伙伴详细介绍
    link: https://你的伙伴链接

  <span class="token list punctuation">-</span> icon: /logo.svg
    name: 自定义项目
    desc: 自定义详细介绍
    link: https://你的自定义链接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不想显示，直接把<code>projects</code>的内容全部删除即可，效果如图：</p><img src="http://oss.feny.ink/images/202312291331487.png" alt="image-20231229133154957" style="zoom:33%;"><h2 id="三、主题色" tabindex="-1"><a class="header-anchor" href="#三、主题色" aria-hidden="true">#</a> 三、主题色</h2><h3 id="_1、设置默认主题色" tabindex="-1"><a class="header-anchor" href="#_1、设置默认主题色" aria-hidden="true">#</a> 1、设置默认主题色</h3><p>你应该在 <code>.vuepress/styles/palette.scss</code> 中通过 <code>$theme-color</code> 设置站点的默认主题颜色：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改前连接颜色：</p><img src="http://oss.feny.ink/images/202312291336474.png" alt="image-20231229133624419" style="zoom:50%;"><p>修改后连接颜色：</p><img src="http://oss.feny.ink/images/202312291337589.png" alt="image-20231229133730548" style="zoom:50%;"><h3 id="_2、主题色选择器" tabindex="-1"><a class="header-anchor" href="#_2、主题色选择器" aria-hidden="true">#</a> 2、主题色选择器</h3><p>如果想过多个主题色切换选择，在 <code>.vuepress/styles/config.scss</code> 中通过 <code>$theme-colors</code> 设置一系列你想要启用的其他主题色：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-colors</span></span><span class="token punctuation">:</span> #2196f3<span class="token punctuation">,</span> #f26d6d<span class="token punctuation">,</span> #3eaf7c<span class="token punctuation">,</span> #fb9b5f<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在右上角可以切换主题色：</p><img src="http://oss.feny.ink/images/202312291340093.png" alt="image-20231229134018038" style="zoom:50%;"><h2 id="四、搜索功能" tabindex="-1"><a class="header-anchor" href="#四、搜索功能" aria-hidden="true">#</a> 四、搜索功能</h2>`,35),k={href:"https://plugin-search-pro.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"vuepress-plugin-search-pro",-1),m={href:"https://vuejs.press/zh/reference/plugin/docsearch.html",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"@vuepress/plugin-docsearch",-1),h={href:"https://vuejs.press/zh/reference/plugin/search.html",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"@vuepress/plugin-search",-1),q=t(`<h3 id="使用-vuepress-plugin-search-pro" tabindex="-1"><a class="header-anchor" href="#使用-vuepress-plugin-search-pro" aria-hidden="true">#</a> 使用 <code>vuepress-plugin-search-pro</code></h3><p>1、安装 <code>vuepress-plugin-search-pro</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> vuepress-plugin-search-pro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、从 <code>vuepress-plugin-search-pro</code> 导入 <code>searchProPlugin</code> 并将其应用至 <code>config.{ts,js}</code> 下的 <code>plugins</code> 选项.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> searchProPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchProPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 索引全部内容</span>
      indexContent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 为分类和标签添加索引</span>
      customFields<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>category <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
          formatter<span class="token operator">:</span> <span class="token string">&quot;分类：$content&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>tag <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
          formatter<span class="token operator">:</span> <span class="token string">&quot;标签：$content&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><img src="http://oss.feny.ink/images/202312291412293.png" style="zoom:50%;">`,7),f={class:"hint-container info"},y=n("p",{class:"hint-container-title"},"更多",-1),_={href:"https://plugin-search-pro.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},x=t(`<h3 id="使用-vuepress-plugin-search" tabindex="-1"><a class="header-anchor" href="#使用-vuepress-plugin-search" aria-hidden="true">#</a> 使用 <code>@vuepress/plugin-search</code></h3><p>安装 <code>@vuepress/plugin-search</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-search@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从 <code>@vuepress/plugin-search</code> 导入 <code>searchPlugin</code> 并将其应用至 <code>config.{ts,js}</code> 下的 <code>plugins</code> 选项.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> searchPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/plugin-search&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 你的选项</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><img src="http://oss.feny.ink/images/202312291408028.png" style="zoom:50%;">`,7),w={class:"hint-container info"},z=n("p",{class:"hint-container-title"},"更多",-1),j={href:"https://vuejs.press/zh/reference/plugin/search.html",target:"_blank",rel:"noopener noreferrer"},E=t(`<h2 id="五、导航栏" tabindex="-1"><a class="header-anchor" href="#五、导航栏" aria-hidden="true">#</a> 五、导航栏</h2><h3 id="_1、导航栏链接" tabindex="-1"><a class="header-anchor" href="#_1、导航栏链接" aria-hidden="true">#</a> 1、导航栏链接</h3><p>在开始之前你需要明确，你的导航栏需求是啥样的。</p><p>导航栏的相关设置在 <code>.vuepress/navbar.ts</code>文件中。</p><p>默认为字符串，对应 <code>src </code>目录下的文件路径，你可以省略<code> .md</code>扩展名，以 / 结尾的路径会被推断为<code> /README.md</code>。</p><p>例如：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> navbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">navbar</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 对应首页，即src/README.md</span>
  <span class="token string">&#39;/react/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 对应src/react/README.md</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以是对象，基本格式如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> navbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">navbar</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;博文&quot;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;pen-to-square&quot;</span><span class="token punctuation">,</span>
    prefix<span class="token operator">:</span> <span class="token string">&quot;/posts/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 对应 src/posts 目录</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&quot;苹果&quot;</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">&quot;pen-to-square&quot;</span><span class="token punctuation">,</span>
        prefix<span class="token operator">:</span> <span class="token string">&quot;apple/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 对应 src/posts/apple 目录</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&quot;苹果1&quot;</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">&quot;pen-to-square&quot;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&quot;苹果2&quot;</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">&quot;pen-to-square&quot;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&quot;2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string">&quot;tomato&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;strawberry&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;V2 文档&quot;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;book&quot;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&quot;https://theme-hope.vuejs.press/zh/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// link代码外链地址</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如我要修改成这样效果的导航栏：</p><img src="http://oss.feny.ink/images/202312291425943.png" style="zoom:50%;"><p>具体配置如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/navbar.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> navbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">navbar</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;快速上手&quot;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&quot;/get-started/&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;指南&quot;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&quot;/guide/&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;配置&quot;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&quot;/config/&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;常见问题&quot;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&quot;/faq/&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;案例&quot;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&quot;/demo/&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;项目&quot;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&quot;教程&quot;</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&quot;Markdown 介绍&quot;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&quot;/Markdown 介绍&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&quot;Vuepress&quot;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&quot;/Vuepress&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">&quot;项目&quot;</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&quot;变更日志&quot;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&quot;/变更日志&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&quot;迁移指南&quot;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&quot;/迁移指南&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、禁用导航栏" tabindex="-1"><a class="header-anchor" href="#_2、禁用导航栏" aria-hidden="true">#</a> 2、禁用导航栏</h3><p>你可以在主题选项中设置 <code>navbar: false</code> 来禁用所有页面的导航栏：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    navbar<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如你不想某个Markdown页面显示导航栏，你也可以通过 <code>YAML front matter</code> 来禁用某个指定页面的导航栏：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">navbar</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),M={class:"hint-container info"},P=n("p",{class:"hint-container-title"},"更多",-1),V={href:"https://theme-hope.vuejs.press/zh/guide/layout/navbar.html",target:"_blank",rel:"noopener noreferrer"},C=t(`<h2 id="六、侧边栏" tabindex="-1"><a class="header-anchor" href="#六、侧边栏" aria-hidden="true">#</a> 六、侧边栏</h2><h4 id="_1、全局侧边栏配置" tabindex="-1"><a class="header-anchor" href="#_1、全局侧边栏配置" aria-hidden="true">#</a> 1、全局侧边栏配置</h4><p>你可以设置侧边栏导航和导航栏的路由一一对应，这样就相当于是全局的侧边栏.。</p><p>对于侧边栏的具体条目，可以通过设置<code>children: &quot;structure&quot;</code>根据当前目录下的文件名称自动生成。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/sidebar.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> sidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">sidebar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;快速上手&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;get-started/&quot;</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;指南&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;guide/&quot;</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;配置&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;config/&quot;</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;常见问题&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;faq/&quot;</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;案例&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;demo/&quot;</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;项目&quot;</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          text<span class="token operator">:</span> <span class="token string">&quot;教程&quot;</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&quot;Markdown 介绍&quot;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&quot;Markdown 介绍&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&quot;Vuepress&quot;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&quot;Vuepress&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          text<span class="token operator">:</span> <span class="token string">&quot;项目&quot;</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&quot;变更日志&quot;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&quot;变更日志.md&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&quot;迁移指南&quot;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&quot;迁移指南.md&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有另外一种方法就是把<code>theme.ts</code>中的<code>sidebar</code>注释掉，vuepress-theme-hope 会自动根据文件夹生成默认的全局侧边栏配置。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/theme.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 注释掉，会自动生成全局侧边栏配置</span>
  <span class="token comment">// sidebar</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、分离式侧边栏" tabindex="-1"><a class="header-anchor" href="#_2、分离式侧边栏" aria-hidden="true">#</a> 2、分离式侧边栏</h4><p>分离式菜单配置更简洁，如下所示：当设置<code>structure</code>时，默认根据目录下的文件自动生成侧边栏。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">sidebar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;/get-started/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/guide/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/config/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/faq/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/demo/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),D={class:"hint-container info"},A=n("p",{class:"hint-container-title"},"更多",-1),U={href:"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html",target:"_blank",rel:"noopener noreferrer"},R=n("h2",{id:"七、自动部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#七、自动部署","aria-hidden":"true"},"#"),s(" 七、自动部署")],-1),$={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},N=n("img",{src:"http://oss.feny.ink/images/202312291533090.png",alt:"image-20231229153338022",style:{zoom:"50%"}},null,-1),T=n("p",null,[s("仓库名填写自己喜欢的，点击"),n("code",null,"Create repository"),s("。")],-1);function H(B,F){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,n("p",null,[s("启动项目，浏览器输入 "),n("a",r,[s("http://localhost:8080/"),e(a)]),s(" 查看效果")]),d,n("p",null,[s("vuepress-theme-hope对 "),n("a",k,[v,e(a)]),s("、 "),n("a",m,[b,s("open in new window"),e(a)]),s(" 和 "),n("a",h,[g,s("open in new window"),e(a)]),s(" 提供了内置支持。只需要添加并配置所需的搜索插件，就能够在导航栏获得一个搜索框。")]),q,n("div",f,[y,n("p",null,[s("关于搜索插件的可用选项，详见 "),n("a",_,[s("插件文档"),e(a)]),s("。")])]),x,n("div",w,[z,n("p",null,[s("关于搜索插件的可用选项，详见 "),n("a",j,[s("插件文档"),e(a)]),s("。")])]),E,n("div",M,[P,n("p",null,[s("关于导航栏的介绍，详见"),n("a",V,[s("导航栏文档"),e(a)])])]),C,n("div",D,[A,n("p",null,[s("关于侧边栏的介绍，详见"),n("a",U,[s("侧边栏文档"),e(a)])])]),R,n("p",null,[s("首先登录 "),n("a",$,[s("GitHub"),e(a)]),s(" 创建一个空的仓库。")]),N,T])}const S=p(l,[["render",H],["__file","个人博客搭建.html.vue"]]);export{S as default};
