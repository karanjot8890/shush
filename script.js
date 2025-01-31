const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Happy one month, gudiyaa! 💖 It feels like time has flown by, but every moment with you has been so special, we have already had our ups and downs with yashika and shit but i just want you to know You bring so much warmth, and love into my life, and I’m beyond grateful for you I can’t wait to see where this journey takes us, but I know with you by my side ❤️.";
    gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWhwcDhmdHFneXJ1bGh3YTMzbjQ1aHR3eGszZGkzdTdoZHAzdDVobCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/k9Jw0MW9TV6Dbewyx2/giphy.gif";

    // Hide the No button
    noBtn.style.display = "none";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
