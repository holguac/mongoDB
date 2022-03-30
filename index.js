require("dotenv").config();

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const yargsObj = yargs(hideBin(process.argv)).argv;

const { client, connection } = require("./db/connections");
const Film = require("./utils/index");
//index is automatically added! 

const app = async (yargsObj) => {
    const collection = await connection();
    const film = new Film(yargsObj.title, yargsObj.director);
    try {
        if(yargsObj.add) {
            await film.add(collection);
        } else if(yargsObj.list){
            const Film = await film.list(collection);
        } else if(yargsObj.update){
            console.log("update")
        } else if(yargsObj.delete) {
            console.log("delete")
        } else {
            console.log("unknown command")
        }

        await client.close();

    } catch (error) {
        await client.close();
        console.log(error);
    }
};

app(yargs.argv);