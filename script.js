let cognitiveDissonancePopUp = false;
let pollAnswer1 = "";
let pollAnswer2 = "";

// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", function() {
    // Start Quiz Button in Welcome Container
    document.getElementById('start-button').addEventListener('click', () => {
        document.getElementById('welcome-container').style.display = 'none';
        startQuiz(); // Start the quiz
    });

    // Learn More Button in Welcome Container
    document.getElementById('learn-more-button').addEventListener("click", () => {
        document.getElementById('welcome-container').style.display = "none";
        document.getElementById('learn-more-container').style.display = "block";
    });

    // Resources Button in Learn More Container
    document.getElementById("resources-button").addEventListener("click", () => {
        document.getElementById("learn-more-container").style.display = "none";
        document.getElementById("resources-container").style.display = "block";
    });

    // Continue Button in Resources Container
    document.getElementById('continue-button').addEventListener('click', () => {
        document.getElementById('resources-container').style.display = 'none';
        document.getElementById('poll-container').style.display = 'block';
    });

    
    // Case Study Button in Polls Container
    document.getElementById('case-study-button').addEventListener('click', () => {
        document.getElementById('poll-container').style.display = 'none';
        document.getElementById('case-study-container').style.display = 'block';
    });


    document.getElementById('second-polls-button').addEventListener('click', () => {
        document.getElementById('case-study-container').style.display = 'none';
        document.getElementById('poll-container-1').style.display = 'block';
    });

    document.getElementById('intro-to-policy-button').addEventListener('click', () => {
        document.getElementById('poll-container-1').style.display = 'none';
        document.getElementById('intro-to-policy-container').style.display = 'block';
    });
    

    // Start Policy Selection Button in Case Study Container
    document.getElementById("start-button-1").addEventListener("click", () => {
        document.getElementById("intro-to-policy-container").style.display = "none";
        document.getElementById("policy-container-1").style.display= "block";
    });

    // Next Policy Choice Button for Topic 1
    document.getElementById('next-policy-button').addEventListener('click', () => {
        if (document.querySelector('input[name="policy1"]:checked')) {
            document.getElementById('policy-container-1').style.display = 'none';
            document.getElementById('policy-container-2').style.display = 'block';
        } else {
            alert("Please select a policy option for Topic 1 before proceeding.");
        }
    });

    // Submit Choice Button for Topic 2
    document.getElementById('submit-choice-button').addEventListener('click', () => {
        if (document.querySelector('input[name="policy2"]:checked')) {
            alert("Your policy choices have been submitted!");
        } else {
            alert("Please select a policy option for Topic 2 before submitting.");
        }
    });

    document.getElementById('submit-choice-button').addEventListener('click', () => {
        // Get the selected policy options
        const policy1Choice = document.querySelector('input[name="policy1"]:checked')?.value;
        const policy2Choice = document.querySelector('input[name="policy2"]:checked')?.value;
    
        // Check if both options are selected
        if (policy1Choice && policy2Choice) {
            document.getElementById('policy-container-2').style.display = 'none';
            document.getElementById('result-container').style.display = 'block';
    
            // Generate a message based on the chosen combination
            const message = getMessageForCombination(policy1Choice, policy2Choice);
            document.getElementById('result-message').innerText = message;
        } else {
            alert("Please select a policy option before submitting.");
        }

        if (cognitiveDissonancePopUp){
            alert("🚨Attention!🚨You might be experiencing cognitive dissonance right now. 😬 According to your vote in the poll at the beginning of the game, you care about world peace and the climate crisis, yet you chose to implement policies which are at least partially contrary to the achievement of these goals. Did you find yourself in the abyss of the say-do gap? 🤔 Or maybe your imagination is limited by social norms and cognitive biases? If you want to know more about why your decisions are contradictory to your beliefs, make sure to read our section about tools and explanations for inaction on the joint threat of nuclear phenomena and the climate crisis!");
        }
    });

