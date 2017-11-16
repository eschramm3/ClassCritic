function getProducts() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://localhost:8080/api/courses/all:443"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
        .then(response => response.text())
        .then(contents => console.log(contents))
        .catch(console.log("Can’t access " + url + " response. Blocked by browser?"))
}