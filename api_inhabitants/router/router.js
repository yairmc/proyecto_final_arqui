const express=require('express');
const router=express.Router();
const inhabitantsController=require('../controllers/inhabitantsController')

const {getAll,getById,addNew,deleteById,update,getUserByCredentials}= inhabitantsController;

router.get('/inhabitants', getAll)
router.get('/inhabitants/:id', getById)
router.post('/inhabitants', addNew)
router.post("/inhabitants/credentials", getUserByCredentials)
router.delete('/inhabitants/:id', deleteById)
router.put('/inhabitants/:id', update)

module.exports=router;