// Event listener for the View Tools button-
document.getElementById('view-inaction-button').addEventListener('click', () => {
    console.log("View Tools button clicked"); // Debugging log
    document.getElementById('result-container').style.display = 'none'; // Hide outcome container
    document.getElementById('inaction-container-1').style.display = 'block'; // Show inaction container
});

// Event listener for the Next button in the Inaction container
document.getElementById('inaction-next-button-1').addEventListener('click', () => {
    console.log("Next button clicked"); // Debugging log
    document.getElementById('inaction-container-1').style.display = 'none'; // Hide current inaction concept
    document.getElementById('inaction-container-2').style.display = 'block'; // Show next inaction concept
});

document.getElementById('inaction-next-button-2').addEventListener('click', () => {
    console.log("Next button clicked"); // Debugging log
    document.getElementById('inaction-container-2').style.display = 'none'; // Hide current inaction concept
    document.getElementById('inaction-container-3').style.display = 'block'; // Show next inaction concept
});

document.getElementById("view-inaction-btn").addEventListener("click", () => {
    document.getElementById("inaction-container-3").style.display= "none";
    document.getElementById("tools-container").style.display="block";
})

document.getElementById("view-next-tools-btn").addEventListener("click", () => {
    document.getElementById("tools-container").style.display= "none";
    document.getElementById("tools-container-1").style.display="block";
})

document.getElementById("view-sources-btn").addEventListener("click", () => {
    document.getElementById("tools-container-1").style.display= "none";
    document.getElementById("sources-container").style.display="block";
})

document.getElementById("conclusion-btn").addEventListener("click", () => {
    document.getElementById("sources-container").style.display= "none";
    document.getElementById("conclusion-container").style.display="block";
})

document.getElementById("form-button").addEventListener("click", () => {
    document.getElementById("conclusion-container").style.display= "none";
    document.getElementById("feedback-container").style.display="block";
})

document.getElementById("restart-btn").addEventListener("click", () => {
    document.getElementById("conclusion-container").style.display= "none";
    document.getElementById("welcome-container").style.display="block";
})

document.getElementById('submit-feedback-button').addEventListener('click', () => {
    const feedback = document.getElementById('feedback-input').value;
    
    if (feedback.trim()) {
        alert("Thank you for your feedback!");
        console.log("User feedback:", feedback); // Replace with further processing if needed
        document.getElementById('feedback-input').value = ""; // Clear input field
    }
})

document.getElementById("restart-btn-1").addEventListener("click", () => {
    document.getElementById("feedback-container").style.display= "none";
    document.getElementById("welcome-container").style.display="block";
})

