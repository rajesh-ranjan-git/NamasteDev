export const otherMiddleware = (req, res, next) => {
  console.log("Some other middleware executed...!");
  next();
};
