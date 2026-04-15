const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function getPosts() {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error(error);
    }
}

function displayPosts(posts) {
    const postList = document.getElementById('post-list');
    if (!postList) return;

    postList.innerHTML = '';

    posts.forEach(post => {
        const li = document.createElement('li');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        h1.textContent = post.title;
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);
        postList.appendChild(li);
    });
}

getPosts();