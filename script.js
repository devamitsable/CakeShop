document.getElementById('year').textContent = new Date().getFullYear();

  const form = document.getElementById('quoteForm');
  const success = document.getElementById('formSuccess');
  const waLink = document.getElementById('waLink');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const cakeType = document.getElementById('cakeType').value;
    const needDate = document.getElementById('needDate').value;
    const message = document.getElementById('message').value.trim();

    const text = `Hi, I'd like a quote:%0AName: ${name}%0APhone: ${phone}%0ACake type: ${cakeType}%0ADate needed: ${needDate || 'Not specified'}%0ADetails: ${message || 'None'}`;
    waLink.href = `https://wa.me/917318502878?text=${text}`;

    success.style.display = 'block';
    success.scrollIntoView({behavior:'smooth', block:'center'});
  });
