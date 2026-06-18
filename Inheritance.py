# Inheritance (การสืบทอด): การสร้างคลาสใหม่โดยดึงคุณสมบัติมาจากคลาสหลักที่มีอยู่แล้ว ช่วยลดความซ้ำซ้อนของโค้ด

class Animal:

    def __init__(self, name, species, age):
        self.name = name
        self.species = species
        self.age = age

    def display_info(self):
        return f"{self.name} is a {self.age}-year-old {self.species}"
    
    def drive(self):
        return "Animal"

class Dog(Animal):

    def __init__(self, name, species, age, breed):
        super().__init__(name, species, age)
        self.breed = breed

    def display_info(self):
        return f"{super().display_info()} and is a {self.breed} breed"
    
cat = Animal("Whiskers", "Cat", 3)
dog = Dog("Buddy", "Dog", 5, "Golden Retriever")

print(cat.display_info())
print(dog.display_info())