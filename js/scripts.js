document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const form = e.target;
    const errors = [];
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  
    for (const element of form.elements) {
      if (element.type !== "submit") {
        if (!element.value || element.value.trim().length < 10) {
          errors.push(`${element.name} mező legalább 10 karakter hosszú kell legyen.`);
        }
        if (element.name === "email" && !emailPattern.test(element.value)) {
          errors.push("Érvénytelen email cím.");
        }
      }
    }
  
    const errorDiv = document.getElementById("errors");
    errorDiv.innerHTML = "";
    if (errors.length > 0) {
      errorDiv.innerHTML = "<ul><li>" + errors.join("</li><li>") + "</li></ul>";
    } else {
      alert("Űrlap sikeresen elküldve!");
      form.reset();
    }
  });
  