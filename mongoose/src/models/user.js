const User = mongoose.model("users", {
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



// const me = new User({
//   name: "Satish",
//   email: "SatishkumaR@gmail.com",
//   password: "1234567pas",
// });
