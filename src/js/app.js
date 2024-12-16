import { getPostById, getCommentsByPostId } from './Api.js';

const postForm = document.getElementById('postForm');
const postIdInput = document.getElementById('postId');
const postBlock = document.querySelector('.post-block');
const postTitle = postBlock.querySelector('.post-title');
const postBody = postBlock.querySelector('.post-body');
const commentsButton = document.getElementById('commentsButton');
const commentsBlock = document.getElementById('commentsBlock');

postForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const postId = Number(postIdInput.value);

  if (!postId || postId < 1 || postId > 100 || Number.isNaN(postId)) {
    return;
  }

  try {
    commentsBlock.innerHTML = '';
    commentsBlock.style.display = 'none';

    const post = await getPostById(postId);
    postTitle.textContent = post.title;
    postBody.textContent = post.body;
    postBlock.style.display = 'block';

    commentsButton.addEventListener('click', async () => {
      try {
        const comments = await getCommentsByPostId(postId);
        commentsBlock.innerHTML = '';

        if (comments.length > 0) {
          comments.forEach((comment) => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment-content');
            commentElement.innerHTML = `
              <strong class="f">${comment.name}</strong>
              <p>${comment.body}</p>
            `;
            commentsBlock.appendChild(commentElement);
          });
        } else {
          commentsBlock.innerHTML = '<p>Коментарів немає.</p>';
        }
        commentsBlock.style.display = 'block';
      } catch (error) {
        alert(`Помилка при загрузці коментарів: ${error.message}`);
      }
    });
  } catch (error) {
    alert(`Помилка при загрузці поста: ${error.message}`);
  }
});
