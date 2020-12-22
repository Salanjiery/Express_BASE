// 添加管理员，参数要符合模型要求
const adminServe = require("./services/adminService");
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
// )