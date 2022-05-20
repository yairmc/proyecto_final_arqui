const inhabitantService = require("../services/inhabitantsService");
const employeesService = require("../services/employeesService");
const jwt = require("jsonwebtoken");
const {findInhabitant} = inhabitantService
const {findEmployee} = employeesService


const authenticateInhabitant = async(req,res)=>{
    try {
        const {body} = req;
        const inhabitant = await findInhabitant(body)
        if(!inhabitant){
            return res.status(404).json({msg: "Invalid credentials"})
        }
        const newInhabitant = {
            name: inhabitant.name,
            _id: inhabitant._id
        }
        const token = jwt.sign(newInhabitant, "SECRET", {
            expiresIn: "1d"
        })
        res.status(200).json({token})
    } catch (error) {
        res.status(500).json({msg: "Error while creating token"})
    }
}
const authenticateEmployee = async(req,res)=>{
    try {
        const {body} = req;
        const employee = await findEmployee(body)
        if(!employee){
            return res.status(404).json({msg: "Invalid credentials"})
        }
        const newEmployee = {
            name: employee.name,
            _id: employee._id
        }
        const token = jwt.sign(newEmployee, "SECRET", {
            expiresIn: "1d"
        })
        res.status(200).json({token})
    } catch (error) {
        res.status(500).json({msg: "Error while creating token"})
    }
}

const checkToken = (req,res)=>{
    try {
        let token = ""
        const {authorization} = req.headers
        token = authorization.split(" ")[1]
        const decode = jwt.verify(token, "SECRET")
        if(!decode){
            return res.status(401).json({access: false});
        }
        res.status(200).json({access:true});
    } catch (error) {
        return res.status(500).json({access: false});
    }
}


module.exports = {
    authenticateInhabitant,
    authenticateEmployee,
    checkToken
}