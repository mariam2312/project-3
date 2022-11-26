// check local storage color
let mainColors = localStorage.getItem("color_option");
if (mainColors !== null){
   //set color in root
    document.documentElement.style.setProperty('--main--color', mainColors);
   //remove active class from all li
    document.querySelectorAll(".color-list li").forEach(element => {

    element.classList.remove("active");

    //add active on element data-color ==local storage
    if(element.dataset.color === mainColors){
        
        element.classList.add("active");
    }
});


}
//back option 
let backgroundOption = true;
//control interval
let backInterval;

//check localstorage
let backItem = localStorage.getItem('back-option');
if( backItem !== null){
    if(backItem === 'true'){

        backgroundOption = true;

    }
    else{
        backgroundOption = false;
    }
}
//remove active class from all back
//document.querySelectorAll(".option-box button").forEach(element => {

  //  element.classList.remove("active");

    //add active on element data-color ==local storage
    //if(backItem === 'true'){
      //  document.querySelector(".option-box .yes").classList.add("active");
    //}
    //else{
      //  document.querySelector(".option-box .no").classList.add("active");
   // }
//});


//spin class on icon
document.querySelector(".icon .fa-gear").onclick = function(){
    //to rotate icon
    this.classList.toggle("fa-spin")

    //to open settings-box
    document.querySelector(".settings-box").classList.toggle("open")
}



//switch bacground
const back = document.querySelectorAll(".option-box button");

//loop in button
back.forEach(button => {
    button.addEventListener("click", (e) =>{

       //remove active class from all button
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");
        });
        //add active to e
        e.target.classList.add("active");
        
        //rand back option
        if(e.target.dataset.background === 'yes'){
            
            backgroundOption = true;
            randImag()
            localStorage.setItem("back-option", true);
        }
        else{
                backgroundOption = false;
                clearInterval(backInterval);
                localStorage.setItem("back-option", false);
        
        }
    });
});


//switch color
const colorLi = document.querySelectorAll(".color-list li");

colorLi.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
        localStorage.setItem("color_option", e.target.dataset.color);
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    } );
});

//select landing page element
let page = document.querySelector(".landing-page");

//get array of pages
let imgsArray =["0.jpg","1.jpg", "2.jpg", "3.jpg"];

function randImag(){
    if(backgroundOption === true){

        backInterval = setInterval (() => {
            //get random num
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            //change background img
            page.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] +'")' ;
            
            },1000)
    }
}


