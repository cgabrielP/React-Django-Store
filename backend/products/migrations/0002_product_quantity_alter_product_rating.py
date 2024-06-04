# Generated by Django 5.0.6 on 2024-06-04 00:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='quantity',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='product',
            name='rating',
            field=models.DecimalField(decimal_places=1, default=0, max_digits=3),
        ),
    ]
