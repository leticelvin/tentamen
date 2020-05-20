const express = require('express') //my input
mongoose = require('mongoose');
const router = express.Router()

var reqmodels = (req, res, next) => {
  console.log("In the first function: " + req)
  req.models.Book.find()
    .then((books) => { return res.send(books) })
    .catch((error) => next(error))
}

console.log("After the first function: " + req)

router.get("/books", reqmodels(req, res, next));


module.exports = get //i edited this
