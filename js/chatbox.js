// chatbox.js

document.addEventListener('DOMContentLoaded', function() {
    const chatbox = document.querySelector('.chatbox');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const callButton = document.getElementById('call-button');
    const sendButton = document.getElementById('send-button');

    // Predefined responses
    const responses = {
        "Hello": "Hi! How can we assist you?",
        "What services do you offer?": "We offer local and long-distance moving services.",
        "How much do you charge?": "Our charges are negotiable just give us a call ",
        // Add more predefined responses as needed
    };

    // Event listener for user input
    userInput.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const userMessage = userInput.value;
            displayUserMessage(userMessage);
            handleBotResponse(userMessage);
            userInput.value = '';
        }
    });

    // Function to display user messages in the chatbox
    function displayUserMessage(message) {
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('user-message');
        userMessageElement.textContent = message;
        chatMessages.appendChild(userMessageElement);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    // Function to handle bot responses
    function handleBotResponse(userMessage) {
        setTimeout(() => {
            let botMessage;
            if (responses.hasOwnProperty(userMessage)) {
                botMessage = responses[userMessage];
            } else {
                // Find the closest predefined question
                const closestQuestion = findClosestQuestion(userMessage);
                if (closestQuestion) {
                    botMessage = responses[closestQuestion];
                } else {
                    botMessage = "I'm sorry, I don't have that information. Would you like to call us?";
                    callButton.style.display = "block";
                }
            }
            displayBotMessage(botMessage);
        }, 500);
    }

    // Function to display bot messages in the chatbox
    function displayBotMessage(message) {
        const botMessageElement = document.createElement('div');
        botMessageElement.classList.add('chat-message', 'bot-message');
        botMessageElement.textContent = message;
        chatMessages.appendChild(botMessageElement);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    // Event listener for the call button
    callButton.addEventListener('click', function() {
        // Implement code to initiate a call to the company owner here
        // For security reasons, consider using a phone link instead of JavaScript
        window.location.href = "tel:0721601159";
    });
});


function findClosestQuestion(userMessage) {
    // Implement a method to find the closest predefined question here
    // This can involve string similarity or other techniques
    // For simplicity, you can use a basic approach like string matching
    for (const question in responses) {
        if (userMessage.includes(question) || question.includes(userMessage)) {
            return question;
        }
    }
    return null;
}






sendButton.addEventListener('click', function() {
    sendMessage();
});

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});