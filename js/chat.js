function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const message = input.value.trim();

  if (message === "") return;

  const userMsg = document.createElement("div");
  userMsg.className = "chat-message user-message";
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);

  const botMsg = document.createElement("div");
  botMsg.className = "chat-message bot-message";
  botMsg.textContent = message;
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
