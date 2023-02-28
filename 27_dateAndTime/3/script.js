function getLocalDay(date) {
    let weekDay = date.getDay();

    return weekDay ? weekDay : 7;
}

let date = new Date(2012, 0, 3);

alert( getLocalDay(date) );