const { authFactory, AuthError } = require("../../services/auth/service.auth");

const { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
  throw new Error("Missing JWT_SECRET env var. Set it and restart the server");
}

const auth = authFactory(JWT_SECRET);

exports.authenticateUser = async (req, res, next)=>{
  
    try {

        if (!req.body) {
            return res.status(400).json({ error: "invalid payload" });
        }
        
          const { username, password } = req.body;
        
          if (!username || !password) {
            return res.status(400).json({ error: "invalid payload" });
          }
        
          try {
            const token = auth(username, password);
        
            return res.status(200).json({ token });
          } catch (error) {
            if (error instanceof AuthError) {
              return res.status(401).json({ error: error.message });
            }
        
            next(error);
        }

    } catch (error) {

        console.log(error.message);
        
        res.status(500).json({status: 500, message: error.message})

    }
  
}
  