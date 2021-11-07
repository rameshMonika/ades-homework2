console.log("---------------------------------------------------------");
console.log("Homework> week2> model >toDoList.js");
console.log("---------------------------------------------------------");


// ----------------------------------------------------------------------------
// imports
// ----------------------------------------------------------------------------
var db = require('../controller/databaseConfig');


// var pool=db.getPool();

// ----------------------------------------------------------------------------
// Objects/functions
// ----------------------------------------------------------------------------
var toDoDB = {

 
    // getToDo: function (id, callback) {
    //     // geta connection to the database
    //     var conn = db.getConnection();

    //     conn.connect(function (err) {
    //         if (err) {
    //             console.log(err);
    //             return callback(err.null);
    //         }
    //         else {
    //             console.log("Connected!");

    //             var sql =
    //                 `SELECT
    //              * 
    //              FROM 
    //              user 
    //              WHERE 
    //              userid = 1`;

    //             conn.query(sql, [], function (err, result) {

    //                 conn.end();
    //                 if (err) {
    //                     console.log(err);
    //                     return callback(err.null);
    //                 } else {
    //                     return callback(null, result);
    //                 }
    //             });
    //         }
    //     });
    // },


  

    getToDos: function (callback) {
        // geta connection to the database
        var conn = db.getConnection();

        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err.null);
            }
            else {
                console.log("Connected!");

                var sql = 'SELECT  * FROM todolist;';

                conn.query(sql, [], function (err, result) {

                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err.null);
                    } else {
                        return callback(null, result);
                    }
                });
            }
        });
    },
    
    addToDo: function (task,difficulityLvl, callback) {
     
        // geta connection to the database
        var conn = db.getConnection();

        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err.null);
            }
            else {
                console.log("Connected!");

                var sql = `INSERT INTO
                         todolist (
                   task,
                   difficulityLvl)
                VALUES
                (
                  ?,
                  ?
                  );
                `;

                conn.query(sql, [task,difficulityLvl], function (err, result) {
                    conn.end();
                    if (err) {
                        return callback(err.null);
                    } else {
                        console.log(result)
                        return callback(null, result);
                    }
                });
            }
        });
    },

    
    updateToDo: function (id,task,difficulityLvl, callback) {
        // geta connection to the database
        var conn = db.getConnection();

        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err.null);
            }
            else {
                console.log("Connected!");

                var sql = `
            UPDATE 
            todolist
             SET
            task=?,
            difficulityLvl=?
                
             WHERE
                id=?;
                `;

                conn.query(sql, [task,difficulityLvl,id], function (err, result) {

                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err.null);
                    } else {
                        return callback(null, result);
                    }
                });
            }
        });
    },

     
    deleteToDo: function (id, callback) {
        // geta connection to the database
        var conn = db.getConnection();

        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err.null);
            }
            else {
                console.log("Connected!");

                var sql = `
           Delete
           from
            todolist
                
             WHERE
                id=?;
                `;

                conn.query(sql, [id], function (err, result) {

                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err.null);
                    } else {
                        return callback(null, result);
                    }
                });
            }
        });
    },

    
    getToDo: function (id,callback) {
        // geta connection to the database
        var conn = db.getConnection();

        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err.null);
            }
            else {
                console.log("Connected!");

                var sql = 'SELECT  * FROM todolist where id=?;';

                conn.query(sql, [id], function (err, result) {

                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err.null);
                    } else {
                        return callback(null, result);
                    }
                });
            }
        });
    },




};

// ----------------------------------------------------------------------------
// exports
// ----------------------------------------------------------------------------
module.exports = toDoDB;


