//TODO - Create Employee Module here and export to use in index.js

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

exports.getWelcomeMessage = () => {
    return "<h1>Welcome to Lab Exercise 03</h1>";
};
exports.getAllEmployees = () => {
    return employees;
};
exports.getEmployeeNames = () => {
    const names = employees.map(emp => `${emp.firstName} ${emp.lastName}`);
    return names.sort();
};
exports.getTotalSalary = () => {
    const totalSalary = employees.reduce((sum, emp) => sum + emp.Salary, 0);
    return { total_salary: totalSalary };
};