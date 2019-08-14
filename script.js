var buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', verbRequest);
});

function verbRequest() {
    var requestURL = '/test.json';
    var button = this;
    var httpVerb = button.dataset.verb;
    var requestType = button.parentElement.dataset.type;

    if ( ! httpVerb ) console.error('Button has no verb, weirdo');
    if ( ! requestType ) console.error('Cannot figure out request type');

    // FETCH
    if ( requestType === 'fetch' ) {
        fetch(requestURL, { method: httpVerb })
            .then(function(request) {
                return request.json();
            })
            .then(function(data) {
                console.log(data);
            });

    // XML
    } else if ( requestType === 'xml' ) {
        var xhr = new XMLHttpRequest();
        xhr.open(httpVerb, requestURL, true);

        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log(this.response);
            }
        }
        xhr.send('data=test');

    // OTHER
    } else {
        console.error('Was not able to match request type:', requestType);
    }
}