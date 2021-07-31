class Employee {
  constructor(number, workHours, moneyPerHour) {
    this.number = number;
    this.workHours = workHours;
    this.moneyPerHour = moneyPerHour;
    this.salary = this.workHours * this.moneyPerHour;
  }

  getNumberAndSalary() {
    return (
      "NUMBER = " + this.number + "\n" + "SALARY = U$ " + this.salary.toFixed(2)
    );
  }
}

let employee = new Employee(
  parseInt(lines.shift()),
  parseInt(lines.shift()),
  parseFloat(lines.shift())
);

console.log(employee.getNumberAndSalary());
