//const posts = require("../model/posts")
document.addEventListener("DOMContentLoaded", () => {
  upPosts();
});

function upPosts() {
  fetch("http://localhost:3000/api/all").then((res) => {
      return res.json();
    }).then((json) => {
      
      let postElements = "";
      let posts = JSON.parse(json);

      posts.forEach((post) => {
        let postElement = `   
     <div id="${post.id}" class="card mb-4">
         <div class="card-header">
            <h5 class="card-title">${post.title}</h5>
         </div>
        <div class="card-body">
            <div class="card-text">${post.desc}</div>
        </div>
     </div>`;
        postElements += postElement;
      });

      document.getElementById("posts").innerHTML = postElements;

    });
}

function savePost() {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;
  let post = { title, desc };

  const options = {
    method: "POST",
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(post)
  };
  fetch("http://localhost:3000/api/new", options).then(res => {
    console.log(res);
    upPosts();
  });
}