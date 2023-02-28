function checkSpam(str) {
    let lowerCaseStr = str.toLowerCase();

    return lowerCaseStr.includes("viagra") || lowerCaseStr.includes("xxx");  
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );