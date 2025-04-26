// script.js
document.getElementById('fetchJoke').addEventListener('click', function() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            document.getElementById('joke').innerHTML = data.setup + ' <br> <strong>' + data.punchline + '</strong>';
        })
        .catch(function(error) {
            console.error('Error fetching joke:', error);
        });
});