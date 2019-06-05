function fetchPost(requestUrl, headers, formData) {
    return new Promise(function (resolve, reject) {
        fetch(requestUrl, {
            method: 'POST',
            headers: headers,
            body: formData,
        }).then((response) => response.json())
            .then((responseData) => {
                console.log("成功返回" + responseData);
                resolve(responseData);
            })
            .catch((error) => {
                console.log("失败返回" + error);
                resolve(error);
            });
    });
}
function fetchGet(requestUrl, headers) {
    return new Promise(function (resolve, reject) {
        fetch(requestUrl, {
            method: 'GET',
            headers: headers,
        }).then((response) => response.json())
            .then((responseData) => {
                console.log("成功返回" + responseData);
                resolve(responseData);
            })
            .catch((error) => {
                console.log("失败返回" + error);
                resolve(error);
            });
    });
}
let result = fetchPost("url", { "token": "token" }, {});
let result = fetchGet("url", { "token": "token" });

// Fetch 超时处理
export default function Post(url, data = {}, time = 20000) {
    let result = new Promise((resolve, reject) => {
        let requestOption = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: paramJson,
            credentials: 'include',// 是否携带 cookie include-携带 same-origin-同源请求才发送cookie omit-缺省值, 默认为该值
        }
        fetch(url, requestOption)
            .then((response) => response.json())
            .then((responseData) => {
                resolve(responseData)
            })
            .catch((error) => {
                console.log('接口请求错误信息', error);
            })
    })

    let timeout = new Promise(function (resolve, reject) {
        setTimeout(() => { resolve({ status: 'NONETWORK', msg: '请求超时' }) }, time)
    });

    return Promise.race([
        result, // 正常访问接口返回的数据
        timeout, // 超过请求时间时返回 "timeout"
    ]);
}