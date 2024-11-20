// ... (Your existing JavaScript) ...

const users = document.querySelectorAll('.user');
const newChatButton = document.getElementById('new-chat-button');

users.forEach(user => {
  user.addEventListener('click', () => {
    const userName = user.querySelector('.user-name').textContent;
    // Handle starting a chat with the selected user (e.g., open a chat window)
    console.log(`Start chat with ${userName}`); 
  });
});

newChatButton.addEventListener('click', () => {
  // Handle logic for starting a new chat 
  console.log('New chat button clicked!');
});

