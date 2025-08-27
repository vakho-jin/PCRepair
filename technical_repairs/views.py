from rest_framework import viewsets
from .models import TechnicalRepair
from .serializers import TechnicalRepairSerializer

class TechnicalRepairViewSet(viewsets.ModelViewSet):
    queryset = TechnicalRepair.objects.all()
    serializer_class = TechnicalRepairSerializer