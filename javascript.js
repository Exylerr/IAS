document.getElementById('noautho').addEventListener('click', function() {
    var fileUrl = 'PUP Website.pdf';
    var a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'PUP Website.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

document.getElementById('withautho').addEventListener('click', function() {
    document.getElementById('password-container').style.display = "flex";

    document.getElementById('submitPassword').addEventListener('click', function() {
        var password = document.getElementById('passwordInput').value;
        if (password === 'qwerty') {
            var fileUrl = 'PUP Website.pdf';
            
            fetch(fileUrl)
            .then(response => response.blob())
            .then(blob => {
                var a = document.createElement('a');
                var url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = 'PUP Website.pdf';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    
            document.getElementById('password-container').style.display = "none";
            document.getElementById('passwordInput').value = '';
        } else {
            alert('Incorrect password. Please try again.');
            
            document.getElementById('passwordInput').focus();
            document.getElementById('passwordInput').value = '';
        }
    });
});

document.getElementById('passwordInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('submitPassword').click();
    }
});

var pass = document.getElementById('password-container');
var closeBtn = document.getElementsByClassName("close")[0];

window.onclick = function(event) {
    if (event.target == pass) {
        pass.style.display = "none";
        document.getElementById('passwordInput').value = '';
    }
};

closeBtn.onclick = function() {
    pass.style.display = "none";
    document.getElementById('passwordInput').value = '';
};
