let myDate = new Date()
console.log(myDate);

//- Date -> toString
console.log(myDate.toString());

//- toLacaleString
console.log(myDate.toLocaleDateString());   // 6/6/2024

//- TypeOf
console.log(typeof myDate); //object

let createdDate = new Date(2024,6,15)   // Month starts from 0-11.
console.log(createdDate.toDateString());

let createdDate2 = new Date(2024,6,15,5,3)
console.log(createdDate2.toLocaleString()); // 15/7/2024, 5:03:00 am

let date3 = new Date('2023-01-15')
console.log(date3.toLocaleString());   // yymmdd

let date4 = new Date('01-15-2023')
console.log(date4.toLocaleString());

//- used while creating quiz projects, polling 
let timeStamp = Date.now()
console.log(timeStamp);
console.log(date4.getTime());   // gets the time in ms.
console.log(Date.now()/1000);   // gets the time in seconds. Where date/1000. To avoid Decimal points convert it using Math.round or Math.floor.



let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1); // starts from 0, so +1
console.log(newDate.getDay());  // starts from Monday

//- Date Customization

console.log(newDate.toLocaleString('default',{
    weekday:'long'
}));

