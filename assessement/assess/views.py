from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import AuthenticationForm
from .forms import SignUpForm, ResponseForm
from .models import Question, Response

# signup view
def signup_view(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        form = SignUpForm()
    return render(request, 'signup.html', {'form': form})

# login view
from django.contrib.auth import views as auth_views
def login_view(request):
    return auth_views.LoginView.as_view(template_name='login.html')(request)

# for displaying questions and handling answers
from django.contrib.auth.decorators import login_required

@login_required
def take_assessment(request):
    questions = Question.objects.all()
    if request.method == 'POST':
        for question in questions:
            response_text = request.POST.get(str(question.id), '')
            if response_text:
                response, created = Response.objects.get_or_create(
                    user=request.user,
                    question=question
                )
                response.response = response_text
                response.save()
        return redirect('results')
    return render(request, 'assessment.html', {'questions': questions})

# to display results or scores (optional) try to view this 
@login_required
def results_view(request):
    responses = Response.objects.filter(user=request.user)
    return render(request, 'results.html', {'responses': responses})
