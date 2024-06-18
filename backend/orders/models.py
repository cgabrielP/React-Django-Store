from django.db import models
from products.models import Product
from users.models import UserProfile

class Order(models.Model):
    user=models.ForeignKey(UserProfile,on_delete=models.CASCADE)
    date=models.DateField(auto_now_add=True)
    total_price = models.IntegerField(default=0)
    
    def __str__(self):
        return f"Order {self.id} by {self.user}"

class OrderDetail(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_details')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.quantity} x {self.product.name}"