const sql = require('mssql')

const config = {
    user: 'adol',
    password: 'Av61576728',
    server: 'servazure01.database.windows.net', 
    database: 'OLEIDB1_ROSCO_PRUEBAS'
}

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}