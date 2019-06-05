/**
 * react-native-code-push
 * 微软热更新
 * https://github.com/microsoft/react-native-code-push
 *
 * 需脚手架
 * code-push-cli
 * appcenter-cli
 *
 *
 * 指令
 *
 * code-push login             登录
 * code-push logout            登出
 *
 * <deploymentName> 部署环境
 * Production 生产
 * Staging 测试
 *
 * <AppName> App名
 *
 * <Platform> 平台/系统
 *
 * --t     版本号  例： 1.1.0
 * --dev   是否开启开发者模式  默认false
 * --des   更新内容描述
 * --d     更新的环境 正式/Production 测试/Staging 默认/Staging
 * --m     是否强制更新
 *
 * code-push deployment ls <AppName> -k
 * 查看 Key (Production, Staging)
 *
 * code-push release-react <AppName> <Platform> --t <本更新包面向的旧版本号> --d <生产/测试> --des <本次更新说明> --m true
 * 例： code-push release-react WJSJAndroid android  --t 2.2.0  --des "员工评价提交测试" --m
 * 例： code-push release-react WJSJ-IOS ios --t 2.1.0 --d Production --des "0531上线"
 *
 * code-push rollback <appName> <deploymentName> --targetRelease vNumber
 * 回滚到指定版本 vNumber版本号
 * 
 * code-push deployment clear <appName> <deploymentName>
 * 清楚所有发布版本
 *
 *
 *
*/