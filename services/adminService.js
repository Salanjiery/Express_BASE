// 管理员初始化
// 判断数据库中是否有管理员，如果没有，自动添加一个默认管理员
const Admin = require("../models/Admin");
exports.addAdmin = async function (adminObj) {
  // 应该判断adminObj的各种属性是否合理，以及账号是否已存在
  const ins = await Admin.create(adminObj); //得到一个create == build + save
  return ins.toJSON(); //返回添加状态信息
};

exports.deleteAdmin = async function (loginId) {
  let result = null
  // 方式1
  // const ins = await Admin.findByPk(Id); //通过主键PK找实例

  // if (ins) {
  //   const result = await ins.destroy(); //偏置表不会真正删除，会使用update paranoid
  // }
  // 方式2
  result = await Admin.destroy({
    where: {
      loginId,
    },
  });
  return result;
};

exports.updateAdmin = async function (loginId, adminObj) {

  const result = await Admin.update(adminObj, {
    where: {
      loginId,
    },
  });
  return result;
};
exports.findAll = async function () {
  const result = JSON.stringify(res, null, 2)
  return result;
};
