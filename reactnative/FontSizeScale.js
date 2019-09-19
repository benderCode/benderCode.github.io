/**
 * React native 禁止字体跟随系统字体大小缩放
 *
 * @author benderCode
 * @date 2019-09-19
 * 
 */

Android
/**
android 文件 => 进入到 app 目录 > src > main > java > 包名 > MainActivity.java 文件中 头文件中加入

import android.content.res.Configuration;
import android.content.res.Resources;

@Override

public Resources getResources() {

    Resources res = super.getResources();

    Configuration config = new Configuration();

    config.setToDefaults();

    res.updateConfiguration(config, res.getDisplayMetrics());

    return res;

}

*/

IOS
/**
 * RCTFont.mm

if (scaleMultiplier > 0.0 && scaleMultiplier != 1.0) {
    // fontSize = round(fontSize * scaleMultiplier);
    fontSize = round(fontSize);
}

*/