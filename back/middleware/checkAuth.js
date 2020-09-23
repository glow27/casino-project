export const userLogged = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  console.log('hi');
  res.status(401).end();
}

export const userLoggedOut = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(401).end();
  }
  next();
}
