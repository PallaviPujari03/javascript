



SBIbank = {
    bankName: "SBI",
    location: "Vijaypur",
    accountNo: "0665477838927924",
    ifscCode: "SBI000018",
    interestRate: "5 %",
    showDetails: function () {
      console.log(
        ` Bank Name => ${this.bankName}  Location => ${this.location} Account No. ${this.accountNo} IFSC Code => ${this.ifscCode} Interest Rate => ${this.interestRate}`
      );
    },
  };
  SBIbank.showDetails();
  
  Axisbank = {
    bankName: "Axis",
    location: "Sangli",
    accountNo: "054478689494332",
    ifscCode: "AXIS00214",
    interestRate: "4.20 %",
    showDetails: function () {
      console.log(
        ` Bank Name => ${this.bankName}  Location => ${this.location} Account No. ${this.accountNo} IFSC Code => ${this.ifscCode} Interest Rate => ${this.interestRate}`
      );
    },
  };
  Axisbank.showDetails();
  
  HDFCbank = {
    bankName: "HDFC",
    location: "Solapur",
    accountNo: "098958687363789",
    ifscCode: "HDFC00892",
    interestRate: "5.50 %",
    showDetails: function () {
      console.log(
        ` Bank Name => ${this.bankName}  Location => ${this.location} Account No. ${this.accountNo} IFSC Code => ${this.ifscCode} Interest Rate => ${this.interestRate}`
      );
    },
  };
  HDFCbank.showDetails();
  
  YesBank = {
    bankName: "Yes Bank",
    location: "Pune",
    accountNo: "025452100052455",
    ifscCode: "YES000521",
    interestRate: "9.60%",
    showDetails: function () {
      console.table(
        ` Bank Name => ${this.bankName}  Location => ${this.location} Account No. ${this.accountNo} IFSC Code => ${this.ifscCode} Interest Rate => ${this.interestRate}`
      );
    },
  };
  YesBank.showDetails();
  console.table([SBIbank, Axisbank, HDFCbank, YesBank]);