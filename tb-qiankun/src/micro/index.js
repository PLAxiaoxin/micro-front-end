import { registerMicroApps, addGlobalUncaughtErrorHandler, start} from "qiankun";

// 微应用注册信息
import apps  from './apps';
/**
 * 注册微应用
 * 第一个参数 - 微应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */

registerMicroApps(apps, {
  beforeLoad:(app)=>{
    console.log('before load', app.name);
    return Promise.resolve();
  },
  afterMount:(app)=>{
    console.log('after mount', app.name);
    return Promise.resolve();
  }
});

/**
 * 添加全局的未捕获异常处理器
 */

addGlobalUncaughtErrorHandler((event)=>{
  console.log(event,'微应用加载错误信息');
})

// 导出qiankun启动函数
export default start;