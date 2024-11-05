// class Student{
//     constructor(name , rollNo){
//         this.name = name
//         this.rollNo = rollNo
//     }
// }
//     let s1 = new Student('Aarav', 112)
//     console.log (s1.name, s1.rollNo)

/*default parameter*/

// let mult = (a,b ) => {
//     console.log (a*b)
// }

// mult(4,1)

let mult1 = (a,b=2) => {
    console.log (a*b)
}
mult1(12,4)
