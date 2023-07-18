// post.js

// Function to handle the edit/save button click
function handleEditSaveButtonClick() {
    const postTitle = document.querySelector('.post-title');
    const postText = document.querySelector('.post-text');
    const editSaveButton = document.querySelector('.edit-save-button');
  
    if (editSaveButton.textContent === 'Edit') {
      postTitle.contentEditable = true;
      postText.contentEditable = true;
      postTitle.classList.add('edit-mode');
      postText.classList.add('edit-mode');
      editSaveButton.innerHTML = '<i class="fas fa-save"></i>Save';
    } else {
      postTitle.contentEditable = false;
      postText.contentEditable = false;
      postTitle.classList.remove('edit-mode');
      postText.classList.remove('edit-mode');
      editSaveButton.innerHTML = '<i class="fas fa-edit"></i>Edit';
    }
  }
  
  // Event listener for the edit/save button click
  const editSaveButton = document.querySelector('.edit-save-button');
  editSaveButton.addEventListener('click', handleEditSaveButtonClick);
  
  // Function to handle the like button click
  function handleLikeButtonClick() {
    const likeButton = document.querySelector('.like-button');
    const likeCounter = document.querySelector('.like-counter');
    let likeCount = parseInt(likeCounter.textContent);
  
    if (!likeButton.classList.contains('liked')) {
      likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i>Liked!';
      likeCount++;
    } else {
      likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i>Like';
      likeCount--;
    }
  
    likeButton.classList.toggle('liked');
    likeCounter.textContent = likeCount === 1 ? '1 person likes this!' : `${likeCount} people like this!`;
  }
  
  // Event listener for the like button click
  const likeButton = document.querySelector('.like-button');
  likeButton.addEventListener('click', handleLikeButtonClick);
  
  // Function to handle the comment button click
  function handleCommentButtonClick() {
    const commentInput = document.querySelector('.comment-input');
    const allComments = document.querySelector('.all-comments');
    const newComment = commentInput.value.trim();
  
    if (newComment !== '') {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
      commentDiv.textContent = `User: ${newComment}`;
      allComments.insertBefore(commentDiv, allComments.firstChild);
      commentInput.value = '';
    }
  }
  
  // Event listener for the comment button click
  const commentButton = document.querySelector('.comment-button');
  commentButton.addEventListener('click', handleCommentButtonClick);
  