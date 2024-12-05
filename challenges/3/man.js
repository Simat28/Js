
let grades = [45, 60, 78, 30, 90];
let ar2 = grades.filter(function(element){
    return element >50
})
console.log(ar2.length);

//-------------
let age = [20, 15, 25, 40, 45];
let total = age.reduce(function(prevAge, currentAge){
    return prevAge + currentAge
})

function getAvrrageAge(age) {
    return age.reduce / age.length;
}
console.log(getAvrrageAge(age))

console.log("مجموع الأعمار:", total)
let arage= age.filter(function(element){
    return element <18
})
console.log("عدد الأشخاص الذين أعمارهم أقل من 18:", arage);