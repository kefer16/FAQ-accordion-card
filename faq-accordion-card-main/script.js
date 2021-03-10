questions = document.querySelector(".questions");
items = document.querySelectorAll(".item");

function desplegarDescripcion(e) {
  
    if (e.target.className == "question" || e.target.className == "question active"){
        elementSelected = e.target;
        
        items.forEach((element) => {
            let h2 = element.children[0];
            let img_arrow = element.children[0].children[0];
            let p = element.children[1];
                            
            if (h2 == elementSelected)
            {
                if(h2.className == "question active"){
                    h2.classList.remove("active");
                    img_arrow.classList.remove("active");
                    p.classList.remove("active");
                    console.log("paso al active");
                   
                }else{

                    h2.classList.add("active");
                    img_arrow.classList.add("active");
                    p.classList.add("active");
                    
                }
                
            }else{
                console.log("Pasó ala else");
               
                h2.classList.remove("active");
                img_arrow.classList.remove("active");
                p.classList.remove("active");
                
            }  
        });
    }   
}

questions.addEventListener("click", desplegarDescripcion);



