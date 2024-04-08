import mongoose from "mongoose";

const communityPost = mongoose.Schema(
    {
        authorEmail : 
        {
            type : String,
            required : true,
        },
        authorName : {
            type : String,
            required : true
        },
        question : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        postType : {
            type: String,
            required : true
        },
        comments : [
            {
                commenterEmail : {
                    type : String,
                    required : true
                },
                commenterName : {
                    type : String,
                    required : true
                },
                comment : {
                    type : String,
                    required : true
                },
                timestamps : {
                    type: Date,
                    default : Date.now
                }
            }
        ]
    }
,{timestamps : true})

export default mongoose.model('CommunityPosts',communityPost); 