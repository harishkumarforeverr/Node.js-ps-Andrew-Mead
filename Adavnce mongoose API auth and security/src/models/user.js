const mongoose = require("mongoose");
var Validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true,
    validate: {
      validator: (val) => {
        if (!Validator.isEmail(val)) {
          throw new Error("Please provide a valid mail");
        }
      },
    },
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minLength: 7,
    validate: {
      validator: (val) => {
        if (val.toLowerCase().includes("password")) {
          throw new Error(
            "password values should not coantin the assword string"
          );
        }
      },
    },
  },
  age: {
    type: Number,
    default: 0,
    validate: {
      validator: function (val) {
        if (val < 0) {
          throw new Error("age muste be greater than 0");
        }
      },
    },
  },
});

/// validating the user email and password and by adding the static method to the schema Model

userSchema.statics.validUserLogin = async (email, password) => {
  const findingUser = await User.findOne({ email });
  console.log("findingUser", findingUser);
  if (!findingUser) {
    throw new Error("no user was found with that email");
  }
  const passwordValidate = await bcrypt.compare(password, findingUser.password);
  console.log("findingUser", passwordValidate);
  if (!passwordValidate) {
    throw new Error("please provide a valid password");
  }
  return findingUser;
};

/// bscrpts.js npm pratoise code
// const bcrypt = require("bcryptjs");
// const password = "harish123";
// const main = async () => {
//   const hash = await bcrypt.hash(password, 8);
//   console.log(hash);
//   const res = await bcrypt.compare("harish123", hash);
//   console.log(res);
// };
// main();

// converting the plain password to the hash password
userSchema.pre("save", async function (next) {
  const user = this; // here this keyword is the current instant that is creating or udating one
  if (user.isModified("password")) {
    const password = user.password;
    user.password = await bcrypt.hash(password, 8);
  }
  next();
});
const User = mongoose.model("users", userSchema);

module.exports = User;

// const me = new User({
//   name: "Satish",
//   email: "SatishkumaR@gmail.com",
//   password: "1234567pas",
// });
// const main = async () => {
//   try {
//     const res = await me.save();
//     console.log(res);
//   } catch (error) {
//     console.log("something went wrong", error);
//   }
// };

// main();
