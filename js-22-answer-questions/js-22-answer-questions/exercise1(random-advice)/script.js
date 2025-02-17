

const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const diceButton = document.querySelector(".dice-button");


async function fetchAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.slip;
    } catch (error) {
        console.error("Error fetching advice:", error);
    }
}


async function updateAdvice() {
    const advice = await fetchAdvice();
    if (advice) {
        adviceId.textContent ='ADVICE #${advice.id}';  
        adviceText.textContent = "${advice.advice}"; 
    }
}


diceButton.addEventListener("click", updateAdvice);


window.onload = updateAdvice;