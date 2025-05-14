document.getElementById('formData').addEventListener('submit', function (event) {
    event.preventDefault();

    const ad = document.getElementById('ad').value;
    const yer = document.getElementById('yer').value;
    const yorum = document.getElementById('yorum').value;

    window.location.href = `veriler.html?ad=${ad}&yer=${yer}&yorum=${encodeURIComponent(yorum)}`;

});






