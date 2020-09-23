export const userLogged = (req, res, next) => {
  console.log(req.isAuthenticated(), 'in');
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).end();
}

export const userLoggedOut = (req, res, next) => {
  console.log(req.isAuthenticated(), 'out');
  if (req.isAuthenticated()) {
    res.status(401).end();
  }
  next();
}
