import User from "../models/user.js";
import { signUpRequestValidator } from "../utils/requestValidators.js";
import { signInRequestValidator } from "../utils/requestValidators.js";

export const signUp = async (req, res) => {
  const body = signUpRequestValidator(req, res);

  if (!body) {
    return;
  }

  try {
    const existingUser = await User.findOne({ email: body?.email });

    if (existingUser) {
      res.status(400).send({
        status: "fail",
        message: "USER ALREADY EXISTS",
      });
      return;
    }

    const user = new User({
      firstName: body?.firstName,
      lastName: body?.lastName,
      email: body?.email,
      password: body?.password,
      age: body?.age,
      gender: body?.gender,
      city: body?.city,
      designation: body?.designation,
      skills: body?.skills,
      hobbies: body?.hobbies,
    });

    user.save();

    res.status(201).send({
      status: "ok",
      message: "USER CREATED",
    });
    return;
  } catch (error) {
    console.error("AN ERROR OCCURRED", error);
    res.status(500).send({
      status: "fail",
      error: error,
      message: "AN ERROR OCCURRED",
    });
    return;
  }
};

export const signIn = async (req, res) => {
  const body = signInRequestValidator(req, res);

  if (!body) {
    return;
  }

  try {
    const existingUser = await User.findOne({ email: body.email });

    if (!existingUser) {
      res.status(404).send({
        status: "fail",
        message: "NO USER FOUND",
      });
      return;
    }

    if (!existingUser.email || !existingUser.password) {
      res.status(500).send({
        status: "fail",
        message: "INCONSISTENT USER DATA FOUND IN DATABASE",
      });
      return;
    }

    if (body.password === existingUser.password) {
      res.status(200).send({
        status: "ok",
        message: "SIGN IN SUCCESS",
      });
      return;
    } else {
      res.status(400).send({
        status: "fail",
        message: "SIGN IN FAILED",
      });
      return;
    }
  } catch (error) {
    console.error("AN ERROR OCCURRED", error);
    res.status(500).send({
      status: "fail",
      error: error,
      message: "AN ERROR OCCURRED",
    });
    return;
  }
};
