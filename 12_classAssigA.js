



class Vehicle {
    constructor(company, color, prize, fuelType, model) {
        this.company = company;
        this.color = color;
        this.prize = prize;
        this.fuelType = fuelType;
        this.model = model;
    }

    showDetails() {
        console.log(`Details: ${this.company}, ${this.color}, ${this.prize}, ${this.fuelType}, ${this.model}`);
    }
}

const Harrier = new Vehicle("Harrier", "Black", "20 Lack", "Diesel", "HarrierXE");
const Safari = new Vehicle("Safari", "Black", "9.50 Lack", "Diesel", "SafariXE");
const Thar = new Vehicle("Thar", "Black", "15 Lack", "CNG", "Thar AX");
const Mahindra = new Vehicle("Mahindra", "White", "14.2 Lack", "Diesel", "Mahendra-213");
const Tata = new Vehicle("Tata", "White", "12.2 Lack", "Petrol", "Tata Xeo");

Harrier.showDetails();
Safari.showDetails();
Thar.showDetails();
Mahindra.showDetails();
Tata.showDetails();

console.log("***************");

class College {
    constructor(name, department, city, pincode) {
        this.name = name;
        this.department = department;
        this.city = city;
        this.pincode = pincode;
    }

    traverse() {
        console.log(`Details: ${this.name}, ${this.department}, ${this.city}, ${this.pincode}`);
    }
}

const sankh = new College("Shri Guru Basava Vidya Mandir", "Bcs", "Sankh", 416412);
const solapur = new College("Sangmeshwar College", "Bcs computer science", "Saat Rasta", 512615);
const vijaypur = new College("Rupaa Devi College", " Mecanical Engineering", "", 87645);
const Morden = new College("Morden College", "Civil Engineering", "Pune", 765354);

sankh.traverse();
console.log(`===============================================================================`);
solapur.traverse();
console.log(`================================================================================`);
vijaypur.traverse();
console.log(`===============================================================================`);
Morden.traverse();