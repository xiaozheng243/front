import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//8.引入已经创建的组件，将该组件渲染到指定HTML节点中
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();