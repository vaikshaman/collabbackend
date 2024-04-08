// const Search = require("../models/profileModel");

// const searching = async(req, res) => {
//     try {
//         const search = req.body.search;

//         //case-insensitive
//         const regex = new RegExp(search, 'i');

//         const results = await Search.find({ "email": regex });

//         if (results.length > 0) {
//             res.status(200).send({ success: true, message: "Details", data: results });
//         } else {
//             res.status(200).send({ success: true, message: "Not found" });
//         }
//     } catch (err) {
//         console.error('Error searching profiles:', err);
//         res.status(500).send({ message: 'Internal Server Error' });
//     }
// };

// module.exports = searching;