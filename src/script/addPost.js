const API = `http://localhost:3000/posts`

const form = document.querySelector("#form")

form.addEventListener("submit", (e) => { 
    
   e.preventDefault()

   console.log(e.target[0].value);
   console.log(e.target[1].value);
   console.log(e.target[2].value);

   const newData = {
   title : e.target[0].value,
   img : e.target[1].value,
   descr : e.target[2].value
   }

   fetch(API, {
    method: "POST",
    headers : {
        "Content-type" : "application/json"
    },
    body: JSON.stringify(newData)
   });
   
   }); 





