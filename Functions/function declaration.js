
        console.log(addTen(30));//the code isn’t physically moved to the top. Before running, JS registers all function declarations in memory first, which is why you can call them earlier in the file. This only works for function name(){} declarations, not for const f = () => {}
        //Hoisted function => we can call the function before initialize it , what is the meaning of hoisted => when we compile "Run the code the function turn to the top of the script or the js file" the first thing is to the top the function declaration even we write it at the bottom
        function addTen(x){//any
            let z = x+10;
            return z;
        }
        addTen(10);//the function does run and calculates 20, but the result is thrown away because nothing stores or prints it
        console.log("Consol Direct print " + addTen(10));//first way
        var result = addTen(10);//second way 
        console.log("Console via variable " + result);

        console.log("--------------------------------------------------------");

        function sayHello(){//void
            console.log("Hello");
        }
        sayHello();

        function sayHi(name){//void
            console.log(`HI ${name}`);
        }
        sayHi("Mohammad");