function Person(firstName,lastName,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.enrollCourses=[];

    this.printInfo = () => {
        return `${this.firstName},${this.lastName},${this.age}`;
    }
}

function Student(firstName,lastName,age) {
    Person.call(this,firstName,lastName,age);
    this.enroll = (course) => {
        this.enrollCourses.push(course);
    }

    this.printCourses = () => {
        return `${this.enrollCourses.map((c) => c.coursename)}`;
    }
}

let salman = new Student('Salman','Uddin',22);
salman.enroll({coursename:'Cloud FullStack'})
salman.enroll({coursename:'GenAI'})

console.log(salman.printInfo() , salman.printCourses());