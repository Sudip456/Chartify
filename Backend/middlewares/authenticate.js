import jwt from "jsonwebtoken";

function authenticate(req, res, next) {
  const auth_token = req.cookies.token;
  console.log("Auth Token: ", auth_token);

  if (!auth_token) {
    return res.status(401).send("Access Denied. No token provided.");
  }

  jwt.verify(auth_token, process.env.JWT_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).send("Invalid or expired token");
    }

    req.userId = decoded.id; // Store user ID in request
    console.log("User ID: ", req.userId);

    next();
  });
}

export default authenticate;
