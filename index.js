require("./init");
const express = require("express");
const app = express(); //创建一个express应用

// 配置一个请求映射，如果请求方法和请求路径均满足匹配，交给处理函数进行处理
// app.请求方法("请求路径", 处理函数)
