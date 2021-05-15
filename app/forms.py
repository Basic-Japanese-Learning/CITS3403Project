from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, RadioField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError, EqualTo
from app.models import User



class LoginForm(FlaskForm):
    email = StringField('*E-mail:', validators=[DataRequired(message='Please enter your email address'), Email(message='Please enter valid email address')])
    password = PasswordField('*Password:', validators=[DataRequired(message='Please enter your password')])
    remember_me = BooleanField('Remember Me')
    submit = SubmitField()

class RegistrationForm(FlaskForm):
    username = StringField('*Username:', validators=[DataRequired()])
    email = StringField('*Email:', validators=[DataRequired(), Email()])
    password = PasswordField('*Password:', validators=[DataRequired()])
    password2 = PasswordField(
        '*Repeat Password:', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Register')

    def validate_username(self, username):
        user = User.query.filter_by(username=username.data).first()
        if user is not None:
            raise ValidationError('Please use a different username.')

    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user is not None:
            raise ValidationError('Please use a different email address.')

class AnswerForm(FlaskForm):
    q1 = RadioField('1. What is the romaji of "ヌ" (such as "ga" is the romaji of "が")', choices=['no', 'nu', 'ne','mo'])
    q2 = RadioField('2. What are the romaji of "ぬ" and "め" in sequence', choices=['numu', 'munu', 'nume','menu'])
    q3 = RadioField('3. Which one is the katakana of “ne"', choices=['ネ', 'ね', 'レ','れ'])
    q4 = RadioField('4. Which one is the hiragana of “ヲ"', choices=['を', 'フ', 'ふ','れ'])
    q5 = RadioField('5. Which choices is the romaji of "が" and "カ"', choices=['ga ka', 'ga ga', 'ka ka','ka ga'])
    q6 = StringField('6. Please input katakana of ”の"')
    q7 = StringField('7. Please input katakana of ”へ"')
    q8 = StringField('8. Please input hiragana of ”タ"')
    q9 = StringField('9. Please input katakana of ”ポ"')
    q10 = StringField('10. Please input hiragana of ”ン"')
    submit = SubmitField('Submit')






    