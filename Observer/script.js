

document.addEventListener("DOMContentLoaded" , function (){ // observer its like a expecter or waiter

            // const div = document.getElementById("div1");
            const mhdObserverOptions = {
                // root: div, if i need to make the observer only inside a div has scroll not for all body observation
                root: null,
                threshold: 0.8,
                rootMargin: "0px"// if i give margin top 100px for example the next element take from the before one space to be recognized
            }     
            
                // instance from pre defined class    function       object
            let mhdObserver = new IntersectionObserver(changeLinks , mhdObserverOptions);//this function will called when one or more element is done on it changes bigger smaller shown  hidden , first i need to select which elements i need from this observer to observe
            const sections = document.getElementsByClassName("cont");
            [...sections].forEach(function(section){
                mhdObserver.observe(section);
            });

            
            function changeLinks(elements , mhdObserver){
                //don't expect always that elements that reach thi function is an elements that is really done changes on them or seen on the screen because some times observer send more or less element so observer calls this function two times , so don't expect always that elements reaches here is the desired elements to edit on them so always check
                // console.log(elements);//return array of EnterSectionObserverEntry for every section we have

                elements.forEach(function(element){
                    if(element.isIntersecting){
                        // console.log(element.target.id);
                        // mhdObserver.unobserve(element.target); // this belongs to the optional param mhdObserver to catch it and edit it , scenario example if you see red section do something else
                        document.querySelectorAll(".nav-link").forEach(function(link){
                            link.classList.remove("active");
                            if(link.getAttribute("href") === "#" + element.target.id ){
                                link.classList.add("active");

                            }
                        });
                    }
                });
            }

        });