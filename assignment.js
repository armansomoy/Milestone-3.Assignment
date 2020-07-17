//  feetToMile Start
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
//  feetToMile ends



// woodCalculator start
function woodCalculator(chair, table, bed) {
    var chairWoodCount = chair * 1;
    var tableWoodCount = table * 3;
    var bedWoodCount = bed * 5;
    var totalWoodNeed = chairWoodCount + tableWoodCount + bedWoodCount;
    return totalWoodNeed;
}
// woodCalculator ends



// brickCalculator start
function brickCalculator(floar) {
    if (floar <= 10) {
        var bricks = (floar * 15 * 1000);
        return bricks;
    } else if (floar > 10 && floar <= 20) {
        var bricks = (10 * 15 * 1000) + (floar - 10) * 12 * 1000;
        return bricks;
    } else if (floar > 20) {
        var bricks = (10 * 15 * 1000) + (10 * 12 * 1000) + (floar - 20) * 10 * 1000;
        return bricks;
    }
}
// brickCalculator ends



// tinyFriend start
function tinyFriend(names) {
    var tiny = names[0];
    for (i = 0; i < names.length; i++) {
        var currentName = names[i];
        if (currentName.length < tiny.length) {
            tiny = currentName;
        }
    }
    return tiny;
}
// tinyFriend ends


