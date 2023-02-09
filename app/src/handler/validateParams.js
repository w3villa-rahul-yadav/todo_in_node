const validateParamsHandler = {};

validateParamsHandler.create = (data, requiredData)=>{
    try {
        requiredData.map(function(item, index){
            let check = data.includes(item);
            if (check) {
                return true;
            }
            throw ('Invalid Params');
        });
    } catch (err) {
        console.log(err);
        throw (err);
    }
}

validateParamsHandler.read = (data, showData)=>{
    try{
        return ;
    }catch(err){
        console.log(err)
        throw(err)
    }
}


module.exports = validateParamsHandler;