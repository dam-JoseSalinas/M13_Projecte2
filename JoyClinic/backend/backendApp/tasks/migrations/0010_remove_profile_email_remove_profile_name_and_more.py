# Generated by Django 5.0.3 on 2024-04-29 09:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0009_profile_email_profile_name_profile_photo_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='email',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='name',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='phone_number',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='surname',
        ),
    ]
