const mongoose = require("mongoose");
var Validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Task = require("./task");
const userSchema = mongoose.Schema(
  {
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
    tokens: [
      {
        token: {
          type: String,
          trim: true,
        },
      },
    ],
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
  },
  {
    timestamps: true,
  }
);

/// make a connection btn the user collection and task collection

// these examplet is copyed from the mongodb offical docs just for refernce anthi
// blogPostSchema.virtual('author', {
//   ref: 'User',
//   localField: 'authorId',
//   foreignField: '_id',
//   justOne: true
// });

userSchema.virtual("mytasks", {
  ref: "tasks",
  localField: "_id",
  foreignField: "owner",
});

// these method are accessed on the userscheme Object ( like in C++ these  are accessed on the Users Object, or instante)
/// these one must be not arrow function becoz in arrow function this keyword refer to the global scope
userSchema.methods.generateJsonWebToken = async function () {
  const user = this;
  // console.log(user, user._id.toString());
  const token = jwt.sign(
    { _id: user._id.toString() },
    "harishkumar(securityKey)"
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  // console.log("tokentoken",token);
  return token;
};
// userSchema.methods.toJSON = async function () {
//   const user = this;
//   const updatedObject = user.toObject();
//   console.log(updatedObject);
//   delete updatedObject.tokens;
//   delete updatedObject.password;

//   console.log(updatedObject);
//   return user;
//   // return "updatedObject";
// };

/// validating the user email and password and by adding the static method to the schema Model
// note static method are access on the user scheme ( like in c++ class static methods)

userSchema.statics.validUserLogin = async (email, password) => {
  const findingUser = await User.findOne({ email });
  // console.log("findingUser", findingUser);
  if (!findingUser) {
    throw new Error("no user was found with that email");
  }
  const passwordValidate = await bcrypt.compare(password, findingUser.password);
  // console.log("findingUser", passwordValidate);
  if (!passwordValidate) {
    // console.log("findingUser", passwordValidate);
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

userSchema.pre("remove", async function (next) {
  const user = this;
  await Task.deleteMany({ owner: user.id });
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
