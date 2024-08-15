const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

const responses = {
    hello: 'Hello! How can I help you today?',
    hi: 'Hi there! What can I do for you?',
    help: 'Sure, what do you need help with?',
    bye: 'Goodbye! Have a great day!',
    'what is your name': 'I am a chatbot created to assist you.',
    'how are you': 'I am just a bot, but I am functioning as expected!',
    'what is your purpose': 'I am here to assist you with your queries.',
    'tell me a joke': 'Why don’t scientists trust atoms? Because they make up everything!',
    'what is the weather like': 'I do not have access to live weather data, but it is always a good idea to check a weather app!',
    'what is the time': 'I do not have a clock, but you can check your device for the current time.',
    'who created you': 'I was created by a developer to assist with various tasks.',
    'how old are you': 'I do not have an age, but I was created recently.',
    'what can you do': 'I can chat with you and answer some basic questions!',
    'do you like humans': 'As a bot, I do not have feelings, but I am here to help humans.',
    'are you real': 'I am a real chatbot, but not a living being.',
    'where are you from': 'I exist in the digital world.',
    'what is your favorite color': 'I do not have preferences, but I can tell you about colors!',
    'do you have friends': 'I do not have friends, but I can chat with many users.',
    'can you learn': 'I can be programmed to understand and respond to various inputs.',
    'what is your favorite movie': 'I do not watch movies, but I can recommend some popular ones!',
    'do you eat': 'I do not need food, but I can tell you about different cuisines.',
    'can you dance': 'I cannot dance, but I can tell you about different dance styles.',
    'what is the capital of France': 'The capital of France is Paris.',
    'who is the president of the United States': 'As of my last update, the President of the United States is Joe Biden.',
    'what is the meaning of life': 'Many people have different interpretations of the meaning of life. What does it mean to you?',
    'do you believe in God': 'As a bot, I do not have beliefs, but I can discuss religion and spirituality.',
    'what is AI': 'AI stands for Artificial Intelligence, the simulation of human intelligence in machines.',
    'what is your favorite book': 'I do not read books, but I can recommend some popular ones!',
    'can you play games': 'I cannot play games, but I can recommend some fun games for you!',
    'what is the best programming language': 'There are many great programming languages; it depends on the task at hand.',
    'can you code': 'I am created through code, but I do not write code myself.',
    'what is your favorite sport': 'I do not play sports, but I can tell you about different sports!',
    'what is your favorite food': 'I do not eat, but I can tell you about different foods!',
    'can you travel': 'I do not travel, but I can tell you about different travel destinations!',
    'what is your favorite animal': 'I do not have preferences, but I can tell you about different animals!',
    'can you swim': 'I cannot swim, but I can tell you about swimming techniques!',
    'what is your favorite music': 'I do not listen to music, but I can tell you about different genres!',
    'do you have a family': 'I do not have a family, but I am here to help you!',
    'what is your favorite hobby': 'I do not have hobbies, but I can tell you about different hobbies!',
    'can you tell me a story': 'Sure! Once upon a time, in a land far, far away...',
    'what is your favorite holiday': 'I do not celebrate holidays, but I can tell you about different holidays!',
    'can you sing': 'I cannot sing, but I can tell you about different songs!',
    'what is your favorite subject': 'I do not study, but I can tell you about different subjects!',
    'can you help me with my homework': 'I can try! What subject do you need help with?',
    'what is your favorite game': 'I do not play games, but I can recommend some popular ones!',
    'do you watch TV': 'I do not watch TV, but I can tell you about different shows!',
    'what is your favorite movie genre': 'I do not watch movies, but I can tell you about different genres!',
    'can you speak other languages': 'I can understand and respond in multiple languages with the right programming!',
    'do you have a job': 'My job is to assist you with your queries!',
    'what is your dream': 'I do not dream, but I am here to help you with your dreams!'
};

function sendMessage() {
    const messageText = userInput.value.trim().toLowerCase();
    if (messageText !== '') {
        addMessage(messageText, 'user');
        userInput.value = '';
        setTimeout(() => {
            const botReply = getBotReply(messageText);
            addMessage(botReply, 'bot');
        }, 1000);
    }
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
    for (let key in responses) {
        if (message.includes(key)) {
            return responses[key];
        }
    }
    return 'I am sorry, I do not understand. Can you please rephrase?';
}

// Allow pressing Enter to send message
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
