console.log("Device Unique ID", DeviceInfo.getUniqueID());  // e.g. FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9
// * note this is IDFV on iOS so it will change if all apps from the current apps vendor have been previously uninstalled
console.log("Device Manufacturer", DeviceInfo.getManufacturer());  // e.g. Apple
console.log("Device Model", DeviceInfo.getModel());  // e.g. iPhone 6
console.log("Device ID", DeviceInfo.getDeviceId());  // e.g. iPhone7,2 / or the board on Android e.g. goldfish
console.log("Device Name", DeviceInfo.getSystemName());  // e.g. iPhone OS
console.log("Device Version", DeviceInfo.getSystemVersion());  // e.g. 9.0
console.log("Bundle Id", DeviceInfo.getBundleId());  // e.g. com.learnium.mobile
console.log("Build Number", DeviceInfo.getBuildNumber());  // e.g. 89
console.log("App Version", DeviceInfo.getVersion());  // e.g. 1.1.0
console.log("App Version (Readable)", DeviceInfo.getReadableVersion());  // e.g. 1.1.0.89
console.log("Device Name", DeviceInfo.getDeviceName());  // e.g. Becca's iPhone 6
console.log("User Agent", DeviceInfo.getUserAgent()); // e.g. Dalvik/2.1.0 (Linux; U; Android 5.1; Google Nexus 4 - 5.1.0 - API 22 - 768x1280 Build/LMY47D)
console.log("Device Locale", DeviceInfo.getDeviceLocale()); // e.g en-US
console.log("Device Country", DeviceInfo.getDeviceCountry()); // e.g US


IOS值
Device Unique ID--- 362F5742-FDAD-4244-AB38-B7DE29F8D18D
Device Manufacturer--- Apple
Device Model--- iPhone X
Device ID--- iPhone10,6
Device Name--- iOS
Device Version--- 12.1
Bundle Id--- com.wjsj.wjsj
Build Number--- 18
App Version--- 2.2.0
App Version (Readable)--- 2.2.0.18
Device Name--- iPhone X
Device Locale--- zh-Hans-US
Device Country--- US



android值
Device Unique ID--- e5fd261740b948b6
Device Manufacturer--- HUAWEI
Device Model--- VTR-AL00
Device ID--- VTR
Device Name--- Android
Device Version--- 9
Bundle Id--- com.wjsj
Build Number--- 12
App Version--- 2.2.0
App Version (Readable)--- 2.2.0.12
Device Name--- Unknown
Device Locale--- zh-Hans-CN
Device Country--- CN