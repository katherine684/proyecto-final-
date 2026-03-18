document.addEventListener("DOMContentLoaded", () => {

  console.log("✅ JS funcionando");

  // ===== BOTONES COMPRAR =====
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const botonesComprar = document.querySelectorAll(".producto button, .card button");

  botonesComprar.forEach((btn) => {
    btn.addEventListener("click", function() {

      const producto = this.parentElement;

      const nombre = producto.querySelector("h3").textContent;
      const precio = producto.querySelector(".precio") 
        ? producto.querySelector(".precio").textContent 
        : producto.querySelector("p").textContent;

      const talla = producto.querySelector("select") 
        ? producto.querySelector("select").value 
        : "Única";

      const item = { nombre, precio, talla };

      carrito.push(item);
      localStorage.setItem("carrito", JSON.stringify(carrito));

      // MENSAJE BONITO
      const mensaje = document.createElement("div");
      mensaje.textContent = "🛒 Agregado: " + nombre;
      mensaje.style.position = "fixed";
      mensaje.style.bottom = "20px";
      mensaje.style.right = "20px";
      mensaje.style.background = "#4CAF50";
      mensaje.style.color = "white";
      mensaje.style.padding = "10px 15px";
      mensaje.style.borderRadius = "8px";

      document.body.appendChild(mensaje);

      setTimeout(() => mensaje.remove(), 2000);
    });
  });

  // ===== SUSCRIPCIÓN =====
  const btnSuscribir = document.querySelector(".footer-col button");
  const inputCorreo = document.querySelector(".footer-col input");

  if(btnSuscribir && inputCorreo){
    btnSuscribir.addEventListener("click", () => {
      if(inputCorreo.value === ""){
        alert("Por favor ingresa tu correo 📩");
      } else {
        alert("Gracias por suscribirte 💖");
        inputCorreo.value = "";
      }
    });
  }

  // ===== MENÚ ACTIVO =====
  const enlaces = document.querySelectorAll(".menu a");

  enlaces.forEach(link => {
    if(link.href === window.location.href){
      link.classList.add("activo");
    }
  });

  // ===== EFECTO BOTONES =====
  document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mousedown", () => {
      btn.style.transform = "scale(0.95)";
    });

    btn.addEventListener("mouseup", () => {
      btn.style.transform = "scale(1)";
    });
  });

  // ===== FORMULARIO =====
  const form = document.querySelector(".formulario");
  const mensajeExito = document.getElementById("mensaje-exito");

  if(form && mensajeExito){
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const nombre = form.querySelector("input[type='text']").value;
      const correo = form.querySelector("input[type='email']").value;
      const mensaje = form.querySelector("textarea").value;
      const boton = form.querySelector("button");

      if(nombre === "" || correo === "" || mensaje === ""){
        alert("Completa todos los campos");
        return;
      }

      boton.textContent = "Enviando...";
      boton.disabled = true;

      setTimeout(() => {
        mensajeExito.style.display = "block";
        form.reset();

        boton.textContent = "Enviar mensaje";
        boton.disabled = false;
      }, 1500);
    });
  }

});