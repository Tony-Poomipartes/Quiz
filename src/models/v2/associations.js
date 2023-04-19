const Quiz = require("./Quiz");
const User = require("./User");
const Question = require("./Question");
const Level = require("./Level");
const Tag = require("./Tag");
const Answer = require("./Answer");


User.hasMany(Quiz, {
  foreignKey: "user_id",
  as: "quizzes"
});
Quiz.belongsTo(User, {
  foreignKey: "user_id",
  as: "author"
});


Quiz.hasMany(Question, {
  foreignKey: "quiz_id",
  as: "questions"
});
Question.belongsTo(Quiz, {
  foreignKey: "quiz_id",
  as: "quiz"
});


Level.hasMany(Question, {
  foreignKey: "level_id",
  as: "questions"
});
Question.belongsTo(Level, {
  foreignKey: "level_id",
  as: "level"
});


Quiz.belongsToMany(Tag, {
  through: "quiz_has_tag",
  as: "tags",
  foreignKey: "quiz_id"
});
Tag.belongsToMany(Quiz, {
  through: "quiz_has_tag",
  as: "quizzes",
  foreignKey: "tag_id"
});


Question.hasMany(Answer, {
  foreignKey: "question_id",
  as: "propositions"
});
Answer.belongsTo(Question, {
  foreignKey: "question_id",
  as: "question"
});


Question.belongsTo(Answer, {
  foreignKey: "answer_id",
  as: "good_answer"
});
Answer.hasOne(Question, {
  foreignKey: "answer_id",
  as: "good_answer"
});


module.exports = { User, Quiz, Question, Level, Tag, Answer };
