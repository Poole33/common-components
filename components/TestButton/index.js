import TestButton from './test-button'

// 为组件添加 install 方法，用于按需引入
TestButton.install = function (Vue) {
    Vue.component(TestButton.name, TestButton)
}

export default TestButton