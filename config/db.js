var mysql = require('mysql');
const { createPool } = require('mysql');
var pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'faraz12948fab',
    port: '3306',
    database: 'asset_management'
});

pool.getConnection(function (err, connection) {
    if (err) {
        console.log("error", err);
    } console.log("connected to db");


});
const executeQuery = (query, arrayParams) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, arrayParams, (err, data) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } resolve(data);
            })
        } catch (err) {
            reject(err);
        }
    })
}
module.exports = { executeQuery };