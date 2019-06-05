package com.wjsj;

/**
 * Created by jiangling on 2019/4/16.
 */

import android.app.DownloadManager;
import android.app.DownloadManager.Request;
import android.content.Context;
import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Environment;
import android.widget.Toast;

import com.bestpay.app.PaymentTask;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;

import java.util.HashMap;
import java.util.Map;

public class BestPay extends ReactContextBaseJavaModule implements ActivityEventListener {

    public static String description;

    DownloadManager downManager;
    Activity myActivity;
    Promise mPromise;

    public BestPay(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(this);
    }

    @Override
    public String getName() {
        return "BestPay";
    }

    @ReactMethod
    public void pay(String params, Promise promise) {
        mPromise = promise;
        myActivity = getCurrentActivity();
        PaymentTask task = new PaymentTask(myActivity);
        task.pay(params,
                "475a94ab7208c7263be24ac4285de7b64d30e05e345b8e09471f7a64ea3362ef7defdc004eca317a9479aef508bc296cb62aa78e8615ca66561821bf8c380c08fd834319199a4142375c633c7e214fe18ef24e1e30cfbd5691d8aaed400f2262a8980fa7a614d4db614fabfce344ac8bb18b028e4885e1f4e53110b1bcaae486");
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        Map<String,String> map = new HashMap<>();
        map.put("resultCode",""+resultCode);
        String json = new Gson().toJson(map);
        if(mPromise != null){
            mPromise.resolve(json);
        }

    }

    @Override
    public void onNewIntent(Intent intent) {

    }
}
