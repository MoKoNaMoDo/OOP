# Abstraction (การซ่อนรายละเอียด): การดึงมาเฉพาะส่วนที่จำเป็นต้องใช้งานมาแสดง โดยซ่อนความซับซ้อนเบื้องหลังเอาไว้ ช่วยให้โค้ดง่ายต่อการเข้าใจและใช้งาน

from abc import ABC, abstractmethod

class Car(ABC):
    @abstractmethod
    def start_engine(self):
        pass

class Toyota(Car):
    def __init__(self, make, model, year):
        self.make = make  # Private
        self.model = model  # Public
        self.year = year    # Public

    def description(self):
        return f"{self.make} {self.model} {self.year}"

class Honda(Car):
    def __init__(self, make, model, year):
        self.make = make  # Private
        self.model = model  # Public
        self.year = year    # Public
        self.seating_capacity = seating_capacity  # Public

    def description(self):
        return f"{self.make} {self.model} {self.year} with seating capacity of {self.seating_capacity}"

car1 = Toyota("Toyota", "Corolla", 2020)
car2 = Honda("Honda", "Civic", 2021, 5)

print(car1.description())
print(car2.description())

