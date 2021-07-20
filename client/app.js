const button = document.getElementById('msgBtn');
button.addEventListener('click', appendMessage);
footyButton = document.getElementById('getFootballers');
footyButton.addEventListener('click', appendFootballers);
async function appendMessage(){
    let data = await fetch('http://localhost:3000');
    let jsonText = await data.text();
    renderMessage(jsonText);
};

function renderMessage(text){
    let sectionToAppend = document.getElementById('content');
    let para = document.createElement('p');
    para.textContent = text;
    sectionToAppend.append(para);
}

async function appendFootballers(){
    let data = await fetch('http://localhost:3000/footballers');
    let dataJson = await data.json();
    console.log(dataJson);
    renderFootballers(dataJson.footballers);
}

function renderFootballers(data){
    let sectionToAppend = document.getElementById('content');
    console.log(data[0]);
    console.log(data[0].name);
    let list = document.createElement('ul');
    for (let i=0; i<data.length; i++){
        let item = document.createElement('li');
        item.textContent = data[i].name;
        list.append(item);
    }
    sectionToAppend.append(list);
}