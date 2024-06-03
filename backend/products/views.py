import json
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Product

@csrf_exempt
def product_list(request):
    if request.method == 'GET':
        products = list(Product.objects.values())
        return JsonResponse(products, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        product = Product.objects.create(
            description=data['description'],
            price=data['price'],
            image=data.get('image', ''),
            brand=data['brand'],
            rating=data.get('rating', 0),
            stock=data.get('stock', 0)
        )
        return JsonResponse({'id': product.id})

@csrf_exempt
def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        return JsonResponse({
            'id': product.id,
            'description': product.description,
            'price': product.price,
            'image': product.image,
            'brand': product.brand,
            'rating': product.rating,
            'stock': product.stock,
            'created_at': product.created_at,
            'updated_at': product.updated_at
        })
    elif request.method == 'PUT':
        data = json.loads(request.body)
        product.description = data['description']
        product.price = data['price']
        product.image = data.get('image', product.image)
        product.brand = data['brand']
        product.rating = data.get('rating', product.rating)
        product.stock = data.get('stock', product.stock)
        product.save()
        return JsonResponse({'id': product.id})
    elif request.method == 'DELETE':
        product.delete()
        return HttpResponse(status=204)
