//function superbowlWin(record) {
//   if (record.result === 'W') {
//        return record.year;
//    }
//    else {
//        return undefined;
//    }
//}

//function superbowlWin(record) {
//    const result = record.find(element => element.result === "W")
//    return result ? (result.year) : undefined;
//}

function superbowlWin(yearsAndResults) {
    const result = yearsAndResults.find(record => record.result === "W");
    return (result ? result.year : undefined);
}