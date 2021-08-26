const url = "https://softwareq-merdeka-api.azure-api.net/blog/v1/ListAll?softwareq-apim-subscription-key=1eb7a0411988483f87375b1ac9defd0c";

//const url2 = "https://softwareq-merdeka-api.azure-api.net/blog/v1/ById?id='+idAPI+'&softwareq-apim-subscription-key=1eb7a0411988483f87375b1ac9defd0c";


async function getUsers() {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

var searchItem = 1;

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    
    users.forEach(user => {
        
        let htmlSegment = `<style src="index.css"> p{font-size:12;} </style><article class="browser"><h2>${user.id})${user.title}<h2><br>
        <img src="${user.linkToHeaderImage}" width=50% length=50%>
        <p>${user.content}</p><br>
        <p>Created by ${user.createdBy},${user.createdAtDateTimeOffset}</p></article><br>`;

        html += htmlSegment;
    
    });

    let allB = document.querySelector('.container');
    allB.innerHTML = html;
}







  

