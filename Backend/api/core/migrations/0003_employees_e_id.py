# Generated by Django 5.0.6 on 2024-07-30 13:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_remove_manager_employee_manager_e_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='employees',
            name='e_id',
            field=models.BigIntegerField(auto_created=True, default=0, unique=True, verbose_name='ID'),
        ),
    ]
