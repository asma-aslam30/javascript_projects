const typingForm = document.querySelector(".typing-form");
const chatList = document.querySelector(".chat-list");

let userMessage = null;

// API Configuration
const API_KEY = "AIzaSyC1kuQWWVX5bWSAJ7yFbU3mc6CnK3LDz4g";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY`;

const createMessageElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
};

const generateAPIResponse = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: userMessage }],
          },
        ],
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//  show a loading animation while waiting for the API response
const showLoadingAnimation = () => {
  const html = `
        <div class="message-content">
            <img src="./gemini.svg" class="avatar" alt="User Image">
            <p class="text"></p>
            <div class="loading-indicator">
                <div class="loading-bar"></div>
                <div class="loading-bar"></div>
                <div class="loading-bar"></div>
            </div>
            
        </div>  
        <span class=" icon material-symbols-outlined">
            content_copy
            </span>
    </div> `;

  const incomingMessageDiv = createMessageElement(html, "incoming", "loading");
  chatList.appendChild(incomingMessageDiv);

  generateAPIResponse();
};

const handleOutgoingChat = () => {
  userMessage = typingForm.querySelector(".typing-input").value.trim();
  if (!userMessage) return; // exit if there is no message

  // console.log(userMessage);
  const html = `<div class="message outgoing">
        <div class="message-content">
            <img src="./InShot_20240325_194138594.jpg" class="avatar" alt="User Image">
            <p class="text"></p>
        </div> `;
  const outgoingMessageDiv = createMessageElement(html, "outgoing");
  outgoingMessageDiv.querySelector(".text").innerText = userMessage;
  chatList.appendChild(outgoingMessageDiv);

  typingForm.reset();
  setTimeout(showLoadingAnimation, 500);
};

typingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  handleOutgoingChat();
});
