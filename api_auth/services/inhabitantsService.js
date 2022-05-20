const axios = require("axios");
const URL = "http://localhost:3002/inhabitants"
const findInhabitant = async(user)=>{
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
    findInhabitant
}