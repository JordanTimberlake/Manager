# Generated by Django 5.0.6 on 2024-08-01 14:49

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_alter_employees_birth_date_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='manager',
            name='e_id',
        ),
        migrations.AddField(
            model_name='manager',
            name='e_identifier',
            field=models.UUIDField(default=uuid.uuid4),
        ),
    ]
