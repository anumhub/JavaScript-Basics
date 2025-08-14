let a=4
console .log(a)
console.log(typeof(a))

let b=234.6
console.log(typeof(b))

let c ="Anum Sharma"
console.log(typeof(c))

let required=true
console.log(required)
console.log(!required)
console.log(typeof(required))


// let c ="Anum Sharma"
// let c = a+b  (it didn't work, we cann't redeclare variable with let keyword but possible with var keyword)

// var c= "anum sharma"
//var c = a+b // user can redeclare with var keywordand no error will be displayed
c = a+b // assigning is allowed with let 
// if you put var c=a+b , this is also allowed 

// const c="anum"
// c= a+b  ( it will kick us with error , no reassign)
console.log(c)
