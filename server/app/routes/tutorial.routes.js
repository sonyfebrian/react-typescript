module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    router.post("/", tutorials.create);

    //Retrieve all data
    router.get("/", tutorials.findAll);

    //retrieve all published data
    router.get("/published", tutorials.findAllPublished);

    //Retrieve a singgle data with id
    router.get("/:id", tutorials.findOne);

    //update a data with id
    router.put("/:id", tutorials.update);

    //delete a tutorial with id
    router.delete("/:id", tutorials.delete);

    //delete all data
    router.delete("/", tutorials.deleteAll);

    app.use('/api/tutorials', router);
};
