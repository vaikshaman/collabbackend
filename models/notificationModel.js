import mongoose from "mongoose";

const notificationSchema = mongoose.Schema({
    senderName: { type: String, required: true },
    senderEmail: { type: String, required: true },
    receiverEmail: { type: String, required: true },
    project: { type: String, required: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    collaborationStatus: { type: String, default: "Pending" },
}, {
    timestamps: true
});

export default mongoose.model("Notification", notificationSchema);