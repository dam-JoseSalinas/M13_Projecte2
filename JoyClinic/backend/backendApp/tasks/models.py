from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import EmailValidator
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

def validate_password(value):
    if len(str(value)) < 8:
        raise ValidationError('La password debe tener mas de 8 caracteres')
    
def validate_number(value):
    try:
        number = int(value)
    except ValueError:
        raise ValidationError('El número debe contener solo dígitos.')

    if len(str(number)) != 9:
        raise ValidationError('El número debe tener exactamente 9 dígitos.')


class Register(models.Model):
    name = models.CharField(max_length=200)
    surname = models.CharField(max_length=200)
    number = models.CharField(max_length=200, unique=True, validators=[validate_number]) 
    email = models.EmailField(max_length=200, unique=True, validators=[EmailValidator(message='Ingrese un correo válido.')])
    psw = models.CharField(max_length=200, validators=[validate_password])

    bio = models.TextField(blank=True)
    birth_date = models.DateField(null=True, blank=True, default=None)
    address = models.CharField(max_length=100, blank=True, default=None, null=True)
    city = models.CharField(max_length=100, blank=True, default=None, null=True)
    country = models.CharField(max_length=100, blank=True, default=None, null=True)
    postal_code = models.CharField(max_length=20, blank=True, default=None, null=True)
    photo = models.ImageField(blank=True, upload_to='', default='default.jpg')

    def set_password(self, raw_password):
        self.psw = make_password(raw_password)
    
    def check_password(self, raw_password):
        return check_password(raw_password, self.psw)
    
    def is_authenticated(self):
        return True
    
    def __str__(self) -> str:
        return self.name

class Event(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    start = models.DateTimeField(null=True, blank=True)
    end = models.DateTimeField(null=True, blank=True)
    owner = models.ForeignKey(Register, on_delete=models.CASCADE, related_name='events')

    def __str__(self):
        return f"{self.name} (Correo electrónico del propietario: {self.owner.email})"
        
class Message(models.Model):
    sender = models.ForeignKey('Register', related_name='sent_messages', on_delete=models.CASCADE)
    recipient = models.ForeignKey('Register', related_name='received_messages', on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"From {self.sender} to {self.recipient}: {self.content}"
