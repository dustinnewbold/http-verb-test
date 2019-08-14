const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', verbRequest);
});

function verbRequest() {
    const requestURL = '/test.json';
    const button = this;
    const httpVerb = button.dataset.verb;
    const requestType = button.parentElement.dataset.type;

    if ( ! httpVerb ) console.error('Button has no verb, weirdo');
    if ( ! requestType ) console.error('Cannot figure out request type');

    if ( requestType === 'fetch' ) {
        fetch('/test.json', { method: httpVerb })
            .then(request => {
                return request.json()
            })
            .then(data => {
                console.log(data);
            });
    } else {
        console.error('Was not able to match request type:', requestType);
    }
}