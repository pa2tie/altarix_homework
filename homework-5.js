// 1
// принимает строку для поиска
// возвращает массив объектов пользователей GitHub или null, если произошла ошибка
// запрос к GitHub API должен быть асинхронным
// документация: https://developer.github.com/v3/search/#search-users
// использовать fetch
function loadGitHubUsers(searchString) {
    var options = {
        method: 'GET'
    }

    return fetch('https://api.github.com/search/users?q=' + searchString, options)
    .then((response) => {
        return response.json();
    })
    .then((users) => {
        return users['items'];
    })
    .catch((error) => {
        return error;
    });
}

loadGitHubUsers('pa2tie')
.then((users) => {
    console.log(users);
})
.catch((error) => {
    console.log(null);
});

// 1*
// создать на основе GitHub API компонент поиска пользователей GitHub
// нужен инпут для ввода поисковой строки и кнопка "Найти" для выполнения поиска
// если запрос к GitHub API возвращает объекты пользователей, отобразить имена первых пятерых удобным для вас способом - например, списком
// если по запросу ничего не найдено, отобразить соответствующее уведомление
// если произошла ошибка, отобразить её текст

var searchUsersForm = document.getElementById("searchUsersForm");

searchUsersForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = objectifyForm(searchUsersForm);
    var userName = formData["searchValue"].toString();

    loadGitHubUsers(userName)
    .then((users) => {
        var ul = searchUsersForm.parentNode.getElementsByTagName('ul')[0];
        if (ul) {
            searchUsersForm.parentNode.removeChild(ul);
        }
        searchUsersForm.parentNode.appendChild(createListElement(users, 5));
    })
    .catch((error) => {
        alert(error);
    });
});

function objectifyForm(formArray) { //serialize form data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++) {
        if (formArray[i]['name']) {
            returnArray[formArray[i]['name']] = formArray[i]['value'];
        }
    }
    return returnArray;
}

function createListElement(jsonList, maxElements) {
    var ul = document.createElement('ul');

    if (jsonList.length > 0) {
        for (let i = 0; i < (maxElements ? Math.min(jsonList.length, maxElements) : jsonList.length); i++) {
            let li = document.createElement('li');
            li.innerHTML = jsonList[i]['login'];
            ul.appendChild(li);
        }
    } else {
        let li = document.createElement('li');
        li.innerHTML = 'Список пуст';
        ul.appendChild(li);
    }


    return ul;
}

// 2*
// https://www.youtube.com/watch?v=j4_9BZezSUA