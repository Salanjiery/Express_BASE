const { Sequelize } = require("sequelize");
const { sqlLogger } = require("../logger");
//连接数据库
const sequelize = new Sequelize("csy_db", "root", "chensiyu123", {
  host: "localhost",
  dialect: "mysql",
  logging: (msg) => {
    sqlLogger.debug(msg);
  },
  // logging: true,
  define: {
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
    timestamps: true
  },
});

module.exports = sequelize;
