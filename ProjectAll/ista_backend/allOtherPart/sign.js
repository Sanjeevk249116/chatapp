const bcrypt = require("bcrypt");
const { SignUpModel } = require("../models/SignupModel");
exports.PostSigup = async (req, res) => {
  const { email, name, password } = req.body;
  const email_check = await SignUpModel.find({ email });
  if (email_check.length > 0) {
    return res.status(409).send({ msg: "email is already register" });
  }
  bcrypt.hash(password, 2, async function (err, hash) {
    const signupData = new SignUpModel({
      name,
      email,
      password: hash,
    });
    await signupData.save();
    res.send({ signup: signupData });
  });
};
