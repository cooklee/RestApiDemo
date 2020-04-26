from django.db import models

# Create your models here.
class CarType(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Car(models.Model):
    name = models.CharField(max_length=100)
    car_type = models.ForeignKey(CarType, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} - type {self.car_type}"