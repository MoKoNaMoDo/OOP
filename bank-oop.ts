// ตัวอย่าง OOP พื้นฐานใน TypeScript: ระบบธนาคาร
// ครบ 4 หลัก: Encapsulation, Inheritance, Polymorphism, Abstraction

// 1. Abstraction: บัญชีธนาคารทุกประเภทต้องมี method withdraw()
abstract class BankAccount {
    constructor(
        protected accountNumber: string,
        protected ownerName: string,
        private password: string,
        protected balance: number
    ) {}

    abstract withdraw(amount: number): void;

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${this.ownerName} ฝากเงิน ${amount} บาท`);
        }
    }

    getBalance(): number {
        return this.balance;
    }

    getInfo(): string {
        return `เลขบัญชี ${this.accountNumber} เจ้าของบัญชี ${this.ownerName}`;
    }

    checkPassword(password: string): boolean {
        return this.password === password;
    }
}

// 2. Inheritance: SavingsAccount สืบทอดจาก BankAccount
class SavingsAccount extends BankAccount {
    // 3. Encapsulation: ซ่อน interestRate ด้วย private
    private interestRate: number;

    constructor(
        accountNumber: string,
        ownerName: string,
        password: string,
        balance: number,
        interestRate: number
    ) {
        super(accountNumber, ownerName, password, balance);
        this.interestRate = interestRate;
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${this.ownerName} ถอนเงินจากบัญชีออมทรัพย์ ${amount} บาท`);
        } else {
            console.log(`${this.ownerName} ถอนเงินไม่สำเร็จ`);
        }
    }

    addInterest(): void {
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log(`${this.ownerName} ได้ดอกเบี้ย ${interest} บาท`);
    }
}

// 2. Inheritance: CurrentAccount สืบทอดจาก BankAccount
class CurrentAccount extends BankAccount {
    // 3. Encapsulation: ซ่อน overdraftLimit ด้วย private
    private overdraftLimit: number;

    constructor(
        accountNumber: string,
        ownerName: string,
        password: string,
        balance: number,
        overdraftLimit: number
    ) {
        super(accountNumber, ownerName, password, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        const maxWithdraw = this.balance + this.overdraftLimit;

        if (amount > 0 && amount <= maxWithdraw) {
            this.balance -= amount;
            console.log(`${this.ownerName} ถอนเงินจากบัญชีกระแสรายวัน ${amount} บาท`);
        } else {
            console.log(`${this.ownerName} ถอนเงินเกินวงเงิน`);
        }
    }
}

const saving = new SavingsAccount("SA001", "สมชาย", "pass1234", 10000, 0.03);
const current = new CurrentAccount("CA001", "สมหญิง", "secret999", 5000, 2000);

saving.deposit(2000);
saving.withdraw(3000);
saving.addInterest();

current.deposit(1000);
current.withdraw(7500);

console.log(saving.getInfo());
console.log(`รหัสผ่านถูกต้องไหม: ${saving.checkPassword("pass1234")}`);
console.log("รหัสผ่านบัญชีถูกซ่อนไว้ และจะไม่ถูกแสดงออกมา");
console.log("--------------------");

// 4. Polymorphism: ใช้ชนิด BankAccount เหมือนกัน แต่ withdraw() ทำงานต่างกัน
const accounts: BankAccount[] = [saving, current];

accounts.forEach((account) => {
    console.log(account.getInfo());
    console.log(`ยอดเงินคงเหลือ ${account.getBalance()} บาท`);
    console.log("--------------------");
});
