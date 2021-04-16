# 描述
该项目适用于自己开发组件，并把自己的组件打包发布到npm服务器的简易demo，可直接拉取下来进行开发，里面给出了一个简单的demo方便理解。
> 若只想使用demo进行开发，可直接从[Demo使用](#demo使用)进行观看

# 参考方案
[博客](https://www.cnblogs.com/wisewrong/p/10186611.html)  
[ant-design-vue](https://github.com/vueComponent/ant-design-vue)

# 从零搭建流程
项目使用的是**Vue**开发，所以先用**vue-cli**搭建一个新项目。

创建成功之后：

## 项目结构调整
+ 把 **src** 改为 **examples** 用作测试自己写的组件是否可用的目录
+ 跟路径创建一个 **components** 目录，用作开发组件的目录

## 修改配置
vue-cli默认入口文件是**src/main.js**，我们调整了项目结构，需要修改默认入口文件地址：

根目录创建**vue.config.js**文件(vue-cli3 的默认配置文件)，填入信息：

	module.exports = {
  		pages: {
    		index: {
      			entry: 'examples/main.js',
      			template: 'public/index.html',
      			filename: 'index.html'
    		}
  		},
  		productionSourceMap: false
	}

## 组件的开发
参考项目中的components/TestButton/index.js

## 组件的导出
在**components**目录下创建**index.js**文件用来把编写的所有组件，来实现组件的**全局引用**和**按需引用**。

	import TestButton from './TestButton/test-button'

	const components = [
    	TestButton
	]

	const install = function (Vue) {
    	// 遍历并注册全局组件
    	components.map(component => {
        	Vue.component(component.name, component)
    	})
	}

	if (typeof window !== 'undefined' && window.Vue) {
    	install(window.Vue)
	}
	
	// 按需引用
	export {
    	TestButton
	}

	export default {
    	// 导出的对象必须具备一个 install 方法
    	install
	}

## 打包组件
vue-cli 3.x 提供了[库文件打包命令](https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%93)

在**package.json**里的**scripts**中添加**lib**命令

	"lib": "vue-cli-service build --target lib --name tag-textarea --dest lib packages/index.js"

然后执行
>// yarn  
>**yarn lib**

>// npm  
>**npm run lib**

## 发布到npm

### 在package.json文件中添加组件信息
	“name”: "common-component", // 包名，用来npm install 的名称
	“version”: “1.0.0”, // 版本号，不能与历史版本号重复
	“description”: “xxxx”, // 包简介
	“main”: “lib/component.umd.min.js”, // 入口文件，指向编译后的包文件
	“author”: “inno pu”, // 作者
	“license”: ”MIT” // 开源协议

### 创建.npmignore文件
设置发布到npm时忽略那些目录和文件

### 发布
+ 如果之前修改过npm的镜像地址，则需要更改回来 
>npm config set registry http://registry.npmjs.org
+ 到[官网](https://www.npmjs.com/)注册npm账户
+ **npm login** 终端中使用命令登陆账号  
+ 具体流程参考[官方文档](https://www.npmjs.cn/getting-started/publishing-npm-packages/)
+ **npm publish** 终端中使用命令发布

可能会出现的发布失败的问题：
+ 包名重复
+ 账号没有在邮件中验证

# Demo使用
[github仓库](https://github.com/ptcp3/common-components) 拉取项目

## 项目初始化
>// 使用 yarn 安装依赖  
>**yarn**  

>// 使用 npm 安装依赖  
>**npm install**  

>// 使用 cnpm 安装依赖  
>**cnpm install**  

## 项目开发
+ components目录下开发组件，并在components/index.js中导出组件
+ examples目录下测试组件的功能
+ 测试完毕 使用npm run lib 编译项目
+ 编译完毕 使用npm publish 发布项目
