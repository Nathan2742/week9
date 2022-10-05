const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovies, deleteMovie } = require("./movie/functions");

const app = async (yargsObject) => {
    try {
        await sequelize.sync();
        if (yragsObject.create) {
            await addMovie ({title: yargsObject.title, actor: yargsObject.actor});
            console.log(await listMovies());
            // create
        } else if (yargsObject.read) {
            console.log(await listMovies());
            // read
        } else if (yargsObject.update) {
            await updateMovie ({title: yargsObject.title, actor: yargsObject.actor});
            console.log(await listMovies());
            // update
        } else if (yargsObject.destory) {
            await deleteMovie ({title: yargsObject.title, actor: yargsObject.actor});
            console.log(await listMovies());
            // delete 
        } else {
            console.log("incorrect command");
        }

    } catch(error) {
        console.log(error);
    };
};

app(yargs.argv);