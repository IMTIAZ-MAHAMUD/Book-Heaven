// js/auth.js
// Small client-side helpers for the auth demo page.
// Later: change forms to POST to server-side PHP scripts (login.php/register.php) and validate on server.

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  if(loginForm){
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // STUDENT-CHANGE: here you would send fetch('/login.php', {method:'POST', body: new FormData(loginForm)})
      alert('Demo login: replace this with fetch to server-side PHP to authenticate.');
    });
  }

  const regForm = document.getElementById('register-form');
  if(regForm){
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Demo register: replace with fetch to register.php and store user in DB.');
    });
  }
});

