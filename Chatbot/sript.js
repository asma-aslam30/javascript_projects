document.getElementById('sendButton').addEventListener('click', function () {
    let userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== '') {
        addMessage(userInput, 'user');
        showTypingIndicator();
        document.getElementById('userInput').value = '';
        setTimeout(() => {
            getBotResponse(userInput);
            removeTypingIndicator();
        }, 2000);
    }
});

document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('sendButton').click();
    }
});

function addMessage(text, sender) {
    let chat = document.getElementById('chat');
    let message = document.createElement('div');
    message.className = `message ${sender}`;

    let avatar = document.createElement('div');
    avatar.className = 'avatar';

    let img = document.createElement('img');
    img.src = sender === 'user' ? 'dp.jpg' : 'ai.jpg';
    img.alt = sender === 'user' ? 'User' : 'Bot';
    avatar.appendChild(img);

    let messageText = document.createElement('div');
    messageText.className = 'text';
    messageText.textContent = text;

    if (sender === 'user') {
        message.appendChild(messageText);
        message.appendChild(avatar);
    } else {
        message.appendChild(avatar);
        message.appendChild(messageText);
    }

    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
}

function showTypingIndicator() {
    let chat = document.getElementById('chat');
    let typingIndicator = document.createElement('div');
    typingIndicator.className = 'message bot typing';
    typingIndicator.id = 'typingIndicator';

    let avatar = document.createElement('div');
    avatar.className = 'avatar';

    let img = document.createElement('img');
    img.src = 'bot-icon.png';
    img.alt = 'Bot';
    avatar.appendChild(img);

    let dots = document.createElement('div');
    dots.className = 'text';
    dots.innerHTML = 'Typing <span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>';

    typingIndicator.appendChild(avatar);
    typingIndicator.appendChild(dots);
    chat.appendChild(typingIndicator);
    chat.scrollTop = chat.scrollHeight;
}

function removeTypingIndicator() {
    let typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function getBotResponse(input) {
    let responses = {
        "hello": "Hi there! How can I assist you today?",
        "hey": "Hi there! Which university are you from?",
        "karachi university": "That's great! What do you study there?",
        "bba": "that's amazing! Do you like finance too?",
        "yeah": "Mine too! ",
        "no": "That's okay! What do you like to do in your free time?",
        "what is SMIT?": "SMIT (Saylani Mass IT Training) is an initiative by the Saylani Welfare Trust aimed at providing free IT education and training to students and professionals across Pakistan.",
        "why is SMIT important?": "SMIT is important because it helps bridge the digital skills gap in Pakistan, providing free access to IT education and empowering individuals with the knowledge needed to succeed in the tech industry.",
    "what courses does SMIT offer?": "SMIT offers a wide range of courses, including web development, mobile app development, graphic design, digital marketing, data science, and more.",
    "how can I enroll in SMIT courses?": "You can enroll in SMIT courses by visiting their official website, selecting a course, and following the registration process. Admission is usually open to everyone who meets the basic eligibility criteria.",
    "is SMIT free?": "Yes, SMIT provides free IT training courses to help individuals gain valuable skills without any financial burden.",
    "what is the duration of SMIT courses?": "The duration of SMIT courses varies depending on the program, ranging from a few months to a year. Each course has a specific timeline and curriculum.",
    "where are SMIT campuses located?": "SMIT campuses are located in various cities across Pakistan, including Karachi, Lahore, Islamabad, and more. You can check their website for specific campus locations.",
    "what is the eligibility criteria for SMIT courses?": "The eligibility criteria for SMIT courses vary by program. Generally, applicants need a basic understanding of English and computer literacy, but specific requirements are listed on their website for each course.",
    "what are the benefits of SMIT training?": "SMIT training provides students with industry-relevant skills, hands-on experience, and the opportunity to pursue a career in IT. Graduates often find better job opportunities and career growth.",
    "can SMIT help me get a job?": "Yes, SMIT not only provides IT training but also offers career counseling, job placement assistance, and connects students with industry professionals to help them secure employment.",
    "what is the teaching methodology at SMIT?": "SMIT uses a practical, hands-on approach to teaching, combining lectures, real-world projects, and mentorship to ensure students gain practical skills and experience.",
    "what are the class timings at SMIT?": "Class timings at SMIT vary depending on the course and campus. They offer both morning and evening sessions to accommodate students with different schedules.",
    "how is SMIT different from other IT training institutes?": "SMIT stands out due to its commitment to providing free, high-quality IT education, its extensive network of campuses, and its focus on practical, industry-relevant skills.",
    "who can join SMIT?": "SMIT is open to anyone interested in learning IT skills, whether you are a student, professional, or someone looking to switch careers. Basic computer literacy is usually required.",
    "does SMIT offer certifications?": "Yes, SMIT offers certifications upon successful completion of their courses. These certificates are recognized in the industry and can enhance your resume.",
    "what is the admission process at SMIT?": "The admission process at SMIT typically involves registering online, selecting your desired course, and attending an orientation session. Some courses may have entrance tests or interviews.",
    "how does SMIT support students during their studies?": "SMIT provides students with resources such as study materials, access to labs, mentorship, and career counseling to help them succeed in their studies.",
    "can I study online at SMIT?": "Yes, SMIT offers online courses for students who cannot attend physical classes. These courses are designed to provide the same quality of education as in-person classes.",
    "what is the success rate of SMIT graduates?": "SMIT graduates have a high success rate, with many finding jobs in the IT industry, starting their own businesses, or pursuing further education in technology-related fields.",
    "what opportunities are available after completing a course at SMIT?": "After completing a course at SMIT, students can explore job opportunities in the tech industry, freelance work, or further education to specialize in a particular area.",
    "what is the role of SMIT in the IT industry?": "SMIT plays a crucial role in the IT industry by producing skilled professionals who contribute to the growth of the tech sector in Pakistan and beyond.",
    "what are some success stories from SMIT?": "There are many success stories from SMIT, where students have gone on to work for top tech companies, start their own businesses, or achieve significant milestones in their careers.",
    "how can SMIT help me start a career in IT?": "SMIT provides the necessary skills, knowledge, and practical experience to start a career in IT, along with career counseling and job placement services to help you enter the industry.",
    "what is the mission of SMIT?": "The mission of SMIT is to empower individuals with IT skills, reduce unemployment, and contribute to the socio-economic development of Pakistan through free education and training.",
    "how does SMIT contribute to society?": "SMIT contributes to society by providing free IT education, reducing unemployment, and enabling individuals to improve their lives and communities through technology.",
    "can SMIT help me with freelancing?": "Yes, SMIT offers courses and workshops on freelancing, teaching you how to find clients, manage projects, and succeed as a freelancer in the global market.",
    "what kind of support does SMIT offer to entrepreneurs?": "SMIT supports entrepreneurs by providing training in relevant IT skills, offering mentorship, and connecting them with resources to start and grow their own businesses.",
    "what is the impact of SMIT on the tech industry?": "SMIT has a significant impact on the tech industry by continuously supplying it with skilled professionals, driving innovation, and contributing to the overall growth of the sector.",
    "how can I stay updated on SMIT courses and events?": "You can stay updated on SMIT courses and events by following their official website, social media channels, or subscribing to their newsletter.",
    "what is the future of IT education at SMIT?": "The future of IT education at SMIT looks promising, with plans to expand their course offerings, introduce advanced technologies, and continue providing free education to empower more individuals."
};
    };

    let response = responses[input.toLowerCase()] || "I'm not sure how to respond to that. Can you please rephrase?";
    setTimeout(() => addMessage(response, 'bot'), 50);
