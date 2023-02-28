function getSecondsToTomorrow() {
    const SECONDS_IN_ONE_DAY = 86400;
    const SECONDS_IN_ONE_HOUR = 3600;
    const SECONSD_IN_ONE_MINUTE = 60;
    
    let date = new Date();

    return SECONDS_IN_ONE_DAY - date.getHours() * SECONDS_IN_ONE_HOUR -
        date.getMinutes() * SECONSD_IN_ONE_MINUTE - date.getSeconds();
}

alert( getSecondsToTomorrow() );