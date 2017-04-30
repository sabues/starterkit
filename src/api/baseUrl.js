export default function getBaseUrl(){
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

// This function allows to switch between the production api and the mock api by adding a querystring /?useMockApi=true
// for example http://localhost:3000/?useMockApi=true

function getQueryStringParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
