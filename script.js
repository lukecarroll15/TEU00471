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
        "A-A": "The most risk-averse outcome, lowest possible adverse effects on the environment - nuclear weapons abolished, hence threat of nuclear winter ceases to exist + no radioactive waste created as a byproduct of the production of nuclear energy and no risk of nuclear power plant accidents - well done!",
        "A-B": "A mixed outcome: abolished nuclear weapons, hence eliminated threat of nuclear winter and adverse environmental impacts of nuclear testing BUT kept nuclear energy without extensive regulation - still toxic waste from nuclear power plants and risk of accidents BUT also benefits for the environment if paired with a shift away from fossil fuels - maybe try again",
        "A-C": "The best mixed outcome: abolished nuclear weapons, hence eliminated threat of nuclear winter and adverse environmental impacts of nuclear testing BUT kept nuclear energy with extensive regulation - still toxic waste from nuclear power plants and risk of accidents, but thanks to staunch regulation, the potential environmental threat of these is more controlled + benefits for the environment if paired with a shift away from fossil fuels - maybe try again",
        "B-A": "A mixed outcome: failed to regulate nuclear weapons proliferation, while banning nuclear energy production - potential future benefits for the environment due to the limitation of possible adverse effects of accidents in nuclear power plants and no creation of radioactive waste from energy production BUT nuclear waste from nuclear weapons testing still a reality + future threat of nuclear winter as a byproduct of a potential nuclear conflict looming - maybe try again",
        "B-B": "The most potentially damaging outcome: failed to ban both weapons production, testing and nuclear energy production -> creating an unstable world in which the environment is being damaged by adverse effects of testing + future threat of nuclear winter as a potential byproduct of a potential nuclear conflict looming + nuclear power plants could be used as strategic targets in said potential nuclear conflict, exacerbating the environmental damage BUT also benefits for the environment if paired with a shift away from fossil fuels - maybe try again",
        "B-C": "A damaging outcome: failed to regulate nuclear weapons proliferation BUT kept nuclear energy with extensive regulation - still threat of nuclear winter, environmental damage from nuclear testing; nuclear power plants could be used as strategic targets in said potential nuclear conflict, exacerbating the environmental damage + toxic waste from nuclear power plants and risk of accidents, but thanks to staunch regulation, the potential environmental threat of these is more controlled + benefits for the environment if paired with a shift away from fossil fuels - maybe try again",
        "C-A": "A bad outcome: only ban on nuclear weapons proliferation and energy production but not on nuclear testing - prevented further production of nuclear weapons and energy which is a step towards minimising the threat of nuclear winter but does not fully eliminate it + nuclear testing continues to pollute the environment - maybe try again",
        "C-B": "A bad outcome: only ban on nuclear weapons proliferation but not on nuclear energy production or testing - prevented further production of nuclear weapons which is a step towards minimising the threat of nuclear winter but does not fully eliminate it + nuclear testing and energy production continues to pollute the environment BUT also benefits for the environment if paired with a shift away from fossil fuels - maybe try again",
        "C-C": "A mixed outcome: ban on nuclear weapons proliferation but not on nuclear testing + only regulation of nuclear energy production - prevented further production of nuclear weapons which is a step towards minimising the threat of nuclear winter but does not fully eliminate it + nuclear testing and energy production continues to pollute the environment despite regulation, although risk of nuclear power plant accidents minimised + benefits for the environment if paired with a shift away from fossil fuels - maybe try again"
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
