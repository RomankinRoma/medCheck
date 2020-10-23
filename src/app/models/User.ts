export class User{
  name: string;
  age: number;
  city: string;
  street: string;
  gender: string;
  medCard: File;

  constructor(name: string, age: number, city: string, street: string, gender: string, medCard: File) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.street = street;
    this.gender = gender;
    this.medCard = medCard;
  }
}
