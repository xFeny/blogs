---
# 是否收藏在博客主题的文章列表中。
# 当填入数字时，数字越大，排名越靠前，类型: boolean | number，默认值: false
# start: true

# 作者
author: Feny
# 写作时间
date: 2024-01-01
# 当前页面图标的 FontClass 或文件路径
icon: git
# 分类
category:
  - 环境配置
  - gitlab

# 标签
tag:
  - git
  - gitlab
---

# Gitlab 安装

## CentOS 下安装

```sh
yum install gitlab-ce
```



## Docker 下安装

拉取镜像

```sh
docker pull gitlab/gitlab-ce:latest
```

中文版镜像

```sh
docker pull twang2218/gitlab-ce-zh:latest
```

创建挂载目录

```sh
mkdir -p /data/docker/gitlab/config /data/docker/gitlab/logs /data/docker/gitlab/data
```

运行

```sh
docker run -itd -p 8443:443 -p 8081:80 -p 8022:22 --name=gitlab \
--restart=always \
-v /data/docker/gitlab/config:/etc/gitlab \
-v /data/docker/gitlab/logs:/var/log/gitlab \
-v /data/docker/gitlab/data:/var/opt/gitlab \
--privileged=true gitlab/gitlab-ce
```



```sh
docker exec -it gitlab /bin/bash
```

配置邮件发送功能

```sh
vim /data/docker/gitlab/config/gitlab.rb
```

在文件的最后加上配置：

```
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "smtp.qq.com"
gitlab_rails['smtp_port'] = 465
gitlab_rails['smtp_user_name'] = "fuck@qq.com"
gitlab_rails['smtp_password'] = "授权码"
gitlab_rails['smtp_domain'] = "smtp.qq.com"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_enable_starttls_auto'] = true
gitlab_rails['smtp_tls'] = true
gitlab_rails['gitlab_email_from'] = 'fuck@qq.com'
```

进入终端

```sh
docker exec -it gitlab /bin/bash
```

刷新配置

```sh
gitlab-ctl reconfigure
```

