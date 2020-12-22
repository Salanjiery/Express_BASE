const Mock = require("mockjs");
// Mock.mock('/user_list', data) ajax路由拦截形式
const result = Mock.mock({
  "datas|16": [
    {
      "number|+1": 1,
      name: "@number 班",
      openDate: "@date",
    },
  ],
}).datas;
console.log(result)
const Class = require("../models/Class");
Class.bulkCreate(result);

