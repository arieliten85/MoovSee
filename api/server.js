const express = require("express");
const cors = require("cors");
const app = express();
const volleyball = require("volleyball");
const routes = require("./routes");
const db = require("./config/db");

const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;
const User = require("./model/User");

//Middelware
app.use(volleyball);
app.use(express.json());
app.use(cors());
app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//PassPort
app.use(
  session({
    secret: "tmdb",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: true,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

//Estrategia de Passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },

    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          //valido que es Usuario
          if (!user) done(null, false);
          //valido la contraseña
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) done(null, false);
            //returno el usuario logeado
            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id)
    .then((user) => done(null, user))
    .catch(done);
});

//Rutas
app.use("/api", routes);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/404.html"));
});

//Alta servidor
db.sync({ force: false })
  .then(function () {
    app.listen(4000, () => {
      console.log("Servidor corriendo en el puerto http://localhost:4000");
    });
  })
  .catch(console.error);
