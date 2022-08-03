const express = require("express");
const router = express.Router();
const { Favourite } = require("../model/index");

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Favourite.findAll({ where: { userId: id } }).then((favourite) =>
    res.send(favourite)
  );
});

router.post("/add", async (req, res, next) => {
  const { id, title, poster_path, description, user, category } = req.body;

  const respuesta = await Favourite.findOrCreate({
    where: { userId: user, favoriteId: id },
    defaults: {
      favoriteId: id,
      favoriteTitle: title,
      poster_path: poster_path,
      description: description,
      category: category,
    },
  });

  if (respuesta[1]) {
    res.status(200).json({
      succes: true,
      message: "La pelicula se agrego con exito a favoritos.",
    });
  } else {
    res.send(respuesta);
  }
});

router.delete("/:user/:id/delete", (req, res) => {
  Favourite.destroy({
    where: {
      favoriteId: req.params.id,
      userId: req.params.user,
    },
  }).then(() => {
    res.sendStatus(200);
  });
});

router.get("/:user/favoritos/:id", (req, res, next) => {
  const user = req.params.user;
  const id = req.params.id;
  Favourite.findOne({
    where: {
      userId: user,
      favoriteId: id,
    },
  })
    .then((resultados) => {
      console.log(resultados);
      if (!resultados) {
        res.status(400).json({
          success: false,
          message: "not in favorites",
        });
      } else {
        res.status(200).json({
          success: true,
          resultados: resultados,
        });
      }
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/:user/:categoria/:id", (req, res, next) => {
  const user = req.params.user;
  const id = req.params.id;
  const category = req.params.categoria;
  Favourite.findOne({
    where: {
      userId: user,
      favoriteId: id,
      category,
    },
  })
    .then((resultados) => {
      console.log(resultados);
      if (!resultados) {
        res.status(400).json({
          success: false,
          message: "not in favorites",
        });
      } else {
        res.status(200).json({
          success: true,
          resultados: resultados,
        });
      }
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
