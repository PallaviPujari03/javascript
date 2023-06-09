



bankSBI = {
    bankName: "SBI Bank",
  location: "Jath",
  accountNo: "025452100052455",
  ifscCode: "SBI000435",
  interestRate: "8.40% %",
}

bankLocation = {
    Street: "gandi nagar",
    City: "Jath",
    Pin: 411057,
}
console.log(` 1} Creating "bankSBI" object => `);
console.table(bankSBI);
console.log("------------------------------------------------------------");
console.log(` 2} Creating "bankLocation" object => `);
console.table(bankLocation);
console.log("------------------------------------------------------------");
console.log(` 3} Clonning "bankLocation" into "bankSBI" object => `);
let emptyObj = {

}
    emptyObj = Object.assign(bankSBI, bankLocation)
    console.table(emptyObj);
console.log("------------------------------------------------------------");
console.log(` 4} Creating "rateOfInterest" object with properties => `);
rateOfInterest = {
    homeLoanInterest: "9%",
    personalLoanInterest: "13%",
    dueInterest: "8.5%",
}
console.table(rateOfInterest);
console.log("------------------------------------------------------------");
console.log(` 5} Merging "bankSBI" , "bankLocation", "rateOfInterest"  as "sbiDetails" => `);
const sbiDetails = Object.assign({ },bankSBI,rateOfInterest);
console.table(sbiDetails);
console.log("------------------------------------------------------------");
console.log(` Traversing this Merged Object using "For-in" loop => `);
    

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.table(` ${key}, ${element}`);
        
    }
}