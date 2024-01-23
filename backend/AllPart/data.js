var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SignUpModel } = require("../models/signup");

exports.signupPost = async (req, res) => {
  const { name, email, password, dob, phone } = req.body;
  const data = await SignUpModel.find();
  const dt1 = data.filter((el) => {
    return el.email == email || el.phone == phone;
  });
  if (dt1.length > 0) {
    return res.status(410).send({ msg: 410 });
  }
  await bcrypt.hash(password, 4, async function (err, hash) {
    if (err) {
      return res.status(500).send({ msg: "Error hashing password" });
    }
    const dt = new SignUpModel({
      name,
      email,
      dob,
      password: hash,
      phone,
    });

    try {
      await dt.save();
      res.status(200).send({ msg: 200 });
    } catch {
      res.status(401).send({ msg: 401 });
    }
  });
};

exports.logInPost = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await SignUpModel.findOne({ email });

    if (!user) {
      return res.status(405).send({ msg: "Details are not exists" });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error("Error comparing passwords:", err);
        return res.status(500).send({ msg: "Internal Server Error" });
      }

      if (result) {
        res.status(200).send({ msg: "Login successful" });
      } else {
        res.status(401).send({ msg: "Incorrect password" });
      }
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

exports.getChat = async (req, res) => {
  const dt = await SignUpModel.find();
  res.status(200).send({ dt });
};

exports.getSingleChat = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await SignUpModel.findOne({ _id: id });

    res.send({ data });
  } catch (err) {
    console.log("item not add to card");
  }
};
