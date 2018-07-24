
function httpRequestPost(option, success, error, timeout) {
    $.ajax({
        url: option.url,
        type: "POST",
        data: option.data,
        dataType: "json",
        timeout: option.timeout,
        async: option.async, // 同步false 异步true
        xhrFields: {
            withCredentials: true, // 保持 sessionId
        },
        crossDomain: true, // 跨域策略
        success: function(data) {
            success(data);
        },
        error: function(err) {
            error(err);
        },
        complete: function(XMLHttpRequest, status) {
            // status: timeout,success,error
            if (status == 'timeout') {
                timeout('timeout');
            }
        }
    });
}


function httpRequestGet(option, success, error, timeout) {
    $.ajax({
        url: option.url,
        type: "GET",
        dataType: "json",
        timeout: option.timeout,
        async: option.async,
        success: function(data) {
            success(data);
        },
        error: function(err) {
            error(err)
        },
        complete: function(XMLHttpRequest, status) {
            // status: timeout,success,error
            if (status == 'timeout') {
                timeout('timeout')
            }
        }
    });
}


httpRequestGet({
    url: 'http://47.104.136.124:8080/occupation/selectOccupationList',
    timeout: 1000,
    async: true,
}, function(data) {
    // 成功方法
    console.log(data)
}, function(error) {
    // 失败方法
    console.log(error)
}, function() {
    // 超时方法
    console.log('请求超时')
});

httpRequestPost({
    url: 'http://47.104.136.124:8080/login',
    data: {
        "username": '13500000000',
        "password": '123456'
    },
    timeout: 1,
    async: true,
}, function(data) {
    // 成功方法
    console.log(data)
}, function(error) {
    // 失败方法
    console.log(error)
}, function() {
    // 超时方法
    console.log('请求超时')
});
