/*
Solve the probem:
...............................
Fixed:
per Chair wood=3 cft;
per table wood=10 cft;
per bed wood=30 cft;
................................
vary:quantity;
Write afunction to calculate for vary quantity of items;
................................
input: 
number chair=4;
number table=5;
number bed=2;
................................
*/

function caculatorWood(chair, table, bed) {
    let perChairWood = 3;
    let perTableWood = 10;
    let perBedWood = 30;
    let totalChairWood = chair * perChairWood;
    let totalTableWood = table * perTableWood;
    let totalBedWood = bed * perBedWood;
    let totalWood = totalChairWood + totalTableWood + totalBedWood;
    return totalWood;
}

const numberChair = 4;
const numberTable = 5
const numberBed = 2;
const totalWoodOfFurniture = caculatorWood(numberChair, numberTable, numberBed);
console.log(totalWoodOfFurniture);