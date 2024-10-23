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

"""
We’ll modify the take_assessment view to paginate the questions, displaying 10 questions per page
@login_required
def take_assessment(request):
    questions = Question.objects.all()
    paginator = Paginator(questions, 10)  # Show 10 questions per page
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    if request.method == 'POST':
        for question in page_obj:
            response_text = request.POST.get(str(question.id), '')
            if response_text:
                response, created = Response.objects.get_or_create(
                    user=request.user,
                    question=question,
                    assessment=Assessment.objects.get(user=request.user)  # Assumes one active assessment per user
                )
                response.response = response_text
                response.save()

        messages.success(request, 'Your answers have been saved!')
        if page_obj.has_next():
            return redirect(f'/assessment/?page={page_obj.next_page_number()}')
        else:
            return redirect('results')  # Redirect to results when the assessment is complete

    return render(request, 'assessment.html', {'page_obj': page_obj})

"""

# to display results or scores (optional) try to view this 
@login_required
def results_view(request):
    responses = Response.objects.filter(user=request.user)
    return render(request, 'results.html', {'responses': responses})
