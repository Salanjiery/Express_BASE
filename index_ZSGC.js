// require("./models/relation"); //关系同步
// require("./mock/mockStudent"); //mock数据
// require("./mock/mockClass"); //mock数据
// require("./spider/fetchBooks"); //爬虫库例子
// const adminService = require("./services/adminService") //获取Admin的api
// const studentService = require("./services/studentService") //获取Student的api
// const adminServ = require("./services/adminService");
// const Class = require("./models/Class");
// const stuServ = require("./services/studentService");

// 添加管理员，参数要符合模型要求
// const adminServe = require("./services/adminService");
//增加
// adminServe.addAdmin({
//   loginId: "55",
//   loginPwd: "two",
// }).then(res => console.log(res));
//删除
// adminServe.deleteAdmin(8)
//修改
// adminServe.updateAdmin({
//   loginId: "55",
//   loginPwd: "three",
// }, 33).then(res => console.log(res))
//查找所有
// adminServe.findAll().then(res => {
//   console.log("All Admin:", JSON.stringify(res, null, 2));
// }
//)
// 条件查询
// studentService.getStudents(1, 10, 0, "秀").then(res => console.log(res))
//学生增加
// const studentService = require("./services/studentService");
// studentService.addStudent({
//     name: 'csy',
//     sex: 1,
//     mobile: 12312312312,
//     birthday: new Date(),
//     ClassId: 1
// }).then(res => console.log(res));