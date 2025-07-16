function generateLetter() {
  const recipient = document.getElementById('recipient').value.trim();
  const message = document.getElementById('message').value.trim();
  const sender = document.getElementById('sender').value.trim();
  const imageInput = document.getElementById('imageInput').files[0];

  if (!recipient || !message) {
    alert('Nama dan pesan harus diisi ya!');
    return;
  }

  document.getElementById('letterRecipient').textContent = recipient;
  document.getElementById('letterMessage').textContent = message;
  document.getElementById('letterSender').textContent = sender ? `Dari: ${sender}` : '';

  if (imageInput) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('letterImage').src = e.target.result;
    };
    reader.readAsDataURL(imageInput);
  } else {
    document.getElementById('letterImage').src = '';
  }

  document.getElementById('form-container').classList.add('hidden');
  document.getElementById('letter-container').classList.remove('hidden');
}

function backToForm() {
  document.getElementById('form-container').classList.remove('hidden');
  document.getElementById('letter-container').classList.add('hidden');

  document.getElementById('recipient').value = '';
  document.getElementById('message').value = '';
  document.getElementById('sender').value = '';
  document.getElementById('imageInput').value = '';
}