function getMessageForCombination(policy1, policy2) {
    const messages = {
        "A-A": "Congratulations! Your policy decisions culminated in a risk-averse outcome with comparatively few adverse effects on the environment. You have taken an important step towards the abolishment of nuclear weapons, minimising environmental damage from nuclear testing and the future threat of nuclear winter. No radioactive waste is created as a byproduct of nuclear energy production and nuclear power plant accidents are prevented. Perhaps for your future environmental policies, you might wish to consider the issue of climate justice and the possibility of implementing government schemes which compensate victims of the negative health effects of nuclear testing in the past.",
        "A-B": "Your policy decisions culminated in a mixed outcome. You have taken an important step towards the abolishment of nuclear weapons, minimising environmental damage from nuclear testing and the future threat of nuclear winter. Your decision to advocate for the production of nuclear energy also somewhat helped the process of shifting away from the use of fossil fuels. However, since you decided to implement nuclear energy without extensive regulation, toxic radioactive waste from its production has now become a pressing environmental concern along with the possibility of nuclear power plant accidents.",
        "A-C": "Your policy decisions culminated in a mixed outcome. You have taken an important step towards the abolishment of nuclear weapons, minimising environmental damage from nuclear testing and the future threat of nuclear winter. Furthermore, your decision to advocate for the production of nuclear energy helped the process of shifting away from the use of fossil fuels. Thanks to implementing an extensive regulation scheme around the production of nuclear energy, you do not have to be too worried about the risk of accidents and can manage radioactive waste more productively. The question of how long it is going to take to come up with an environmentally safe way of disposing of said waste nevertheless remains. Maybe try again?",
        "B-A": "Your policy decisions culminated in a mixed outcome. You failed to regulate nuclear weapons proliferation, while banning nuclear energy production. The latter decision created potential future benefits for the environment due to the prevention of nuclear power plant accidents and the creation of radioactive waste. Nonetheless, radioactive waste from nuclear weapons testing still remains an environmental concern and the future threat of nuclear winter as a byproduct of a potential nuclear conflict looms large. Maybe try again?",
        "B-B": "Your policy decisions culminated in a potentially dangerous outcome. You failed to ban both nuclear weapons' production, testing and energy, creating an unstable world in which the environment is being damaged by adverse effects of nuclear testing and the future threat of nuclear winter as a potential byproduct of a future nuclear conflict looms large. Although your advocacy of nuclear energy helped the process of shifting away from the use of fossil fuels, it also led to the production of radioactive waste and the risk of environmentally destructive accidents. These power plants could also be used as strategic targets in a potential future nuclear conflict which you failed to prevent, possibly resulting in a large-scale environmental catastrophe.",
        "B-C": "Your policy decisions culminated in a potentially dangerous outcome. You failed to regulate nuclear weapons' proliferation, creating an unstable world in which the environment is being damaged by adverse effects of nuclear testing and the future threat of nuclear winter as a potential byproduct of a future nuclear conflict looms large. Furthermore, your decision to advocate for the production of nuclear energy helped the process of shifting away from the use of fossil fuels. Thanks to implementing an extensive regulation scheme around the production of nuclear energy, you do not have to be too worried about the risk of accidents and can manage radioactive waste more productively. The question of how long it is going to take to come up with an environmentally safe way of disposing of said waste nevertheless remains. Maybe try again?",
        "C-A": "Your policy decisions culminated in a mixed outcome. You failed to take an important step towards abolishing nuclear weapons, while banning nuclear testing and nuclear energy production. The future threat of nuclear winter as a product of potential nuclear conflict still looms large, but the immediate environmental damage to the environment is somewhat regulated due to your ban on nuclear weapons' testing. Furthermore, no radioactive waste is created as a byproduct of nuclear energy production and nuclear power plant accidents are prevented as well. Maybe try again?",
        "C-B": "Your policy decisions culminated in a mixed outcome. You failed to take an important step towards abolishing nuclear weapons, while banning nuclear testing. The future threat of nuclear winter as a product of potential nuclear conflict still looms large, but the immediate environmental damage to the environment is somewhat regulated due to your ban on nuclear weapons' testing. Furthermore, your decision to advocate for the production of nuclear energy also somewhat helped the process of shifting away from the use of fossil fuels. However, since you decided to implement nuclear energy without extensive regulation, toxic radioactive waste from its production has now become a pressing environmental concern along with the possibility of nuclear power plant accidents.",
        "C-C": "Your policy decisions culminated in a mixed outcome. You failed to take an important step towards abolishing nuclear weapons, while banning nuclear testing. The future threat of nuclear winter as a product of potential nuclear conflict still looms large, but the immediate environmental damage to the environment is somewhat regulated due to your ban on nuclear weapons' testing. Furthermore, your decision to advocate for the production of nuclear energy helped the process of shifting away from the use of fossil fuels. Thanks to implementing an extensive regulation scheme around the production of nuclear energy, you do not have to be too worried about the risk of accidents and can manage radioactive waste more productively. The question of how long it is going to take to come up with an environmentally safe way of disposing of said waste nevertheless remains. Maybe try again?"
    };

    const combination = `${policy1}-${policy2}`;

    if (combination === 'B-B' || combination === 'B-C'){
        cognitiveDissonancePopUp = true;
    }
    
    // Return the specific message for the selected combination
    return messages[`${policy1}-${policy2}`];
}

function startQuiz() {
    document.getElementById("policy-container-1").style.display= "block";
}

})
