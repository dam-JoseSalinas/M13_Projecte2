# Generated by Django 3.2 on 2024-06-08 13:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0003_auto_20240608_1525'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='doctor',
            name='register_ptr',
        ),
        migrations.RemoveField(
            model_name='messages',
            name='userEmisor',
        ),
        migrations.RemoveField(
            model_name='messages',
            name='userReceptor',
        ),
        migrations.DeleteModel(
            name='Appointments',
        ),
        migrations.DeleteModel(
            name='Doctor',
        ),
        migrations.DeleteModel(
            name='Messages',
        ),
    ]
