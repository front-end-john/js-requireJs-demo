# learn to use requireJs
```
AMD （Asynchronous Module Definition）异步或动态加载

前端模块规范有三种：CommonJs,AMD和CMD。
CommonJs用在服务器端，AMD和CMD用在浏览器环境
AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。
AMD:提前执行（异步加载：依赖先执行）+延迟执行
CMD:延迟执行（运行到需加载，根据顺序执行）
```

# example
```
http://www.ruanyifeng.com/blog/2012/11/require_js.html
http://javascript.ruanyifeng.com/tool/requirejs.html
```
# config nginx
```
vim /usr/local/etc/nginx/nginx.conf // 编辑

1.启动       
1.1进入安装路径   cd /usr/local/Cellar/nginx/1.15.11/bin   
1.2启动 sudo ./nginx      
1.3重启 ./nginx -s reload       
1.4 判断配置文件是否正确 sudo ./nginx -t  
 显示下面内容代表配置正确
 nginx: the configuration file /usr/local/etc/nginx/nginx.conf syntax is ok
 nginx: configuration file /usr/local/etc/nginx/nginx.conf test is successful    
1.5 nginx停止  首先查询nginx主进程号  
    ps -ef|grep nginx                    正常停止   
    sudo kill -QUIT 主进程号   快速停止   
    sudo kill -TERM 主进程号
```
