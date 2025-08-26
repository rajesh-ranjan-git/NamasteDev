export const signUpRequestValidator = (req, res) => {
  const body = req?.body;

  if (!body) {
    res.status(400).send({
      status: "fail",
      message: "INVALID REQUEST",
    });
    return;
  }

  if (!body?.firstName || !body?.email || !body?.password) {
    res.status(400).send({
      status: "fail",
      message: "INVALID REQUEST",
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body?.email.trim().toLowerCase())) {
    res.status(400).send({
      status: "fail",
      message: "INVALID EMAIL",
    });
    return;
  }

  const nameRegex = /^[A-Za-z.-]+$/;
  if (
    !nameRegex.test(body?.firstName.trim().toLowerCase()) ||
    (body?.lastName && !nameRegex.test(body?.lastName.trim().toLowerCase()))
  ) {
    res.status(400).send({
      status: "fail",
      message: "INVALID NAME",
    });
    return;
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).{6,}$/;
  if (body?.password && !passwordRegex.test(body?.password)) {
    res.status(400).send({
      status: "fail",
      message: "INVALID PASSWORD COMBINATION",
    });
    return;
  }

  if (body?.age && typeof body?.age !== "number") {
    res.status(400).send({
      status: "fail",
      message: "INVALID AGE",
    });
    return;
  }

  if (
    body?.gender &&
    !["male", "female", "other"].includes(body?.gender.trim().toLowerCase())
  ) {
    res.status(400).send({
      status: "fail",
      message: "INVALID GENDER",
    });
    return;
  }

  return body;
};
