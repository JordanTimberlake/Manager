# Generated by Django 5.0.6 on 2024-08-01 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_rename_is_manager_employees_is_manager_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employees',
            name='birth_date',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='employees',
            name='hired_date',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='employees',
            name='is_Manager',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='employees',
            name='position',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='employees',
            name='salary',
            field=models.DecimalField(decimal_places=2, max_digits=10, null=True),
        ),
    ]
