function getReadMessageInfo(messages, readMessages) {
    let result = "";

    for (let i = 0; i < messages.length; i++) {
        let isRead = readMessages.has(messages[i]) ? "Да" : "Нет";
    
        result += `Прочитано сообщение №${i + 1}? - ${isRead}!`;
    
        if (i + 1 < messages.length) result += "\n";
    }

    return result;
}

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakSet();
let resultInfo = "";

readMessages.add(messages[0]);
readMessages.add(messages[1]);

resultInfo = getReadMessageInfo(messages, readMessages);

alert(resultInfo);

messages.shift();

resultInfo = getReadMessageInfo(messages, readMessages);

alert(resultInfo);