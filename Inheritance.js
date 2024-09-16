class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    printDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
}

class Student extends Person {
    constructor(name, age, gender, rollNo, course) {
        super(name, age, gender);

        if (rollNo <= 0) {
            throw new Error("Roll number must be greater than zero.");
        }

        this.rollNo = rollNo;
        this.course = course;
    }

    printDetails() {
        console.log(`Name: ${this.name}, Roll No: ${this.rollNo}, Course: ${this.course},Gender: ${this.gender}`);
    }
}

try {
    const student1 = new Student("Ronak", 23, "Male", 21, "IT");
    student1.printDetails();  

    const student2 = new Student("Snehal", 22, "Female", 30, "Mechanical Engineering");
    student2.printDetails(); 
} catch (error) {
    console.error("Error:", error.message); 
}