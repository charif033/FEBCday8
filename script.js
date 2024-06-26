const submitbtn = document.getElementById("submit");
submitbtn.addEventListener("click", inserttext);

function inserttext() {
    const text = document.getElementById("textinput").value;
    const result = document.getElementById("result");
    result.innerHTML += `<p>${text}</p>`;
}

async function fetchData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await data.json()
    const titleList = document.getElementById("titleList");
    for (let i = 0; i < json.length; i++) {
        titleList.innerHTML += `<p>${json[i].title}</p>`
    }
}
fetchData()

