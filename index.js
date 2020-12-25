// require("./models/sync"); //模型同步
// require("./models/relation"); //关系同步
// require("./mock/mockStudent"); //mock数据
// require("./mock/mockClass"); //mock数据
// require("./spider/fetchBooks"); //爬虫库例子
// const adminService = require("./services/adminService") //获取Admin的api
// const studentService = require("./services/studentService") //获取Student的api
const adminServ = require("./services/adminService");

// adminServ.addAdmin({
//     loginId: '123',
//     loginPwd: 'csy'
// }).then((r) => {
//     console.log(r);
// });
adminServ.login(123, 'csy')