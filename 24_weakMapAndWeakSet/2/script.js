function getReadMessageInfo(messages, readMessages) {
    let result = "";

    for (let i = 0; i < messages.length; i++) {
        let isRead = readMessages.has(messages[i]) ? "Да" : "Нет";
        let date = isRead == "Да" ?
            `Дата: ${readMessages.get(messages[i])}` :
            "";

        result += `Прочитано сообщение №${i + 1}? - ${isRead}!`;
        result += "   " + date;
        if (i + 1 < messages.length) result += "\n";
    }

    return result;
}

function getCurrentDate() {
    let date = new Date();
    let month = date.getMonth() + 1 + "";
    
    if (month.length == 1) month = 0 + month;

    return `${date.getDate()}/${month}/${date.getFullYear()}`;
}

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakMap();
let resultInfo = "";

readMessages.set(messages[0], getCurrentDate());
readMessages.set(messages[1], getCurrentDate());

resultInfo = getReadMessageInfo(messages, readMessages);

alert(resultInfo);

messages.shift();

resultInfo = getReadMessageInfo(messages, readMessages);

alert(resultInfo);

