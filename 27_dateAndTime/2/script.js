function getWeekDay(date) {
    const weekNames = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return weekNames[date.getDay()];
}

let date = new Date(2012, 0, 3);

alert( getWeekDay(date) );