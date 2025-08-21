export const fetchPostsFromApi = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json(); 
};
