module.exports = {
    PORT: process.env.PORT || 3001,
    DB: process.env.URI || 'D:\\SYSplus\\Datos\\PRU\\sysplus.fdb',
    SECRET_TOKEN: "SOLTEC-tecnologiaydesarrollo$",
    IP: process.env.IP || "localhost",
    PORT_DB: process.env.PORT_DB || 3050,
    DB_MONGO:process.env.MONGO_URI || 'mongodb://localhost:27017/apiWeb'
}