document.getElementById("personalForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const dob = document.getElementById("dob").value;

  // Simple validation
  if (!name || !email || !phone || !dob) {
    document.getElementById("response").innerText = "Please fill out all fields.";
    return;
  }

  // Submit to server (mock)
  document.getElementById("response").innerText = "Form submitted successfully!";
});
