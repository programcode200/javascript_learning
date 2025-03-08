document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Add login logic here
    alert(`Login attempted with Email: ${email} and Password: ${password}`);
  });
  