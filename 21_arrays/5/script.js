function getMaxSubSum(arr) {
    let maxSum = 0;
    let tempMaxSum = 0;
    let length = arr.length;

    for (let i = 0; i < arr.length; i++) {
        maxSum += arr[i];
    }

    tempMaxSum = maxSum;

    for (let i = length - 1; i >= 0; i--) {
        tempMaxSum -= arr[i];
        
        if (tempMaxSum > maxSum) {
            maxSum = tempMaxSum;
            length--;
        }
    }

    tempMaxSum = maxSum;

    for (let i = 0; i < length; i++) {
        tempMaxSum -= arr[i];
        
        if (tempMaxSum > maxSum) maxSum = tempMaxSum;
    }
    
    return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) );  // 5
alert( getMaxSubSum([2, -1, 2, 3, -9]) );  // 6
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );  // 11
alert( getMaxSubSum([-2, -1, 1, 2]) );  // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) );  // 100
alert( getMaxSubSum([1, 2, 3]) );  // 6