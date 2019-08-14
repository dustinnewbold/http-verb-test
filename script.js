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

    if ( requestType === 'fetch' ) {
        fetch('/test.json', { method: httpVerb })
            .then(function(request) {
                return request.json();
            })
            .then(function(data) {
                console.log(data);
            });
    } else {
        console.error('Was not able to match request type:', requestType);
    }
}