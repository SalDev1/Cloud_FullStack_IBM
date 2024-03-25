
// Prototype-based or Object-LiteraL Style.
// Build a relationship between Person and Student.
let Person={
    firstName:'',
    lastName:'',
    age:0,
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let Student = {
    enrollCourses: [],
    enroll(course){
        this.enrollCourses.push(course)
    },
    toString() {
       return `${this.enrollCourses.map((c)=>c.courseName)}`;
    },
}

// Establishing a link between Student and Person Class + Prototype Chaining.
Object.setPrototypeOf(Student,Person);
let salman = {firstName:'Salman', lastName:'Uddin', age:22}
// Copies the prototype of person into student.
Object.setPrototypeOf(salman,Student)
salman.enroll({courseName:'CloudFullStack'})
salman.enroll({courseName:'GenAI'})

console.log(`Student ${salman.fullName()} enrolled for ${salman}`)