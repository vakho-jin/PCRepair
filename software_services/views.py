from rest_framework import viewsets
from .models import SoftwareService
from .serializers import SoftwareServiceSerializer

class SoftwareServiceViewSet(viewsets.ModelViewSet):
    queryset = SoftwareService.objects.all()
    serializer_class = SoftwareServiceSerializer