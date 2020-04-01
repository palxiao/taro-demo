const express = require("express");
const path = require("path");
const config = require("./src/config");
// const config = require("./config/index.js")(Object.assign);

console.log("TCL: config", config);

const app = express();

// 配置静态文件服务中间件
app.use("/assets", express.static(path.join(__dirname, "src/assets")));

app.listen(config.assetsServePort, () => {
  console.log("静态资源服务已启动：端口", config.assetsServePort);
}); //你的端口
