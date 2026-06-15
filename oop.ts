// ตัวอย่าง OOP พื้นฐานใน TypeScript ครบ 4 หลัก
// 1. Encapsulation
// 2. Inheritance
// 3. Polymorphism
// 4. Abstraction

// 1. Abstraction: สร้างคลาสแม่แบบ abstract เพื่อบังคับให้คลาสลูกมี method speak()
abstract class Animal {
    constructor(protected name: string) {}

    abstract speak(): string;

    getName(): string {
        return this.name;
    }
}

// 2. Inheritance: Dog สืบทอดคุณสมบัติจาก Animal
class Dog extends Animal {
    // 3. Encapsulation: ซ่อนข้อมูล age ด้วย private
    private age: number;

    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }

    speak(): string {
        return "โฮ่ง ๆ";
    }

    getAge(): number {
        return this.age;
    }

    setAge(age: number): void {
        if (age > 0) {
            this.age = age;
        }
    }
}

// 2. Inheritance: Cat ก็สืบทอดจาก Animal เหมือนกัน
class Cat extends Animal {
    speak(): string {
        return "เหมียว ๆ";
    }
}

// สร้าง object จาก class
const dog = new Dog("ดำดื้อ", 3);
const cat = new Cat("ส้มจี๊ด");

// 4. Polymorphism: ใช้ชนิด Animal เหมือนกัน แต่ speak() ทำงานต่างกันตาม object จริง
const animals: Animal[] = [dog, cat];

animals.forEach((animal) => {
    console.log(`${animal.getName()} พูดว่า ${animal.speak()}`);
});

console.log(`${dog.getName()} อายุ ${dog.getAge()} ปี`);
dog.setAge(4);
console.log(`${dog.getName()} อายุใหม่ ${dog.getAge()} ปี`);
