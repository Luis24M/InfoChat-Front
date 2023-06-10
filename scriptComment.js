document.addEventListener("DOMContentLoaded", function() {
    // Recibir comentarios
    var commentForm = document.getElementById("comment-form");
  
    commentForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var comment = document.getElementById("comment-input").value;
      var name = document.getElementById("name-input").value;
      var email = document.getElementById("email-input").value;
  
      if (comment !== "" && name !== "" && email !== "") {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://chatbot-3xf7.onrender.com/comments", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Aquí puedes realizar alguna acción después de enviar el comentario al servidor, si es necesario
            // Por ejemplo, mostrar un mensaje de éxito al usuario
            alert("¡Comentario enviado con éxito!");
          }
        };
  
        xhr.send(JSON.stringify({ comment: comment, name: name, email: email }));
  
        commentForm.reset();
      }
    });
  });
  