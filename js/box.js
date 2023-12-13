function touchStart(event) {
    // Esta función se ejecutará cuando se inicie un toque en el elemento
    // `.box`
  
    // Agrega la clase `active` al elemento
    this.classList.add("active");
  }
  
  function touchEnd(event) {
    // Si el elemento tiene la clase `active`, redirecciona al enlace
    if (this.classList.contains("active")) {
      // Retrasa la ejecución de la función `touchEnd()` durante 500 milisegundos
    setTimeout(function() {
      window.location.href = this.querySelector("a").href;
    }, 500);
  }
}
 // Vincula las funciones de evento al elemento
    document.querySelector(".box").addEventListener("touchstart", touchStart);
    document.querySelector(".box").addEventListener("touchend", touchEnd);
