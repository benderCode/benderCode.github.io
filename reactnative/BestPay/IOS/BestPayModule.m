
//
//  BestPayModule.m
//  BestpayDemo
//
//  Created by EchoZuo on 2019/4/11.
//  Copyright © 2019 ZJ. All rights reserved.
//

#import "BestPayModule.h"
#import "BestPaySDK.h"
#import "BestpayNativeModel.h"
#import <UIKit/UIKit.h>

static RCTPromiseResolveBlock _resolve;
static RCTPromiseRejectBlock _reject;

//static RCTPromiseResolveBlock _resolve_Install;

@implementation BestPayModule

RCT_EXPORT_MODULE();


RCT_REMAP_METHOD(pay, payOrder:(NSString *)payOrder resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  
  BestpayNativeModel *order =[[BestpayNativeModel alloc]init];
  // 订单信息
  order.orderInfo = payOrder;
  // 安全键盘license 需提供商户APP bundleID由翼支付创建license
  order.keyboardLicense = @"42d659bf87e232492380b198110472e14c2003e4016edce0dad997dca0e08094b1af439c46370dfecc43133362adf24c7bb748708b7f466411ab4acd6d1d75c15a8eb5a200643e2aa6807ba225221727c4a31d36856ff006af7b7f9aaaa84f4556acd7fceb1daad697f848dea568e5adf9b0cd52c09d387546b37f29104e97e5";
  // 商户APP scheme
  order.scheme = @"dixinyoupin";

  _resolve = resolve;
  _reject = reject;

  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    dispatch_async(dispatch_get_main_queue(), ^{
      [BestpaySDK payWithOrder:order fromViewController:[UIApplication sharedApplication].keyWindow.rootViewController callback:^(NSDictionary *resultDic) {
        _resolve(resultDic);
      }];
    });
  });
}

RCT_REMAP_METHOD(isBestPayInstall, resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    dispatch_async(dispatch_get_main_queue(), ^{
      BOOL isInstall = [[UIApplication sharedApplication] canOpenURL:[NSURL URLWithString:[NSString stringWithFormat:@"%@",@"bestpay://"]]];

      _resolve = resolve;
      _reject = reject;
      
      if (isInstall) {
        _resolve(@{@"result" : @"1"});
      } else {
        _resolve(@{@"result" : @"0"});
      }
    });
}




@end
