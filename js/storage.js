// storage 本地存储
// localStorage/sessionStorage 只存在 String 类型
// localStorage 长期存储，需手动删除
// sessionStorage 浏览器关闭时清除
!(function(win, doc){
    win.myLocal = new Object();
    // localStorage 方法类封装
    // 设置 localStorage
    myLocal.setLocalItem = function(key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }
    // 获取 localStorage
    myLocal.getLocalItem = function(key, data) {
        return JSON.parse(window.localStorage.getItem(key));
    }
    // 删除 localStorage
    myLocal.deleteLocalItem = function(key) {
        window.localStorage.removeItem(key);
    }
    // 清空 localStorage
    myLocal.clearLocalItem = function() {
        window.localStorage.clear();
    }
    // 设置 sessionStorage
    myLocal.setSessionItem = function(key, data) {
        window.sessionStorage.setItem(key, JSON.stringify(data));
    }
    // 获取 sessionStorage
    myLocal.getSessionItem = function(key, data) {
        return JSON.parse(window.sessionStorage.getItem(key));
    }
    // 删除 sessionStorage
    myLocal.deleteSessionItem = function(key) {
        window.sessionStorage.removeItem(key);
    }
    // 清空 sessionStorage
    myLocal.clearSessionItem = function() {
        window.sessionStorage.clear();
    }
})(window, document);
