const { Router } = require("express");
const messages = require("../messagesDb");

const messageRouter = Router();

messageRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const message = messages.find((msg) => msg.id === parseInt(id));
  if (message) {
    res.render("messageDetails", { message: message });
  } else {
    res.status(404).send("Message not found");
  }
});

module.exports = messageRouter;
