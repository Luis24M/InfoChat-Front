document.addEventListener("DOMContentLoaded", function() {
    var chatLog = document.getElementById("chat-log");
    var userInput = document.getElementById("user-input");
    var loginForm = document.getElementById("login-form");
  
    // Presentación inicial del asistente
    var assistantMessage = document.createElement("div");
    assistantMessage.classList.add("reply");
    assistantMessage.textContent = "¡Hola! Soy InfoChat. ¿En qué puedo ayudarte?";
    chatLog.appendChild(assistantMessage);
  
    // Manejo del envío de mensajes del usuario
    userInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter" && userInput.value !== "") {
        var message = document.createElement("div");
        message.classList.add("message");
        message.textContent = userInput.value;
        chatLog.appendChild(message);
  
        // Guardar el valor del userInput antes de restablecerlo
        var query = userInput.value;
  
        userInput.value = "";
  
        // Enviar la consulta del usuario al backend (Flask)
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:5000/chat", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
  
            setTimeout(function() {
              var reply = document.createElement("div");
              reply.classList.add("reply");
              reply.textContent = response.message;
              chatLog.appendChild(reply);
              chatLog.scrollTop = chatLog.scrollHeight;
            }, 500);
          }
        };
  
        xhr.send(JSON.stringify({ query: query }));
      }
    });
  
    // Manejo del envío del formulario de inicio de sesión
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
  
      // Aquí puedes realizar la validación de inicio de sesión o enviar los datos al backend para su procesamiento
      // Resto del código para enviar los datos del formulario de inicio de sesión al backend
      // ...
  
      loginForm.reset();
    });
  });
  