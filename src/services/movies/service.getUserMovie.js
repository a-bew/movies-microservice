// const db = require('../config/db.config.js');
var db = require('../../models');

const User = db.User;
const Role = db.Role;
const Movie = db.Movie;


export const getUserMovie = async (userId) => {
    
    return new Promise( async (resolve, reject) => {

        try {
        
            const movies = await Movie.findAll({
              where:{
                userId: userId
              }
            });
      
            return resolve(movies)
      
          } catch (error) {
      
            console.log("error message", error.message);
      
            reject({status:500, message: error.message});
      
          }
      
    })

}
  