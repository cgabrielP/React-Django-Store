from rest_framework import serializers
from .models import Order, OrderDetail

class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderDetail
        fields = ['product', 'quantity', 'price']

class OrderSerializer(serializers.ModelSerializer):
    order_details = OrderDetailSerializer(many=True)

    class Meta:
        model = Order
        fields = ['user', 'total_price', 'order_details']
    
    def create(self, validated_data):
        order_details_data = validated_data.pop('order_details')
        order = Order.objects.create(**validated_data)
        total_price = 0
        for detail_data in order_details_data:
            order_detail = OrderDetail.objects.create(order=order, **detail_data)
            total_price += order_detail.price * order_detail.quantity
        order.total_price = total_price
        order.save()
        return order
