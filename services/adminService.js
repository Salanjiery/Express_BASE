// 管理员初始化
// 判断数据库中是否有管理员，如果没有，自动添加一个默认管理员
const Admin = require("../models/Admin");
const md5 = require("md5"); // Md5 加密
exports.addAdmin = async function (adminObj) {
  // 应该判断adminObj的各种属性是否合理，以及账号是否已存在
  adminObj.loginPwd = md5(adminObj.loginPwd); // 加密存储
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
  if (adminObj.loginPwd) {
    adminObj.loginPwd = md5(adminObj.loginPwd);
  }
  const result = await Admin.update(adminObj, {
    where: {
      loginId,
    },
  });
  return result;
};
//登陆
exports.login = async function (loginId, loginPwd) {
  loginPwd = md5(loginPwd)
  const result = await Admin.findOne({
    //当loginId 和 loginPwd 都一致，则登陆成功
    where: {
      loginId,
      loginPwd,
    },
  });

  if (result && result.loginId == loginId && result.loginPwd == loginPwd) {
    console.log('登陆成功')
    return result.toJSON();
  }
  return null;
};

exports.getAdminById = async function (id) {
  const result = await Admin.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
};

exports.getAdmins = async function () {
  const result = await Admin.findAll();
  return JSON.parse(JSON.stringify(result));
};

