function formatDate(date) {
    const MILLISECONDS_IN_ONE_SECOND = 1000;
    const MILLISECONDS_IN_ONE_MINUTE = 60000;
    const MILLISECONDS_IN_ONE_HOUR = 3600000;

    let elapsedMilliseconds = Date.now() - date.getTime();
    
    switch (true) {
        case elapsedMilliseconds < MILLISECONDS_IN_ONE_SECOND :
            return "прямо сейчас";

        case elapsedMilliseconds < MILLISECONDS_IN_ONE_MINUTE :
            return `${elapsedMilliseconds / MILLISECONDS_IN_ONE_SECOND} сек. назад`;

        case elapsedMilliseconds < MILLISECONDS_IN_ONE_HOUR :
            return `${elapsedMilliseconds / MILLISECONDS_IN_ONE_MINUTE} мин. назад`;
        
        default:
            let day = addZeroIfNecessary(date.getDay());
            let month = addZeroIfNecessary(date.getMonth());
            let hours = addZeroIfNecessary(date.getHours());
            let minutes = addZeroIfNecessary(date.getMinutes());
            

            return `${day}.${month}.${date.getFullYear()} ${hours}:${minutes}`;

            function addZeroIfNecessary(number) {
                let str = String(number);

                if (str.length == 1) str = 0 + str;

                return str;
            }
    }
}

alert( formatDate(new Date(new Date - 1)) );
alert( formatDate(new Date(new Date - 30 * 1000)) );
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) );
alert( formatDate(new Date(new Date - 86400 * 1000)) );