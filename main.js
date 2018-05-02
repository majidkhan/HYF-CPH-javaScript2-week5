// Pankaj Review: "Code is to complex and is difficult to understand. Please make it simple."
// Solution : Allready provided funtion is used i.e. fetchJSONData(). Tried to make it simple. The code down in the comment is left to show it to mentor that an alternate way to render data. It was taught in class. 
let btn = document.getElementById("btn");

function fetchJSONData(url, callbackFn) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
        console.log("Data loaded.");
        const data = JSON.parse(xhr.responseText);
        callbackFn(data);
    });
    xhr.open('GET', url);
    xhr.send();
}

function getRepoNames( data ) {

    const container = document.getElementById("items");
    let render_li = "";
    data.forEach( function(item)  {
        render_li += `<li class="list-group-item"><a href="${item.html_url}" target="_blank">${item.name}</a></li>`;    // template literals to render data

            /* #########     These commented lines have been replaced by the line of code above   
            const element = document.createElement("li");
            element.classList.add('list-group-item');
            const link = document.createElement("a");
            link.setAttribute('href',item.html_url);
            link.setAttribute('target', '_blank');
            const txtNode = document.createTextNode(item.name);
            link.appendChild(txtNode);
            element.appendChild(link);
            container.appendChild(element);  
            ############    */
    });
    container.innerHTML = render_li;
    btn.innerHTML = "JSON data loaded";

}



btn.addEventListener('click', function() {
    fetchJSONData('https://api.github.com/orgs/HackYourFuture/repos', function(repoList) {
        getRepoNames(repoList);
    });  
});