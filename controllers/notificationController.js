// import Notification from '../models/notificationModel';
// import User from '../models/profileModel';
// import authenticateToken from '../middleware/authenticatemail';

// const sendNotification = async(req, res) => {
//     const { recipientEmail, projectName } = req.body;

//     try {
//         const recipient = await User.findOne({ email: recipientEmail });
//         if (!recipient) {
//             return res.status(404).json({ message: 'Recipient not found' });
//         }

//         const newNotification = new Notification({
//             name: req.user.name,
//             email: req.user.email,
//             project: projectName,
//         });

//         await newNotification.save();

//         res.status(201).json({ message: 'Notification sent successfully' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// const getAllNotifications = async(req, res) => {
//     try {
//         const userNotifications = await Notification.find({ email: req.user.email });

//         res.status(200).json({ notifications: userNotifications });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// export { sendNotification, getAllNotifications };