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
