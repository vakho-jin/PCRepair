from rest_framework import serializers
from .models import SoftwareService

class SoftwareServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = SoftwareService
        fields = '__all__'