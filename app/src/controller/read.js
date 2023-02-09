const readController = {};
const fs = require("fs");
const validateParamsHandler = require("../handler/validateParams");
const showParamsValidations = require("../handler/requestParams.json");

readController.read = async (req, res) => {
    try{
        await validateParamsHandler.read( showParamsValidations.read)
        let contentPath = `${process.cwd()}/test1.json`;
        const content = fs.readFileSync(contentPath);
        console.log(content.toString())
        res.send(content.toString())
    }catch(error){
        console.log("Error: ", error)
    }
}

module.exports = readController;