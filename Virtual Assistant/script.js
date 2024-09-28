let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) => {
  let speakInput = new SpeechSynthesisUtterance(input);
  // Control the speed, pitch, and volume (Uncomment to adjust)
  // speakInput.rate = 1;
  // speakInput.pitch = 0;
  // speakInput.volume = 2;
  speakInput.lang = "en-GB"; // Use British English
  window.speechSynthesis.speak(speakInput);
};

window.onload = () => {
  // speakFunc("Hello, my name is Asma Aslam");
};

const greetingFunc = () => {
  let date = new Date();
  let hours = date.getHours();
  if (hours >= 0 && hours < 12) {
    speakFunc("Good morning sir, how can I help you!");
  } else if (hours >= 12 && hours < 18) {
    speakFunc("Good afternoon sir, how can I help you!");
  } else {
    speakFunc("Good evening sir, how can I help you!");
  }
};

const startVoiceInput = () => {
  if ("webkitSpeechRecognition" in window) {
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = (e) => {
      let spokenText = e.results[0][0].transcript;
      console.log(spokenText);
      handleCommands(spokenText.toLowerCase()); // Convert input to lowercase for easier matching
      box.classList.remove("btn-box");
      btn.innerHTML = '<i class="fa-solid fa-microphone-lines-slash"></i>';
    };
    recognition.start();
  } else {
    alert("Your browser does not support speech recognition");
  }
};

btn.onclick = () => {
  box.classList.add("btn-box");
  btn.innerHTML = '<i class="fa-solid fa-microphone-lines"></i>';
  startVoiceInput();
};

// Enhanced handleCommands function with more commands
const handleCommands = (command) => {
  if (command.includes("hello") ||command.includes("hey") ||command.includes("hi")) 
    {
    speakFunc("Hello sir, how can I help you!");
  } 
  else if (command.includes("who are you") ||command.includes("developed") ||command.includes("who"))
     {
    speakFunc("I'm Virtual Assistant developed by Asma Aslam.");
  }
   else if (command.includes("how are you")) 
    {
    speakFunc("I'm Good What about you");
  }
   else if (command.includes("youtube")) 
    {
    speakFunc("Opening YouTube.");
    window.open("https://www.youtube.com");
  } 
  else if (command.includes("instagram")) 
    {
    speakFunc("Opening Instagram.");
    window.open("https://www.instagram.com");
  }
   else if (command.includes("facebook")) 
    {
    speakFunc("Opening Facebook.");
    window.open("https://www.facebook.com");
  }
   else if (command.includes("calculator")) 
    {
    speakFunc("Opening calculator.");
    window.open("https://www.google.com/search?q=online+calculator");
  }
   else if (command.includes("what time is it")) 
    {
    let time = new Date().toLocaleTimeString();
    speakFunc(`The current time is ${time}.`);
  }
  else if (command.includes("Chatgpt")) 
    {
        speakFunc("Opening Chatgpt");
        window.open("https://chatgpt.com/");
  }
   else if (command.includes("what date is it"))
     {
    let date = new Date().toLocaleDateString();
    speakFunc(`Today's date is ${date}.`);
  }
   else 
   {
    speakFunc(`This is what I found on the internet regarding ${command}.`);
    window.open(`https://www.google.com/search?q=${command}`);
  }
};
