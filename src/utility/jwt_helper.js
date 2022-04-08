require('../config/config');

const createError = require('http-errors');

var JWT = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET

class VerifyToken {

    verifyAccessToken(req, res, next){

        if (!req.headers['authorization']) return next(createError.Unauthorized())

        // let token = req.headers["authorization"];  

        var token = req.headers.authorization.split(' ')[1];
        
        JWT.verify(token, SECRET, (err, payload)=>{

            if (err){

                console.log('err.message', err.message)
            
                return next(createError.Unauthorized())
    
            }

            const {
                userId, name, role, iat, exp, iss, sub
              } = payload;
            console.log("Passed", token, SECRET)

            req.userId = userId;  
            req.name = name;   
            req.role = role 

            next()


        })
        
    }


}

export default VerifyToken;