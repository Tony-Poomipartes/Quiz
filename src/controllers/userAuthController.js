const bcrypt = require("bcrypt");
const emailValidator = require("email-validator");
const { User } = require("../models");

function renderLoginPage(req, res) {
  res.render("login");
}

function renderSignupPage(req, res) {
  res.render("signup");
}

async function handleSignupForm(req, res) {
  try {
    const { firstname, lastname, email, password, confirmation } = req.body;

    if (password !== confirmation) {
      res.status(400).render("signup", { errorMessage: "Le mot de passe et sa confirmation ne correspondent pas." });
      return;
    }

    if (! emailValidator.validate(email)) {
      res.status(400).render("signup", { errorMessage: "L'email renseigné est dans un format invalide." });
      return;
    }

    if (! firstname || ! lastname) {
      res.status(400).render("signup", { errorMessage: "Les champs Prénom et Nom sont obligatoires." });
      return;
    }

    if (! password || password.length < 8) {
      res.status(400).render("signup", { errorMessage: "Le mot de passe doit faire plus de 8 caractères." });
      return;
    }

    const existingUserWithMatchingEmail = await User.findOne({ where: { email }});
    if (existingUserWithMatchingEmail) {
      res.status(400).render("signup", { errorMessage: "Ce mail est déjà utilisé." });
      return;
    }

    const saltRounds = parseInt(process.env.SALT_ROUNDS);
    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    await User.create({
      firstname,
      lastname,
      email,
      password: encryptedPassword
    });

    res.redirect("/login");

  } catch (error) {
    console.error(error);
    res.status(500).render("500");
  }
}

async function handleLoginForm(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email }});
    if (! user) {
      return res.status(401).render("login", { errorMessage: "Le mot de passe et/ou l'email sont incorrectes." });
    }

    const isMatchingPassword = await bcrypt.compare(password, user.password);
    if (! isMatchingPassword) {
      return res.status(401).render("login", { errorMessage: "Le mot de passe et/ou l'email sont incorrectes." });
    }

    req.session.userId = user.id;

    res.redirect("/");

  } catch (error) {
    console.error(error);
    res.status(500).render("500");
  }
}

async function logoutAndRedirect(req, res) {
  req.session.userId = null;

  res.redirect("/");
}

module.exports = {
  renderLoginPage,
  renderSignupPage,
  handleLoginForm,
  handleSignupForm,
  logoutAndRedirect
};
