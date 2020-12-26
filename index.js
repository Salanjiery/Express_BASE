require("./init");//第一次必须运行init
// require("./models/relation"); //关系同步
// require("./mock/mockStudent"); //mock数据
// require("./mock/mockClass"); //mock数据
// require("./spider/fetchBooks"); //爬虫库例子
// const adminService = require("./services/adminService") //获取Admin的api
// const studentService = require("./services/studentService") //获取Student的api
// const adminServ = require("./services/adminService");
// const Class = require("./models/Class");
const stuServ = require("./services/studentService");
stuServ.getStudents().then((r) => {
    console.log(r);
});
