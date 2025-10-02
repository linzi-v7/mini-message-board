const { Router } = require("express");

const indexRouter = Router();
const messages = require("../messagesDb");

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.post("/new", (req, res) => {
  const { message, user } = req.body;
  messages.push({
    id: messages.length + 1,
    text: message,
    user: user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
