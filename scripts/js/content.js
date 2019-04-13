define(['header'], function(h) {
    var moduleObj = {
        name: 'content',
        version: '0.0.1'
    };
    h.setData('#content', 'this is content');
    return moduleObj;
});