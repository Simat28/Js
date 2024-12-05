
//البحث داخل المصفوفة

let promptmsg = prompt ("إكتب الإسم","");
let names = ["Ahmad" , "Ali", "Ibrahim", "Khalid"];
console.log("الإسم المدخل:", names.includes(promptmsg));

if(names.includes(promptmsg) === true){
    console.log("الاسم موجود");
}
else if (names.includes(promptmsg) === false){
    console.log("الاسم غير موجود");
}

/*let names = ["Ahmad" , "Ali", "Ibrahim", "Khalid"];
console.log("الإسم المدخل:", names.includes("Ali"));

if(names.includes("Ali") === true){
    console.log("الاسم موجود");
}
else if (names.includes("Ali") === false){
    console.log("الاسم غير موجود");
}*/
/*let names = ["Ahmad" , "Ali", "Ibrahim", "Khalid"];
console.log("الإسم المدخل " ,names.indexOf("Ali"));

if(names.indexOf("Ali") === 1){
    console.log("الاسم موجود");
}
else if (names.indexOf("Ali") === -1){
    console.log("الاسم غير موجود");
}*/


//------------


//تصفية البيانات

/*function isPositive(val) {
    return val > 50;
}
let ar = [45, 22, 60, 10, 78];
let filtered = ar.filter(isPositive);
console.log(filtered);*/

let ar = [45, 22, 60, 10, 78];
let ar2 = ar.filter(function(element){
    return element >50
})
console.log(ar2);

//---------


// تكرار العناصر

let person = ["Ali", "Sara", "Noor", "Ali"];

let personar = person.filter((val,index,self)=>{
    return self.indexOf(val) !== index;
})
console.log(personar);



//-----------------------------------------------


//جمع القيم

let arr1 = [10, 15, 20, 25];
let total = arr1.reduce(function(prevValue, currentValue){
    return prevValue + currentValue
})
console.log(total)

//-----

// تعديل القيم
let array22 = [2, 4, 6, 8];
let doublearray = array22.map(function(double){
    return double * double
})
console.log(doublearray)

//-----

//ترتيب القيم

let numbersarray = [5, 3, 8, 1, 4];
numbersarray.sort(compareFuncton);
console.log(numbersarray);
function compareFuncton(a,b){
    return a-b ;
}


//دمج المصفوفات

let array1 = [10, 20, 30];  
let array2 = [40, 50, 60];
let mergearray = [...array1, ...array2]
console.log(mergearray)


//إيجاد أكبر وأصغر قيمة

let mArray = [3, 7, 2, 8, 1, 9];
let max = Math.max(...mArray);
let min = Math.min(...mArray);
console.log("Max",max)
console.log("Min",min)


//عكس المصفوفة

let revarray = [5, 4, 3, 2, 1];
revarray.reverse();
console.log(revarray)