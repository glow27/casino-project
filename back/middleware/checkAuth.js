export const userLogged = (req, res, next) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).end();
}

export const userLoggedOut = (req, res, next) => {

  if (req.isAuthenticated()) {
    res.status(401).end();
  }
  next();
}
