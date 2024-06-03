from django.db import models

class Product(models.Model):
    description = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    image = models.URLField(max_length=200, blank=True, null=True)
    brand = models.CharField(max_length=50)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    stock = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.description
