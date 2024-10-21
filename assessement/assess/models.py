from django.db import models
from django.contrib.auth.models import User

# Question Categories
class QuestionCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# Interview Questions
class Question(models.Model):
    category = models.ForeignKey(QuestionCategory, on_delete=models.CASCADE)
    text = models.TextField()

    def __str__(self):
        return f"{self.category.name}: {self.text}"

# Assessment Model to track individual assessment attempts
class Assessment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    started_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(null=True, blank=True)
    total_score = models.IntegerField(default=0)

    def __str__(self):
        return f"Assessment {self.id} by {self.user.username}"

    def calculate_total_score(self):
        # This method calculates the total score from all responses in this assessment
        return sum(response.score for response in self.responses.all())

# User Responses

class Response(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    assessment = models.ForeignKey(Assessment, on_delete=models.CASCADE, related_name='responses')  # Link to the assessment
    response = models.TextField()
    score = models.IntegerField(default=0)  # Add scoring logic

    def __str__(self):
        return f"{self.user.username} - {self.question.text[:30]}..."

# User Profile for additional details
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True, null=True)
    # Add other fields as necessary

    def __str__(self):
        return self.user.username
