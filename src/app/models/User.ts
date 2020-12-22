export class User {
  id: number;
  name: string;
  age: number;
  city: string;
  street: string;
  gender: string;
  medCard: File;
  password: string;


  constructor(id: number, name: string, age: number, city: string, street: string, gender: string, medCard: File, password: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.city = city;
    this.street = street;
    this.gender = gender;
    this.medCard = medCard;
    this.password = password;
  }
}
