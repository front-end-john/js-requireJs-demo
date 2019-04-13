define(['jquery', 'header'], function($, h) {
    $('#header').text('header');
    var moduleObj = {
        name: 'header',
        version: '0.0.1'
    };
    var setData = function (id, text) {
        console.log("id:", id);
        console.log("text:", text);
        $(id).text(text);
    };
    moduleObj.setData = setData;
    return moduleObj;
});