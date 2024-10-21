from django.urls import path
from .views import signup_view, login_view, take_assessment, results_view

urlpatterns = [
    path('signup/', signup_view, name='signup'),
    path('login/', login_view, name='login'),
    path('assess/', take_assessment, name='assessment'),
    #path('results/', results_view, name='results'),
]
