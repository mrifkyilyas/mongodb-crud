const express = require('express')
const route = express.Router()
const {getAll,create,update,deleteOne} = require('../controllers/index') 

route.get('/',getAll)
route.post('/',create)
route.put('/:id',update)
route.delete('/:id',deleteOne)







module.exports = route