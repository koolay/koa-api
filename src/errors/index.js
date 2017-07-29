 /**
  * 微信功能模块异常
  */
 class WxError extends Error {}

 /**
  * 返回给用户的异常
  */
 class UserError extends Error {}

 /**
  * 配置项缺少
  */
 class ConfigMissError extends Error {}

 /**
  * 配置值不合法不正确
  */
 class ConfigValueError extends Error {}

 /**
  * 数据不存在
  */
 class NotExistData extends Error {}

 /**
  * 无效的参数
  */
 class InvalidParameterError extends Error {}

 export default {
     WxError,
     UserError,
     ConfigMissError,
     ConfigValueError,
     NotExistData,
     InvalidParameterError
 }