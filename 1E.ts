// 1. Abstraction: สร้างโครงสร้างบังคับ (Blueprint) ที่คลาสลูกต้องนำไปใช้
abstract class Employee {
    constructor(public name: string, protected id: string) {}

    // Abstract method: คลาสลูกต้องนำไปเขียนคำสั่งการทำงานเอง
    abstract calculateSalary(): number;

    // Method ทั่วไปที่คลาสลูกใช้ร่วมกันได้
    getEmployeeInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

// 2. Encapsulation: การห่อหุ้มข้อมูล ซ่อนข้อมูลไว้ไม่ให้แก้ไขได้โดยตรง (ใช้ private)
class FullTimeEmployee extends Employee {
    private baseSalary: number; // ข้อมูลที่ถูกซ่อนไว้
    private bonus: number;

    constructor(name: string, id: string, baseSalary: number, bonus: number) {
        super(name, id); // เรียกใช้งาน constructor ของคลาสแม่
        this.baseSalary = baseSalary;
        this.bonus = bonus;
    }

    // Override method: ปรับเปลี่ยนการคำนวณเงินเดือนให้ตรงกับประเภทพนักงาน
    calculateSalary(): number {
        return this.baseSalary + this.bonus;
    }

    // Getter: ดึงข้อมูลเงินเดือน (เพราะ baseSalary เป็น private)
    getBaseSalary(): number {
        return this.baseSalary;
    }
}

// 3. Inheritance: การสืบทอดคุณสมบัติจากคลาสแม่ (Employee)
class PartTimeEmployee extends Employee {
    private hourlyRate: number;
    private hoursWorked: number;

    constructor(name: string, id: string, hourlyRate: number, hoursWorked: number) {
        super(name, id);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

// ==========================================
// การนำไปใช้งาน (Object Creation)
// ==========================================

// สร้าง Object จาก Class (Instantiation)
const emp1 = new FullTimeEmployee("สมชาย ใจดี", "FT001", 30000, 5000);
const emp2 = new PartTimeEmployee("สมหญิง สวยเสมอ", "PT001", 200, 80);

// 4. Polymorphism: รูปแบบการทำงานที่หลากหลาย (เมธอดเดียวกัน แต่ทำงานต่างกัน)
const employees: Employee[] = [emp1, emp2];

employees.forEach(emp => {
    console.log(emp.getEmployeeInfo());
    console.log(`Salary: ${emp.calculateSalary()} บาท`);
    console.log("--------------------");
});
