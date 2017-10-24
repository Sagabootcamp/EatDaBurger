const connection = require("./connection.js");

var orm = {
    selectAll : function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    
    insertBurger: function(tableInput, burger_name, cb) {
        var queryString = "INSERT INTO " + tableInput + " (burger_name, devoured) VALUES ('" + burger_name + "', 0);";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },

    updateBurger: function(tableInput, id, cb){
        var queryString = "UPDATE " + tableInput + " SET devoured = 1 WHERE id = " + id + ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;