const socket = io();

const messagesDiv = document.getElementById('messages');
const input = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', () => {
  const message = input.value.trim();
  if (message) {
    socket.emit('message', message);
    addMessage(`You: ${message}`);
    input.value = '';
  }
});

socket.on('message', (msg) => {
  addMessage(`Other: ${msg}`);
});

function addMessage(msg) {
  const p = document.createElement('p');
  p.textContent = msg;
  messagesDiv.appendChild(p);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
