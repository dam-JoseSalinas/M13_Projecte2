# Generated by Django 5.0.6 on 2024-06-12 21:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        ('tasks', '0009_alter_appointments_forwhom'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('emisor_id', models.PositiveIntegerField()),
                ('receptor_id', models.PositiveIntegerField()),
                ('content', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('emisor_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='emisor_messages', to='contenttypes.contenttype')),
                ('receptor_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='receptor_messages', to='contenttypes.contenttype')),
            ],
        ),
        migrations.DeleteModel(
            name='Messages',
        ),
    ]
