Pod::Spec.new do |s|
  s.name             = "react-native-social-sdk"
  s.version          = "0.0.1"
  s.platform     = :ios, '7.0'
  s.requires_arc = true 
  s.source_files = 'react-native-weixin-sdk/ios/*.{h,m}','react-native-weibo-sdk/ios/*.{h,m}','react-native-qq-sdk/ios/*.{h,m}', 
  s.resource     = 'react-native-qq-sdk/ios/TencentOpenApi_IOS_Bundle.bundle','react-native-weibo-sdk/ios/WeiboSDK.bundle'
  s.vendored_libraries  = 'react-native-weibo-sdk/ios/libWeiboSDK.a','react-native-weixin-sdk/ios/libWeChatSDK.a'
  s.vendored_frameworks = 'react-native-qq-sdk/ios/TencentOpenAPI.framework'
  s.frameworks = 'ImageIO','CoreText', 'QuartzCore','UIKit','Foundation','Security','CoreGraphics','SystemConfiguration','CoreTelephony'
  s.libraries  = 'iconv','stdc++','z','sqlite3','c++'
end
