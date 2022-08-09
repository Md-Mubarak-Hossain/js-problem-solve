/*Write a function to
remove duplicate values from bellows array:
duplicateArray=['Rani','a','Rana','b','b','c','a','Rani','Rana','a']

..............................................................
output:
uniqueArray=['Rani','a','Rana','b','c']
.............................................................
*/

const duplicateArray1 = ['Rani', 'a', 'Rana', 'b', 'b', 'c', 'a', 'Rani', 'Rana', 'a'];
function removeDuplicate(duplicates) {
    let uniqueName = [];
    for (let i = 0; i < duplicates.length; i++) {
        const name = duplicates[i];
        if (uniqueName.includes(name) === false) {
            uniqueName.push(name);

        }
    }
    return uniqueName;
}
const result = removeDuplicate(duplicateArray1);
console.log(result);