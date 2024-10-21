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

            console.log(decoded); 

            const userFound = await User.findOne({ _id: decoded?.user?.user_id }).exec();

            if (!userFound) return res.status(401).json({ message: "Unauthorized" });

            if (userFound) {
                userFound.last_time_active = new Date().toISOString();
            };

            const access = jwt.sign(
                {
                    "user": {
                        "user_id": userFound._id, 
                        "username": userFound.username, 
                        "first_name": userFound.first_name, 
                        "other_names": userFound.other_names, 
                        "last_name": userFound.last_name, 
                        "user_image": userFound.user_image_path.url, 
                        "enterprise_name": userFound.enterprise_name, 
                        "email": userFound.email, 
                        "phone": userFound.phone, 
                        "address": userFound.address, 
                        "role": userFound.role, 
                        "verified": userFound.verified, 
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






    // jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET, async (error, decoded) => {
    //     if (error) {
    //         return res.status(403).json({ message: "Forbidden" });
    //     }

    //     console.log(decoded);

    //     try {
    //         const userFound = await User.findById(decoded.user.user_id).exec();

    //         if (!userFound) {
    //             return res.status(401).json({ message: "Unauthorized" });
    //         }

    //         // Update the last_time_active field
    //         userFound.last_time_active = new Date().toISOString();
            
    //         // Generate new access token
    //         const access = jwt.sign(
    //             {
    //                 user: {
    //                     user_id: userFound._id,
    //                     username: userFound.username,
    //                     first_name: userFound.first_name,
    //                     other_names: userFound.other_names,
    //                     last_name: userFound.last_name,
    //                     user_image: userFound.user_image_path.url,
    //                     enterprise_name: userFound.enterprise_name,
    //                     email: userFound.email,
    //                     phone: userFound.phone,
    //                     address: userFound.address,
    //                     role: userFound.role,
    //                     verified: userFound.verified,
    //                 }
    //             },
    //             process.env.ACCESS_TOKEN_SECRET,
    //             { expiresIn: '5m' } // Using string for expiration
    //         );

    //         // Save the updated user document
    //         await userFound.save();

    //         // Respond with the new access token
    //         res.json({ access });
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).json({ message: "Internal server error" });
    //     }
    // });
}; 


export default refreshTokenHandler; 