# Generated by Django 5.0.4 on 2024-04-30 14:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0016_register_address_register_bio_register_birth_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='register',
            name='photo',
            field=models.ImageField(blank=True, default='assets/images/foto_perfil/default.jpg', upload_to='photos_profile'),
        ),
    ]
