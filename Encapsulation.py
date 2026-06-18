# Encapsulation (การห่อหุ้ม): การจัดเก็บข้อมูล (Data) และพฤติกรรม (Method) ไว้รวมกันเป็นก้อนเดียวในคลาส (Class) เพื่อป้องกันการเข้าถึงข้อมูลจากภายนอกโดยไม่ได้รับอนุญาต
class Car:
    def init(self, make, model, year):
        self.__make = make  # Private
        self.model = model  # Public
        self.year = year    # Public

    def get_make(self):
        return self.__make

    def set_make(self, make):
        self.__make = make

car = Car("Toyota", "Corolla", 2020)
print(car.get_make())  # Output: Toyota
car.set_make("Honda")
print(car.get_make())  # Output: Honda
print(car.model)  # Output: Corolla
print(car.year)   # Output: 2020