import mongoose from "mongoose";

const coursePosts = mongoose.Schema(
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
        courseName : {
            type : String,
            required : true
        },
        category : {
            type : String,
        },
        review : {
            type: String,
            required : true
        },
        link : {
            type : String,
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

export default mongoose.model('coursePosts',coursePosts); 