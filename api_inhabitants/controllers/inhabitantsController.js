const Inhabitants=require('../models/Inhabitants')

const getAll= async (req,res)=>{
    try {
        const inhabitants = await Inhabitants.find({});
        res.status(200).json(inhabitants);
    } catch (e) {
        
    }
}
const getById= async (req,res)=>{
    try {
        const inhabitant = await Inhabitants.findOne({_id:req.params.id});
        res.status(200).json(inhabitant);
    } catch (e) {
        
    }
}
const addNew= async (req,res)=>{
    try {
        const body=req.body;
        const inhabitant=new Inhabitants(body);
        const newInhabitant= await inhabitant.save();
        res.status(200).json(newInhabitant);
    } catch (e) {
        
    }
}
const deleteById= async (req,res)=>{
    try {
        await Inhabitants.findOneAndDelete({_id:req.params.id});
        res.status(200).json({msg: "Inhabitant deleted"});
        
    } catch (e) {
        
    }
}
const update= async (req,res)=>{
    try {
        const body=req.body;
        const inhabitant=await Inhabitants.findOneAndUpdate({_id:req.params.id},body, {new:true});
        res.status(200).json(inhabitant)
    } catch (e) {
        
    }
}

const getUserByCredentials = async(req,res)=>{
    try {
        
        const {body} = req;
        const inhabitant = await Inhabitants.findOne({
            name: body.name,
            secretKey: body.secretKey
        })

        res.status(200).json(inhabitant)
    } catch (error) {
        
    }
}


module.exports={
    getAll,
    getById,
    addNew,
    deleteById,
    getUserByCredentials,
    update
}