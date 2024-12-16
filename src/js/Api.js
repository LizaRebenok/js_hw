export const apiUrl = 'https://jsonplaceholder.typicode.com/';

export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Помилка під час завантаження даних.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

export const getPostById = async (postId) => fetchData(`${apiUrl}posts/${postId}`);

export const getCommentsByPostId = async (postId) => fetchData(`${apiUrl}comments?postId=${postId}`);
