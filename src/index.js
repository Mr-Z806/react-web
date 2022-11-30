import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import './mork'
// 全局样式
import '@/common/style/frame.less'

const antdConfig = {
    locale: zhCN
}

createRoot(document.getElementById('root')).render(
    <ConfigProvider {...antdConfig}>
        <Provider store={store}>
            <App />
        </Provider>
    </ConfigProvider>
)




// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// // 全局样式
// import '@/common/style/frame.less'

// ReactDOM.render(<App />,document.getElementById('root'))
