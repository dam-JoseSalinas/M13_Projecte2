from rest_framework import serializers
from .models import Register, Event, Message

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register
        fields = ['id', 'name', 'surname', 'number', 'email', 'psw', 'bio', 'birth_date', 'address', 'city', 'country', 'postal_code', 'photo']

    def create(self, validated_data):
        # Realiza cualquier acción de creación necesaria
        return Register.objects.create(**validated_data)

class EventSerializer(serializers.ModelSerializer):
    owner_email = serializers.EmailField(source='owner.email', read_only=True)

    class Meta:
        model = Event
        fields = ['id', 'name', 'start', 'end', 'owner_email']

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'sender', 'recipient', 'content', 'timestamp']
