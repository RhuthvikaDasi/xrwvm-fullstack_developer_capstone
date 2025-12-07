from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views
from django.views.generic import TemplateView
from .views import registration


app_name = 'djangoapp'

urlpatterns = [
    # React frontend route for register page
    path('register/', TemplateView.as_view(template_name="index.html")),

    # API endpoint for register POST
    path('api/register/', registration),

    # login/logout routes
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout'),
    
    # other routes (dealer reviews, add review)...
    path('get_cars/', views.get_cars, name='getcars'),

    

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


