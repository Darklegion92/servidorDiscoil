module.exports = {
  PORT: process.env.PORT || 3001,
  DB: process.env.URI || "C:\\TNS\\TNS.GDB",
  SECRET_TOKEN: "SOLTEC-tecnologiaydesarrollo$",
  IP: process.env.IP || "localhost",
  PORT_DB: process.env.PORT_DB || 3050,
  DB_MONGO: process.env.MONGODB_URI || "mongodb://localhost:27017/apiWeb",
  DB_FIREBIRD: process.env.DB_FIREBIRD || "E:\\TNS\\TNS.GDB",
  USER_FIREBIRD: process.env.USER_FIREBIRD || "sysdba",
  PASS_FIREBIRD: process.env.PASS_FIREBIRD || "masterkey",
};
