

$(document).ready(function(){

    // wow initiation
    new WOW().init();

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    // navbar bg change on scroll
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 100){
            $('.navbar').addClass('cng-navbar');
        } else {
            $('.navbar').removeClass('cng-navbar');
        }
    });

    // sample video popup
    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });
    });

    // team carousel 
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1
            }, 
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });

    // faq accordion
    $('.faq-head').each(function(){
        $(this).click(function(){
            $(this).next().toggleClass('show-faq-content');
            let icon = $(this).children('span').children("i").attr('class');

            if(icon == "fas fa-plus"){
                $(this).children('span').html('<i class = "fas fa-minus"></i>');
            } else {
                $(this).children('span').html('<i class = "fas fa-plus"></i>');
            }
        });
    });

    // testimonial carousel 
    $('.testimonial .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        items: 1
    });

});

const questions = document.querySelectorAll('.question-answer');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})

//darkmode n hamburger
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();
document.addEventListener('DOMContentLoaded', function() {
    const chatbox = document.querySelector('.chatbox');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button'); // Get the Send button

    // ...

    // Event listener for the Send button
    sendButton.addEventListener('click', function() {
        const userMessage = userInput.value;
        if (userMessage.trim() !== '') { // Check if the message is not empty
            displayUserMessage(userMessage);
            handleBotResponse(userMessage);
            userInput.value = '';
        }
    });
    });

    // Function to find the closest predefined question
function findClosestQuestion(userMessage) {
    let closestQuestion = null;
    let highestSimilarity = 0;

    for (const question in responses) {
        const similarity = calculateStringSimilarity(userMessage, question);
        if (similarity > highestSimilarity) {
            highestSimilarity = similarity;
            closestQuestion = question;
        }
    }

    // You can set a threshold for similarity to ensure it's not too low
    const similarityThreshold = 0.5; // Adjust as needed
    if (highestSimilarity >= similarityThreshold) {
        return closestQuestion;
    } else {
        return null;
    }
}

// Function to calculate string similarity (you can use a library for more accuracy)
function calculateStringSimilarity(a, b) {
    const lengthA = a.length;
    const lengthB = b.length;
    const maxLength = Math.max(lengthA, lengthB);
    
    let commonChars = 0;
    for (let i = 0; i < maxLength; i++) {
        if (a[i] && b[i] && a[i] === b[i]) {
            commonChars++;
        }
    }

    return commonChars / maxLength;
}

// Function to handle bot responses
function handleBotResponse(userMessage) {
    setTimeout(() => {
        let botMessage;
        const userMessageLower = userMessage.toLowerCase(); // Convert user input to lowercase

        for (const question in responses) {
            const questionLower = question.toLowerCase(); // Convert predefined question to lowercase
            if (userMessageLower.includes(questionLower) || questionLower.includes(userMessageLower)) {
                botMessage = responses[question];
                break; // Stop searching once a matching question is found
            }
        }

        if (!botMessage) {
            botMessage = "I'm sorry, I don't have that information. Would you like to call us?";
            callButton.style.display = "block";
        }

        displayBotMessage(botMessage);
    }, 500);
}
