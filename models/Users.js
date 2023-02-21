const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require:true,
    min: 4,
    max: 20,
    unique: true,
  }, 
  email: {
    type: String,
    require: true,
    unique: true,
    max: 50,
  }, 
  password: {
    type: String,
    require: true,
    min: 6,
  },
},
{timestamps: true}
);

module.exports = mongoose.model('User', UserSchema);