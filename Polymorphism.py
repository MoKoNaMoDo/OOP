# Polymorphism (พหุสัณฐาน): ความสามารถของวัตถุที่มีรูปแบบหรือการทำงานเหมือนกัน แต่สามารถแสดงพฤติกรรมที่ต่างกันออกไปได้

class Animal:

    def __init__(self, name, species, age):
        self.name = name
        self.species = species
        self.age = age

    def display_info(self):
        return f"{self.name} is a {self.age}-year-old {self.species}"
    
class Dog(Animal):

    def __init__(self, name, species, age, breed):
        super().__init__(name, species, age)
        self.breed = breed

    def display_info(self):
        return f"{self.name} is a {self.age}-year-old {self.breed} dog"

cat = Animal("Whiskers", "Cat", 3)
dog = Dog("Buddy", "Dog", 5, "Golden Retriever")

print(cat.display_info())
print(dog.display_info())