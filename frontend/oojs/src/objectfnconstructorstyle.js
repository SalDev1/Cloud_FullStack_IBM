// Function Constructor --> Instants Member.
function Person(firstName,lastName,age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    const adultAge = 18

    // Private Member Function.
    let isAdult = () => this.age >= adultAge
    // Instationated 
    this.isEligibleForVoting = () => isAdult()
} 

let utkarsh = new Person('Utkarsh','Lal',22);
console.log(utkarsh.isEligibleForVoting());