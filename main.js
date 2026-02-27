function toggleNav() {
  document.querySelector('.nav-links').classList.toggle('open');
}

function openModal() {
  document.getElementById('contactModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('contactModal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('contactModal')) closeModal();
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function(response) {
      if (response.ok) {
        form.innerHTML = '<p class="form-success">Thanks for reaching out — I\'ll be in touch soon.</p>';
      } else {
        form.innerHTML = '<p class="form-error">Something went wrong. Please try again or reach out on LinkedIn.</p>';
      }
    }).catch(function() {
      form.innerHTML = '<p class="form-error">Something went wrong. Please try again or reach out on LinkedIn.</p>';
    });
  });
});
