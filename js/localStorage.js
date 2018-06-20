// localStorage 方法类封装
// localStorage 只存在 String 类型
!(function(win, doc){
    win.myLocal = new Object();
    // 设置 localStorage
    myLocal.setItem = function(key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }
    // 获取 localStorage
    myLocal.getItem = function(key, data) {
        return JSON.parse(window.localStorage.getItem(key));
    }
    // 删除 localStorage
    myLocal.deleteItem = function(key) {
        window.localStorage.removeItem(key);
    }
    // 清空 localStorage
    myLocal.clearItem = function() {
        window.localStorage.clear();
    }
})(window, document);
