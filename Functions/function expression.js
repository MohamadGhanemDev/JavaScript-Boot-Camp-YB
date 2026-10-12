        //function expression (Anonymous) and the function expression is not hoisted
        const addTwenty = function(x){//function declared inside variable and has no name
            let z = x+20;
            return z;

            //return x+10;
        }
        console.log(addTwenty(5));