const Mock = require("mockjs");
const result = Mock.mock({
  "datas|2": [
    {
      name: "@cname",
      birthday: "@date",
      "sex|1-2": true,
      mobile: /1\d{10}/,
      // location: "@city(true)",
      "ClassId|1-16": 10,
    },
  ],
}).datas;
console.log(result);
const Student = require("../models/Student");
Student.bulkCreate(result);
