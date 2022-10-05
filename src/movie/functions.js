const Movie = require("./table");

exports.addMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject);
    } catch(error) {
        console.log(error);
    }
}

exports.listMovies = async () => {
    try {
        return await Movie.findAll();
    } catch (error){
        console.log(error)
    };
};

exports.updateMovie = async (movieObject) => {
    try {
        Movie.update({movieObject});
    }catch(error) {
        console.log(error);
    };
};

exports.deleteMovie = async (movieObject) => {
    try {
        await Movie.destroy({where: movieObject});
    } catch (error) {
        console.log(error);
    };
};