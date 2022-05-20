const axios = require("axios");
const URL = "http://localhost:3004/employees"
const findEmployee = async(user)=>{
    try {

        const respone = await axios.post(`${URL}/credentials`, user)
        const inhabitant = respone.data;
        
        if(!inhabitant){
            return null;
        }
        return inhabitant;
        
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    findEmployee
}