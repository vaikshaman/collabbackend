
import mongoose from "mongoose";

const ProfileSchema = mongoose.Schema({
  imagePath : {
    type : String,
  },
  imageName : {
    type: String
  },
  userid: {
    type: String,
    required: true,
    unique: true
  },
  name: { type: String,  },
  email: { type: String,  },
  age: { type: Number,  },
  institute: { type: String,  },
  course: { type: String,  },
  interest: { type: String,  },
  branch: { type: String,  },
  skills: [
    {
      skill: { type: String, required: true  },
      level: { type: String, required: true },
      experience: { type: String, required: true },
      tools: { type: String, required: true }
    }
  ]
}, { timestamps: true });

export default mongoose.model('Profile', ProfileSchema);
