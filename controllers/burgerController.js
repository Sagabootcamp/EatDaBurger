const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });

});

router.post("/", function(req, res) {
    burger.create(req.body.burger_name, function(){
        res.redirect("/");
    });

   console.log(req.body);
});

router.put("/:id", function(req, res){
    burger.update(req.params.id, function(){
        res.redirect("/");
    });
});

module.exports = router;