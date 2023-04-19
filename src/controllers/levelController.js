const { Level } = require("../models");

const levelController = {
  async renderLevelsPage(req, res) {
    const levels = await Level.findAll();

    res.render("levels", { levels });
  },

  async handleCreateLevelForm(req, res) {
    const body = req.body;

    const existingLevel = await Level.findOne({ where: { name: body.name } });

    if (existingLevel) {
      res.render("levels", { isError: true, levels: await Level.findAll() });
      return;
    }

    await Level.create({ name: body.name });

    res.render("levels", { isSuccess: true, levels: await Level.findAll() });
  }
};

module.exports = levelController;
