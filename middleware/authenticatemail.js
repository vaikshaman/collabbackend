// import jwt from 'jsonwebtoken';
// import User from '../models/profileModel';

// const secretKey = process.env.SECRET_KEY;

// const authenticateToken = async(req, res, next) => {
//     const token = req.header('x-auth-token');

//     if (!token) {
//         return res.status(401).json({ message: 'No token, authorization denied' });
//     }

//     try {
//         const decoded = jwt.verify(token, secretKey);
//         const user = await User.findOne({ email: decoded.email });

//         if (!user) {
//             return res.status(401).json({ message: 'Invalid token, user not found' });
//         }

//         req.user = user;
//         next();
//     } catch (error) {
//         console.error(error);
//         res.status(401).json({ message: 'Invalid token, authorization denied' });
//     }
// };

// export default authenticateToken;