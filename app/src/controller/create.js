const createController = {};
const fs = require("fs");
const validateParamsHandler = require("../handler/validateParams");
const requestParamsValidations = require("../handler/requestParams.json");

createController.create = async (req, res)=>{
    try{
        await validateParamsHandler.create(Object.keys(req.body), requestParamsValidations.create );
        let contentPath = `${process.cwd()}/test1.json`;        
        const content = fs.readFileSync(contentPath);
        let data = content.toString();
        const getCurrentDate = ()=> {
            let currentDate = new Date();
            let cDay = currentDate.getDate();
            let cMonth = currentDate.getMonth() + 1;
            let cYear = currentDate.getFullYear();
            let finaleDate = (cDay + "/" + cMonth + "/" + cYear);
            return finaleDate;
        }
        const getCurrentTime = () =>{
            let currentDate = new Date();
            let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
            return time;
        }
        if(!data) {
            req.body.id = !data ? 1 :  data.length + 1;
            req.body.date = getCurrentDate();
            req.body.time = getCurrentTime();
            data = [req.body];
        }
        else {
            data = JSON.parse(data);
            // checking if the id exists
            
            // let newData = data.filter(value => value.id == req.body.id)
            // if (newData.length == 0 ){
                //     data.push(req.body);
                // }
                // else {
                    //     console.log("This id exists")
                    // }
            req.body.id = !data ? 1 :  data.length + 1;
            req.body.date = getCurrentDate();
            req.body.time = getCurrentTime();
            data.push(req.body);
        }  
        data = JSON.stringify(data);
        fs.writeFile(contentPath, data, (err)=>{
            if (err) throw err;
            console.log("complete !!");
        })
        res.send("Send successfully ")
    }
    catch(error) {
        console.log("Error: ", error)
    }
}


module.exports = createController;