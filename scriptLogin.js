document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const errorMessage = document.getElementById('error-message');
    
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
    
      const email = emailInput.value;
      const password = passwordInput.value;
    
      try {
        const response = await axios.post('https://chatbot-3xf7.onrender.com/login', { email, password });
    
        if (response.data.message === 'Login successful') {
          window.location.href = 'inicio.html';
        } else {
          showErrorMessage('Invalid email or password');
        }
      } catch (error) {
        showErrorMessage('Error de conexión');
      }
    });
  
    function showErrorMessage(message) {
      errorMessage.textContent = message;
      errorMessage.style.display = 'block';
      errorMessage.style.opacity = '1';
      errorMessage.style.color = 'white';
      errorMessage.style.paddingBottom = '20px';
      errorMessage.style.textAlign = 'center';
    }
  });
  