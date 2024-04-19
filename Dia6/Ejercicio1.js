// Definir la clase persona
class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    // Detalles de la persona
    displayDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`); 
    }
  }
  
  // Instancias
  const person1 = new Person("Juan", 30, "USA");
  const person2 = new Person("Sofia", 25, "Canada");
  
  // Detalles
  person1.displayDetails();
  person2.displayDetails();
  