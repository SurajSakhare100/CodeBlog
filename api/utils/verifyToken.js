import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
const secret = process.env.SECRET;
const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(404).send("not authenticated!");
    jwt.verify(token, secret, async (err, data) => {
      if (err) return res.status(404).json("token is not valid!");
      req.id = data.id;
      next();
    });
  } catch (error) {
    console.log(error);
  }
};

export default verifyToken;
