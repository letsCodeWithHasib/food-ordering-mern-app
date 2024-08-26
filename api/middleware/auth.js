import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const { token } = req.cookies();

  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }

  try {
    const decoded_token = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

export default auth;
