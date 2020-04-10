const salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
  };
  
const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 
    ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 
    ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 
    ]
  }
];
let workingObj = {};
let result = {};
let taxes = {};
const calculateSalesTax = (salesData, taxRates) => {
  salesData.forEach((element) => {
    if (workingObj[element.name]) {
      workingObj[element.name].taxes.push(element.sales.reduce((a, b) => a + b, 0) * taxRates[element.province])
      workingObj[element.name].preSales.push(
        element.sales.reduce((a, b) => a + b, 0)
      );
    } else {
      workingObj[element.name] = {
        preSales: [element.sales.reduce((a, b) => a + b, 0)],
        taxes:  [element.sales.reduce((a, b) => a + b, 0) * taxRates[element.province]]
      };
    }
    });
  for (const [key, value] of Object.entries(workingObj)) {
    result[key] = {totalSales: value.preSales.reduce((a, b) => a + b, 0),
    totalTaxes: value.taxes.reduce((a, b) => a + b, 0)}
   }

   
   return result
};

console.log(calculateSalesTax(companySalesData, salesTaxRates));
