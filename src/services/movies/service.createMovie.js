// const db = require('../config/db.config.js');
var db = require('../../models');
const User = db.User;
const Role = db.Role;
const Movie = db.Movie;

export const moviePost = async (movie)=>{

    const { Title, Released, Genre, Director, userId, name, role } = movie;

    return new Promise( async (resolve, reject)=>{

        try {
            const [userObject, created] = await User.findOrCreate({
                    where: { name: userId },
                    defaults: {
                        id: userId,
                        name: name,
                        role: {
                            name: role
                        },
                        movies:[{
                            title: Title,
                            release: Released,
                            genre: Genre,
                            director: Director
                        }]
                }
              },{
                include: 
                [
                    {
                        model: Role,
                        as: 'role', 
                    },
                    {
                        model: Movie,
                        as: 'movies', 
                    },
                ]
            })


            if (!created){
                // Add movie for existing user
                const result = await userObject.movies.addMovies({
                    title: Title,
                    release: Released,
                    genre: Genre,
                    director: Director
                });    

                console.log("result", result);

            }

            return resolve({message: "Movie Added Successfully"})

        } catch (error) {
            reject({message: error.message})
        }
    })

}