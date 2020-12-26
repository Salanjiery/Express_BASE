const Student = require("../models/Student");
const { Op } = require("sequelize");
const Class = require("../models/Class");
exports.addStudent = async function (stuObj) {
  const ins = await Student.create(stuObj);
  return ins.toJSON();
};

exports.deleteStudent = async function (id) {
  return await Student.destroy({
    where: {
      id,
    },
  });
};

exports.updateStudent = async function (id, obj) {
  return await Student.update(obj, {
    where: {
      id,
    },
  });
};
exports.getStudentById = async function (id) {
  const result = await Student.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
};

exports.sort = async function () {
  const result = await Student.findAll({ //offset表示跳过多少条，limit是取多少条
    'order': [
      ['id', 'DESC']  // 逆序
      // ['id'] 正序
    ]
  });
  return JSON.parse(JSON.stringify(result))
}
//分页查询
exports.getStudents = async function (
  page = 1,
  limit = 10,
  sex = -1,
  name = ""
) {
  //普通分页查询
  // const results = await Student.findAll({ //offset表示跳过多少条，limit是取多少条
  //   offset: (page - 1) * limit,
  //   limit: +limit,
  // });
  // const total = await Student.count()
  // const datas = JSON.parse(JSON.stringify(results));
  // return {
  //   total,
  //   datas
  // }
  //条件限制查询
  const where = {};
  if (sex !== -1) {
    where.sex = !!sex;
  }
  if (name) {
    where.name = {
      [Op.like]: `%${name}%`,
    };
  }

  const result = await Student.findAndCountAll({
    attributes: ["id", "name", "sex", "birthday"], //限制查询出来的属性
    where,
    include: [Class], //联表查询，要提前写model 的 relation
    offset: (page - 1) * limit,
    limit: +limit,
  });
  return {
    total: result.count,
    datas: JSON.parse(JSON.stringify(result.rows)),
  };
};
