const img = document.querySelector('img');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=k4rXUclbltEhgYXZHyKuxVa39llGTWba&s=cats', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
        
        const nextGif = document.getElementById('next-gif-btn');
        nextGif.addEventListener('click', () => {
            window.location.reload();
        })

        const tempInput = document.createElement('textArea');
        const main = document.querySelector('.main');
        main.appendChild(tempInput);
        tempInput.value = img.src;

        const copyLink = document.getElementById('copy-link-btn');
        copyLink.addEventListener('click', () => {
            // select text
            tempInput.select();
            // copy it
            document.execCommand('copy');
            console.log('link copied!');
        })
    });
