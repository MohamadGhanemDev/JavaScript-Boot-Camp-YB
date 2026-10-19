        let userScore = 0;//global vars if i define them inside the function every time i call the function the vars stay zero
        let aiScore = 0;
        let draws = 0;

        function play(userChoice){
            const aiChoice = getAiChoice();
            const result = determineWinner(userChoice , aiChoice);
            updateScores(result);
            displayResults(userChoice , aiChoice , result);
            checkForWinner();
        }
        function getAiChoice(){
            const choices = ['🪨' , '📃' , '✂️'];
            
            // return choices[1];
            // const randomIndex = Math.random()*3; // math.random gives random number between 0 and 0.9 , if we need to make this function give us random number as we need we multiply it by the numbers we need , so if i multiply it by 3 it gives me number between 0 and 2 with decimals if we need to remove decimals or cast to bottom we use .floor
            const randomIndex = Math.floor(Math.random()*choices.length);
            return choices[randomIndex];
        }

        function determineWinner(userChoice , aiChoice){
            if(userChoice === aiChoice){
                return "draw";
            }

            if((userChoice == '🪨' && aiChoice == '✂️') || (userChoice == '✂️' && aiChoice == '📃') || (userChoice == '📃' && aiChoice == '🪨')){
                return 'user';
            }
            
            return 'ai';
        }

        function updateScores(result){
            if(result === 'user'){
                userScore++;
                document.getElementById("userScore").innerHTML = userScore;
            }
            else if(result === 'ai'){
                aiScore++;
                document.getElementById("aiScore").innerHTML = aiScore;
            }
            else{
                draws++;
                document.getElementById("draws").innerHTML = draws;
            }
        }

        function displayResults(userChoice , aiChoice , result){
            let resultMessage = document.getElementById("results");
            let message = `You played ${userChoice} , AI played ${aiChoice} , `;
            if(result == 'user'){
                message += `You Wins 🎉`;
            }
            else if(result == 'ai'){
                message += `AI Wins 🤖`;
            }
            else{
                message += `It's a Draw! 🔁`;
            }

            resultMessage.innerHTML = message;
        }

        function checkForWinner(){
            let resultMessage = document.getElementById("results");

            if(userScore === 5){
                resultMessage.innerHTML ="You Win! 🎉 , AI Lose";
            }
            else if(aiScore === 5){
                resultMessage.innerHTML ="AI Win! 🤖 , Hard Luck!";
            }
            else{
                return;
            }

            userScore = 0;
            aiScore = 0;
            draws = 0;
            document.getElementById("userScore").innerHTML = "0";
            document.getElementById("aiScore").innerHTML = "0";
            document.getElementById("draws").innerHTML = "0";

        }