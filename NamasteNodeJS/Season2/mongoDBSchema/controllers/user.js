import User from "../models/user.js";

export const signUp = (req, res) => {
  try {
    const user = new User({
      firstName: "Rajesh",
      lastName: "Ranjan",
      age: 29,
      email: "rajesh@ranjan.com",
      password: "rajesh@ranjan",
      city: "Noida",
    });

    user.save();

    res.send({
      status: "ok",
      message: "User created successfully...! ",
    });
  } catch (error) {
    console.error("An Error occurred while creating user : ", error);
    res.send({
      status: "fail",
      error: error,
      message: "An Error occurred while creating user...! ",
    });
  }
};

export const signIn = (req, res) => {
  try {
    const user = {
      email: "rajesh@ranjan.com",
      password: "rajesh@ranjan",
    };

    if (user.password === "rajesh@ranjan") {
      res.send({
        status: "ok",
        message: "Sign In successful...! ",
      });
    } else {
      res.send({
        status: "fail",
        message: "Incorrect password..!",
      });
    }
    console.log("Sign In successful..!")
  } catch (error) {
    console.error("An Error occurred while signing in : ", error);
    res.send({
      status: "fail",
      error: error,
      message: "An Error occurred while signing in...! ",
    });
  }
};
