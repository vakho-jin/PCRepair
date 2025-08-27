from django.contrib import admin
from .models import SoftwareService

@admin.register(SoftwareService)
class SoftwareServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'price', 'created_at', 'updated_at')
    search_fields = ('name', 'description')
    list_filter = ('created_at', 'updated_at')