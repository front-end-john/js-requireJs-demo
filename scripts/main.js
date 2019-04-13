require.config({
    baseUrl: "./scripts",
    paths: {
        "jquery": "lib/jquery-3.4.0.min",
        "header": "js/header",
        "content": "js/content",
        "footer": "js/footer"
    },
    shim: {
        jquery: {
            init: function() {
                return jQuery.noConflict(true);
            }
        }
    }
});
// 使用 jquery, 按不同先后的依赖关系加载各个文件
require(["jquery", "header"], function($, header) {
    console.log('header:', header);
    $(function(){
        console.log("load finished");
        require(["content"]);
        require(["footer"], function (a) {
            console.log('a:', a);
        });
    });
});