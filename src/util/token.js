const jwt = require('jsonwebtoken');
const user = require("../models/userModel");


const checkToken = (token,id,key)=>{

    try{
        
        const verificationer = jwt.verify(token,key);

        console.log("tokentokentoken");
            return verificationer;
    }
    catch(error)
    {
        
    }
};

const setToken = async(id,key) =>{

    console.log(id);
    if(id)
    {
        return jwt.sign({id},key,{expiresIn:28800});
    }
    return false;
}



module.exports = {
    checkToken,
    setToken,
}