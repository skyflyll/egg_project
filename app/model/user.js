// {app_root}/app/model/user.js
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ObjectId = mongoose.ObjectId;
    
    const UserSchema = new Schema({
        userName: { type: String  },
        password: { type: String  },
        avatar: { type: String },
        discribe: { type: String }
        // email: { type: String },
    });
  
    return mongoose.model('User', UserSchema);
  }