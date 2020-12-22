// 同步所有模型
require("./Admin");
require("./Book");
require("./Class");
require("./Student");
const sequelize = require("./db");
//同步所有模型到数据库
sequelize.sync({ alter: true }).then(() => {
  console.log("Model模型差量同步完成");
});