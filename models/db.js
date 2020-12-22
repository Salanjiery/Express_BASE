const { Sequelize } = require("sequelize");
//连接数据库
const sequelize = new Sequelize("csy_db", "root", "chensiyu123", {
  host: "localhost",
  dialect: "mysql",
  define: {
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
    timestamps: true
  },
  logging: null
});

module.exports = sequelize;
