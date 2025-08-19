document.addEventListener('DOMContentLoaded', function() {
    const chatIcon = document.querySelector('.chat-icon');
    const chatWindow = document.querySelector('.chat-window');
    const closeChat = document.querySelector('.close-chat');
    const askButton = document.getElementById('sendMessage');
    const userQuestionInput = document.getElementById('chatInput');
    const responseArea = document.querySelector('.chat-messages');

    chatIcon.addEventListener('click', () => {
        chatWindow.classList.toggle('open');
    });

    closeChat.addEventListener('click', () => {
        chatWindow.classList.remove('open');
    });

    askButton.addEventListener('click', function() {
        const question = userQuestionInput.value.trim();
        if (question) {
            addMessage(question, 'user');
            getResponse(question);
            userQuestionInput.value = ''; // Clear the input field
        }
    });

    userQuestionInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            askButton.click();
        }
    });

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        const messageParagraph = document.createElement('p');
        messageParagraph.textContent = text;
        messageDiv.appendChild(messageParagraph);
        responseArea.appendChild(messageDiv);
        responseArea.scrollTop = responseArea.scrollHeight;
    }

    function getResponse(question) {
        question = question.toLowerCase();
        let response = "";

        // General Greetings and Introductions
        if (question.includes("hello") || question.includes("hi") || question.includes("hey")) {
            response = "Hi! I'm here to help you learn about Stephane's website. Ask me about his projects, skills, or how to get in touch!";
        } else if (question.includes("how are you") || question.includes("how's it going")) {
            response = "I'm doing great, thanks for asking! Want to know more about Stephane's work or projects?";
        }
        // Questions about the Website
        else if (question.includes("website") || question.includes("home") || question.includes("portfolio")) {
            response = "This is Stephane's portfolio website, showcasing his skills in Python, AI, and web development, with projects like a Notion clone, a portfolio site with apps, and a Harvard CS50 AI certificate.";
        } else if (question.includes("what is this website about")) {
            response = "This website is Stephane’s portfolio, showcasing his skills in Python, AI, and web development, with projects like a Notion clone, a portfolio site with apps, and a Harvard CS50 AI certificate.";
        }
        // Questions about Stephane (About Section)
        else if (question.includes("about") || question.includes("who is stephane") || question.includes("stephane dube")) {
            response = "Stephane Dube is a Canadian developer and AI enthusiast based in Southeast Asia, specializing in Python, web development, and AI integration, creating clean and user-friendly web applications.";
        } else if (question.includes("where is stephane") || question.includes("where is he based")) {
            response = "Stephane is a Canadian developer based in Southeast Asia.";
        } else if (question.includes("skills") || question.includes("what can he do") || question.includes("technologies")) {
            response = "Stephane is skilled in Python, HTML, PHP, JavaScript, CSS, LLM, N8N, Cloudflare, Docker, and GitHub, with a focus on building responsive and AI-powered applications.";
        }
        // Questions about Projects
        else if (question.includes("projects") || question.includes("work")) {
            response = "Stephane's projects include a Notion clone with an AI chatbot, a portfolio website with apps like Pomodoro, Tic Tac Toe, Abacus, and Tetris, and a Harvard CS50 AI certificate course.";
        } else if (question.includes("notion") || question.includes("notion clone")) {
            response = "The Notion clone is a simplified version of the Notion app, integrated into a web interface with real-time AI responses, built using Firebase, HTML, CSS, and JavaScript.";
        } else if (question.includes("portfolio website") || question.includes("odinforge") || question.includes("odin forge")) {
            response = "Stephane's portfolio website, built with HTML, CSS, JavaScript, Cloudflare, and Python, features apps like a Pomodoro timer, Tic Tac Toe, Abacus, Tetris, and a Notion-inspired app.";
        } else if (question.includes("harvard") || question.includes("cs50") || question.includes("certificate")) {
            response = "Stephane completed the Harvard CS50 Introduction to Artificial Intelligence with Python course, exploring AI concepts and game-playing engines.";
        } else if (question.includes("pomodoro")) {
            response = "The Pomodoro app is a productivity tool on Stephane’s portfolio website, using the Pomodoro Technique with timed work intervals and breaks to boost focus.";
        } else if (question.includes("tic tac toe")) {
            response = "The Tic Tac Toe app is a game on Stephane’s portfolio website, coded with HTML, CSS, and JavaScript, supporting one or two players with multiple modes and skins.";
        } else if (question.includes("abacus")) {
            response = "The Abacus app, part of Stephane’s portfolio, is a digital tool for performing arithmetic calculations by simulating a traditional abacus, built with web technologies.";
        } else if (question.includes("tetris")) {
            response = "The Tetris app on Stephane’s portfolio is a puzzle game where players arrange falling blocks to form complete lines, coded with HTML, CSS, and JavaScript.";
        }
        // Questions about AI and Technologies
        else if (question.includes("what is ai") || question.includes("artificial intelligence")) {
            response = "AI, or artificial intelligence, is a field Stephane specializes in, involving algorithms and models like those in his Harvard CS50 course, used to create intelligent applications.";
        } else if (question.includes("python") || question.includes("what is python used for")) {
            response = "Python is used in Stephane’s portfolio website for backend development and powering AI features, such as in the Notion clone’s real-time responses.";
        }
        // Questions about Code Access
        else if (question.includes("see his code") || question.includes("view code") || question.includes("github")) {
            response = "You can view Stephane’s code on his GitHub at github.com/Dubestephane1 or check specific projects like the Notion clone at notion.odinforge.space.";
        }
        // Questions about Contact
        else if (question.includes("contact") || question.includes("get in touch") || question.includes("email")) {
            response = "You can contact Stephane at website@odinforge.space or connect via GitHub (Dubestephane1), LinkedIn (dubestephane), or X (@StephanOdinDube).";
        }
        // Questions about Who are you
        else if (question.includes("who are you")) {
            response = "I’m a chatbot created by Stephane to help you explore his portfolio website, answer questions about his projects, skills, and more!";
        } else if (question.includes("are you an ai") || question.includes("are you ai")) {
            response = "Yes, I’m a simple AI chatbot built by Stephane to provide information about his website and projects, like the Notion clone and Pomodoro app.";
        } else if (question.includes("what can you do")) {
            response = "I can answer questions about Stephane’s portfolio, including his skills, projects like the Notion clone and Tetris, and how to contact him.";
        } else if (question.includes("who made you") || question.includes("who created you")) {
            response = "I was created by Stephane Dube, a Canadian developer specializing in Python, AI, and web development, to assist visitors on his portfolio website.";
        } else if (question.includes("what is your purpose") || question.includes("why do you exist")) {
            response = "My purpose is to help you navigate Stephane’s portfolio, providing details about his projects, skills, and contact information.";
        } else if (question.includes("can you help me with coding") || question.includes("help with code")) {
            response = "I can provide information about Stephane’s coding projects and skills, like Python and JavaScript, but for specific coding help, try contacting Stephane directly at stephane@example.com!";
        } else if (question.includes("what is web development")) {
            response = "Web development, a key skill of Stephane Dube, involves building websites and apps using technologies like HTML, CSS, JavaScript, and Python, as seen in his portfolio projects.";
        } else if (question.includes("what is a portfolio website")) {
            response = "A portfolio website, like Stephane’s, showcases a developer’s projects, skills, and contact details, featuring apps like Pomodoro, Tic Tac Toe, and a Notion clone.";
        } else if (question.includes("hire stephane") || question.includes("why should i hire")) {
            response = "Stephane’s expertise in Python, AI, and web development, plus his portfolio of responsive apps like Tetris and a Notion clone, makes him ideal for innovative projects.";
        } else if (question.includes("cloudflare") || question.includes("what is cloudflare")) {
            response = "Cloudflare, used in Stephane’s portfolio website, is a platform that enhances website performance, security, and reliability, as showcased in his projects.";
        } else if (question.includes("docker") || question.includes("what is docker")) {
            response = "Docker, one of Stephane’s skills, is a tool for containerizing applications, ensuring consistent deployment, as used in his web development projects.";
        } else if (question.includes("learn ai") || question.includes("how to learn ai")) {
            response = "To learn AI like Stephane, explore courses like Harvard CS50’s Introduction to Artificial Intelligence with Python, which he completed, and practice with Python and LLMs.";
        }
        // Default Response
        else {
            response = "I'm not sure about that, but feel free to ask about Stephane's projects, skills, or contact details!";
        }

        addMessage(response, 'bot');
    }
});