function makeUser() {
    return {
        name: "John",
        ref: this,
    };
}

let user = makeUser();

alert( user.ref.name );

// Возникнет ошибка, поскольку, пока объект еще не создан this
// будет обращаться к функции "makeUser", в которой нет свойства "name".
