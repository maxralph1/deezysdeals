import jwt from 'jsonwebtoken'; 
import User from '../../models/User.js'; 


const refreshTokenHandler = async (req, res) => {
    const cookies = req?.cookies; 

    if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized" }); 

    const refresh = cookies?.jwt; 

    jwt.verify(
        refresh, 
        process.env.REFRESH_TOKEN_SECRET, 
        async (error, decoded) => {
            if (error) return res.status(403).json({ message: "Forbidden" }); 

            const userFound = await User.findOne({ _id: decoded?.user_id }).exec();

            if (!userFound) return res.status(401).json({ message: "Unauthorized" });

            if (userFound) {
                userFound.last_time_active = new Date().toISOString();
            };

            const access = jwt.sign(
                {
                    "user": {
                        "user_id": userFound?._id, 
                        "username": userFound?.username, 
                        "role": userFound?.role
                    }
                }, 
                process.env.ACCESS_TOKEN_SECRET, 
                { expiresIn: 5 * 60 }
            );

            userFound.save(error => {
                if (error) return res.status(400).json(error); 

                res.json({ access })
            });
        }
    );
}; 


export default refreshTokenHandler; 