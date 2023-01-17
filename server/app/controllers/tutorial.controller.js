const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;


//Create and Save a new tutorial
exports.create = (req, res) => {

    //validate req
    if(!req.body.title) {
        res.status(400).send({
            message:"Content can not be empty!"
        });
        return;
    }

    //create data
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published:req.body.published ? req.body.published : false
    };

    //save data in the database
    Tutorial.create(tutorial)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:err.message || "Some error occures while creating the data"
        })
    })
};

//Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
 const title = req.query.title;
 var condition = title ? {title: {[Op.like]: `%${title}%`}} : null ;

 Tutorial.findAll({where: condition})
 .then(data => {
    res.send(data);
 })
 .catch(err => {
    res.status(500).send({
        message:err.message || "Some error occured while retrieving data."
    })
 })
};

//Find a single data
exports.findOne = (req, res) => {
const id = req.params.id;

Tutorial.findByPk(id)
.then(data => {
    if(data) {
        res.send(data)
    } else {
        res.status(404).send({
            message:`Cannot find data wih id=${id}`
        })
    }
})
.catch(err => {
    res.status(500).send({
        message:`Error retrieving data with id=` + id
    });
});
};

//update data
exports.update = (req, res) => {
 const id = req.params.id;

 Tutorial.update(req.body, {
    where: {id: id}
 })

 .then(num => {
    if(num == 1) {
        res.send({
            message:"data was update successfully"
        })
    } else {
        res.send({
            message:`Cannot update Tutorial with id=${id}. Maybe data was not found or req.body is empty!`
        })
    }
 })
 .catch(err => {
    res.status(500).send({
        message:"Error updating data with id=" + id
    })
 })
}

//delete data
exports.delete = (req, res) => {
const id = req.params.id;

Tutorial.destroy({
    where: {id: id}
})

.then(num => {
    if(num == 1) {
        res.send({
            message:"Tutorial was deleted successfully!"
        });
    } else {
        res.send({
            message:`Cannot delete data with id=${id}. maybe data was not found!`
        })
    }
})

.catch(err => {
    res.status(500).send({
        message:"Could not delete data with id=" + id
    })
})
}

//delete allData
exports.deleteAll = (req, res) => {

    Tutorial.destroy({
        where: {},
        truncate:false
    })

    .then(nums => {
        res.send({
            message:`${nums} data were deleted successfully`
        });
    })
    .catch(err => {
        res.status(500).send({
            message:err.message || "Some Error occurred while removing all data"
        })
    })
}

//find all publis data
exports.findAllPublished = (req, res) => {
 Tutorial.findAll({where: {published: true}})
 .then(data => {
    res.send(data);
 })
 .catch(err => {
    res.status(500).send({
        message:err.message || "Some error occured while retrieving data"
    })
 })
}

