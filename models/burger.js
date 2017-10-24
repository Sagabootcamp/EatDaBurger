const orm = require("../config/orm.js");

var burgers = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    create: function(burger_name, cb){
        orm.insertBurger("burgers", burger_name, function(res){
            cb(res);
        });
    },

    update: function(id, cb){
        orm.updateBurger("burgers", id, function(res){
            cb(res);
        });
    }
}

module.exports = burgers;