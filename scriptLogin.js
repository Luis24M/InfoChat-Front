document.addEventListener("DOMContentLoaded", function() {
    // Obtener los elementos del formulario
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
  
    // Manejar el evento submit del formulario
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Evitar el envío del formulario por defecto
  
      const email = emailInput.value;
      const password = passwordInput.value;
  
      try {
        // Enviar la solicitud de inicio de sesión al backend
        const response = await axios.post('http://localhost:5000/login', { email, password });
  
        // Mostrar la respuesta del backend
        // alert(response.data.message);
        // Aquí puedes redirigir al usuario a otra página si el inicio de sesión es exitoso
        if (response.data.message === 'Login successful') {
          window.location.href = 'inicio.html';
        }
      } catch (error) {
        // Mostrar el mensaje de error si la solicitud falla
        if (error.response) {
          alert(error.response.data.message);
        } else {
        //   alert('Error de conexión');
        }
      }
    });
  });
  
  // Verificar el estado de autenticación al cargar la página de inicio
  document.addEventListener("DOMContentLoaded", function() {
    // Hacer una solicitud al backend para verificar el estado de autenticación
    axios.get('http://localhost:5000/check_auth')
      .then((response) => {
        // Si el usuario no está autenticado, redirigirlo a la página de inicio de sesión
        if (!response.data.authenticated) {
          window.location.href = 'index.html';
        }
      })
      .catch((error) => {
        console.error(error);
        // alert('Error de conexión');
      });
  });
  