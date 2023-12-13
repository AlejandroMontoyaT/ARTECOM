function touchStart(event) {
    // Esta función se ejecutará cuando se inicie un toque en el elemento
    // `.box`
  
    // Agrega la clase `active` al elemento
    this.classList.add("active");
  }
  
  function touchEnd(event) {
    // Si el elemento tiene la clase `active`, redirecciona al enlace
    if (this.classList.contains("active")) {
      window.location.href = this.querySelector("a").href;
    }
  }