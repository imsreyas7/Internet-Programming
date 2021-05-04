const mongo = require("mongodb");
const fs = require("fs");
const url = "mongodb://localhost:27017/mydb";

async function retrieveDocs(){
    let client;
    let result = null;

    try{
        client = await mongo.connect(url);
        const dbo = client.db("mydb");

        result = await dbo.collection("music").find().toArray();
        result = result.sort((a,b) =>
        a.artist.localeCompare(b.artist));
        await client.close();
    }
    catch (error){
        console.error(error);
    }
    console.log(result);
    return result;
};

function writeToFile(data){
    let filedata = "";

    for(let record in data){
        filedata = filedata + JSON.stringify(data[record]) + "\n";
    }

    fs.writeFile("output.txt",filedata,(error) => {
        if(error){
            console.log(error);
        } else {
            console.log("Success!");
        }
    });
}

(async function driverCode(){
    let data = await retrieveDocs();
    writeToFile(data);
})();

