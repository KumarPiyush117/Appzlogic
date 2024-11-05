// class Employee{
//     setEmpDetails(name, id, phoneNo){
//         this.name = name
//         this.id = id
//         this.phoneNo
//     }
//     getEmpName(){
//         return this.name
//     }
    
//     getEmpId(){
//         return this.id
//     }
    
//     getEmpPhoneNo(){
//         return this.phoneNo
//     }
// }

// let e1 = new Employee()
// e1.setEmpDetails('john', 12, 4567891231)
// console.log (e1.getEmpName())
// console.log (e1.getEmpId())
// console.log (e1.getEmpPhoneNo())


// class Student{
//     setStudentDetails(name, rollNo, phoneNo){
//         this.name = name
//         this.rollNo = rollNo
//         this.phoneNo = phoneNo
//     }

//     getStuName(){
//         return this.name
//     }

//     getStuRollNo(){
//         return this.rollNo
//     }
//     getStuPhoneNo(){
//         return this.phoneNo
//     }
// }

// let s1 = new Student()
// s1.setStudentDetails('Abram', 9, 7878852456)
// console.log (s1.getStuName())
// console.log (s1.getStuRollNo())
// console.log (s1.getStuPhoneNo())



class Employee{
    setEmpDetails = (name, id, phoneNo) => {
        this.name = name
        this.id = id
        this.phoneNo = phoneNo
    }
    getName(){
        return this.name
    }
    
    getId(){
        return this.id
    }
    
    getPhoneNo(){
        return this.phoneNo
    }
}

let e1 = new Employee()
e1.setEmpDetails('Surabhi', 9, 7982392388)
console.log (e1.getName, e1.getId, e1.getPhoneNo)




