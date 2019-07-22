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
 * 提交更新
 * code-push release-react <AppName> <Platform> --t <本更新包面向的旧版本号> --d <生产/测试> --des <本次更新说明> --m
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


// -----------接入-----------
import CodePush from "react-native-code-push";
/**
 * Configured with a MANUAL check frequency for easy testing. For production apps, it is recommended to configure a
 * different check frequency, such as ON_APP_START, for a 'hands-off' approach where CodePush.sync() does not
 * need to be explicitly called. All options of CodePush.sync() are also available in this decorator.
 */
let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
App = CodePush(codePushOptions)(App);
export default App;


// -----------使用-----------
// 检测是否有新版本
CodePush.checkForUpdate(deploymentKey).then((update) => {
    // update 返回信息
    // 无新版本 update: null
    // 有新版本 update: {
    //     appVersion: "2.4.0",
    //     deploymentKey: "GJSHzKcd5cBRDNXkc5LOG-GHAtEz81aa2451-f697-4533-9b5d-2d954f0517e0",
    //     description: "查看更新信息",// 更新描述
    //     download: ƒ download(downloadProgressCallback),
    //     downloadUrl: "https://codepushupdates.azureedge.net/storagev2/pkVI6t-3wQrFIxNttfVmXsw9Gl5_81aa2451-f697-4533-9b5d-2d954f0517e0",
    //     failedInstall: false,
    //     isMandatory: true,// 是否是强制更新
    //     isPending: false,
    //     label: "v57",
    //     packageHash: "1dff623417e66109fe8b18feaaef4e2a90f23031e5921a5fad17ef1626681321",
    //     packageSize: 12346550,// 更新包大小
    // }
    if (!update) {
        console.log("已是最新版本")
    } else {
        // updateDialog 设为 {},不弹出默认弹框,根据其他信息自定义弹框样式
        // 处理更新方式
        CodePush.sync({
            deploymentKey: deploymentKey,
            updateDialog: {
                //是否显示更新描述
                appendReleaseDescription: true,
                //更新描述的前缀。 默认为"Description"
                descriptionPrefix: "更新内容：",
                //强制更新按钮文字，默认为continue
                mandatoryContinueButtonLabel: "立即更新",
                //强制更新时的信息. 默认为"An update is available that must be installed."
                mandatoryUpdateMessage: "必须更新后才能使用",
                //非强制更新时，按钮文字,默认为"ignore"
                optionalIgnoreButtonLabel: '稍后',
                //非强制更新时，确认按钮文字. 默认为"Install"
                optionalInstallButtonLabel: '后台更新',
                //非强制更新时，检查到更新的消息文本
                optionalUpdateMessage: '有新版本了，是否更新？',
                //Alert窗口的标题
                title: '更新提示'
            },// 默认弹框信息配置
            // codePush.InstallMode.IMMEDIATE：表示安装完成立即重启更新
            // codePush.InstallMode.ON_NEXT_RESTART：表示安装完成后会在下次重启后进行更新
            // codePush.InstallMode.ON_NEXT_RESUME：表示安装完成后会在应用进入后台后重启更新
            installMode: CodePush.InstallMode.IMMEDIATE,
        },
            (status) => {
                // 更新状态
                switch (status) {
                    case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                        console.log("下载");
                        break;
                    case CodePush.SyncStatus.INSTALLING_UPDATE:
                        console.log("安装");
                        break;
                }
            },
            (progress) => {
                // 下载进度
                console.log(progress.receivedBytes + " of " + progress.totalBytes + " received.");
            }
        );
    }
})