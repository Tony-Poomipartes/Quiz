const { Quiz } = require("../models");

const quizController = {
  async renderQuizPage(req, res) {
    try {

      const quizId = parseInt(req.params.id);

      const quiz = await Quiz.findByPk(quizId, {
        include: [
          { association: "author" },
          { association: "tags" },
          { association: "questions", include: ["level", "propositions"] },
        ]
      });

      if (! quiz) {
        res.status(404).render("404");
        return;
      }

      res.render("quiz", { quiz });

    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  }
};

module.exports = quizController;
