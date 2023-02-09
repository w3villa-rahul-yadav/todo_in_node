const updateController = {};
const fs = require("fs");

updateController.update = (req, res) => {
    let contentPath = `${process.cwd()}/test1.json`;

    fs.readFile(contentPath, (error, data)=>{
        if (error) {
            console.log(error)
        }
        console.log(data.toString())

        // const parsedData = JSON.parse(data);
        data[0].task = "not ready";

        fs.writeFile(contentPath, JSON.stringify(data[0].task, null, 2), err => {
            if(err){
                console.log("These is an error: ", err)
            }
            else {
                console.log("Updated Successfully")
            }
        })
        
    })
}

module.exports = updateController;