// const API = `http://localhost:3000/posts`

// const content = document.querySelector("#content")

// fetch(API)
// .then((response) => {
//  return response.json();
// })
// .then(data => {
//    renderPosts(data);
// })

const posts = [
   {

   }
]

// git status - есть ли какие-то изменения

const renderPosts = (posts) => {

   posts.map(post => {
   content.innerHTMLc += `
   <div class="post">
   <img src="${post.img}" alt="">
   <div>
   <h2>${post.title}</h2>
   <h2>${post.descr}</h2>
   </div>

   <div class="post__buttons">
   <button class="btn-delete" id="${post.id}">DELETE</button>
   </div>

   </div>
   `
   })
}

document.addEventListener("click", (e) => {
 if(e.target.classList[0] === "btn-delete") {
  const id = e.target.id
  deletePost(id)
 }
})

const deletePost = (id) => {
fetch(`http://localhost:3000/posts/${id}`,{
   method: "DELETE",
   headers: {
 "Content-type" : "application/json"
   }
})
}


