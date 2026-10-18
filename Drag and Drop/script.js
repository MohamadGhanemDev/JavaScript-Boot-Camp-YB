        document.addEventListener("DOMContentLoaded" , function(){

        let currentColor;
            //Step2 we catch all coloredDiv and containerDiv
            const coloredDivs = document.getElementsByClassName("coloredDiv");//html collection
            const containerDivs = document.getElementsByClassName("containerDiv");//html collection

            //catch all divs that have class colorDiv and give it EventListener dragstart
            for(let i=0 ; i<coloredDivs.length ; i++){//Step3
                coloredDivs[i].addEventListener("dragstart" , dragStart);//when this event make trigger it calls the function dragStart
            };

            // function dragStart(){
            //     console.log("Dragging Start");
            // }

                            //this ev i can name it what ever i want but this param is automatically sended by the event listener to this function
            function dragStart(ev){//when we start dragging we call this function
                // console.log(ev);//obj => type dragstart => srcElement and target
                // console.log(ev.srcElement);// here its like i select it document get element by id and we select the element and we know which element make the eventListener turn on
                
                // the desired here to know the color the element 
                // console.log(ev.srcElement.style.backgroundColor); // this will return empty string why? because this access the inline style "style attribute" which is empty , but it works and it will return the back ground color if we make it as inline style

                // let currentColor = getColorFromElement(ev.srcElement); //Step5 //now we need to take this color so here its local we need to make it global
                currentColor = getColorFromElement(ev.srcElement);//Step9
            }

            function getColorFromElement(el){//Step4
                let style = window.getComputedStyle(el);//give me the style that computed
                // console.log(style);// this will return list of css properties we find what we need which is back ground Color
                return style.backgroundColor;
            }

            //catch all divs that have class containerDiv and give it EventListener drop and call function drop this is first then we give it again second event listener dragover
            for(let i=0 ; i<containerDivs.length ; i++){//Step6
                containerDivs[i].addEventListener("drop" , drop);
                containerDivs[i].addEventListener("dragover" , dragOver);//the calling for drag over event is when i catch element i drag it and still catching it above second element
            };

            function drop(ev){//Step7
                ev.preventDefault();
                // console.log(ev);//test here catch it at leave in any place and test another time and put it inside the container , here in some browser not return anything why because some event listeners the  browser manage them so the browser cancel it so the solution is preventDefault() , and this function will not work if we don't make the dropOver event and function(preventing the default)

                ev.srcElement.style.backgroundColor = currentColor; //no need to get computed style here
            }
            function dragOver(ev){
                ev.preventDefault();
                // console.log("Dragged");// go and test catch div and drag it above the container without leaving it and see console

            }

        });