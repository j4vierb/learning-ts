const fetchURL = "https://jsonplaceholder.typicode.com/posts"

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(url: string) {
  let response = await fetch(url);
  let body = await response.json();
  return body as Post[];
}

async function showPost() {
  let posts: Post[] = await fetchPosts(fetchURL);
  let post: Post = posts[0];
  console.log(post);
};

showPost();
