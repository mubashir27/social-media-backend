import User from "../models/User.js";

const register = () => async (req, res) => {
  try {
    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const login = () => async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    if (user.password !== req.body.password)
      res.status(400).json("wrong password");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

export { register, login };
