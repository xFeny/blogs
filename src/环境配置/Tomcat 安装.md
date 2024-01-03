```sh
docker pull tomcat
```

挂载目录

```sh
mkdir -p /data/docker/tomcat/webapps/ROOT /data/docker/tomcat/logs
```

```sh
touch /data/docker/tomcat/webapps/ROOT/index.html
```

```sh
vim /data/docker/tomcat/webapps/ROOT/index.html
```

```
<h1>Welcome Use Tomcat<h1>
```

启动

```sh
docker run -d --name=tomcat -p 8080:8080 tomcat
```

复制

```sh
docker cp tomcat:/usr/local/tomcat/conf /data/docker/tomcat/
```

删除

```sh
docker stop tomcat
docker rm tomcat
```

启动

```sh
docker run -itd \
--name=tomcat \
--restart=always \
-p 8080:8080 \
-v /data/docker/tomcat/conf:/usr/local/tomcat/conf \
-v /data/docker/tomcat/logs:/usr/local/tomcat/logs \
-v /data/docker/tomcat/webapps:/usr/local/tomcat/webapps \
tomcat
```

