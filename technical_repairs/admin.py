from django.contrib import admin
from .models import TechnicalRepairService

@admin.register(TechnicalRepairService)
class TechnicalRepairServiceAdmin(admin.ModelAdmin):
    list_display = ('service_type', 'description', 'price')
    search_fields = ('service_type', 'description')