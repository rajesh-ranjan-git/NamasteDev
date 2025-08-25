export const authMiddleware = (req, res, next) => {
  console.log("Auth Middleware executed...!");
  next();
};
