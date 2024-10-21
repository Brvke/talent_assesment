from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Response
from django.contrib.auth.forms import AuthenticationForm

# Signup Form
class SignUpForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

# Form for answering questions
class ResponseForm(forms.ModelForm):
    class Meta:
        model = Response
        fields = ['response']  # The user will answer the question



