var mysql = require ('mysql');

var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);

}else {
    var connection = mysql.createConnection({
        port:3306,
        host:'localhost',
        user: 'root',
        password: 'October102118',
        database:'burgers_db'
    })
};


connection.connect(function(err){
    if(err) {
        console.error ('ERROR: MySQL connection error -- '+ err.stack + '\n\n');
        return;
    }
    console.log('Connected to MySQL Database as id '+ connection.threadId + '\n\n');
});

module.exports = connection;