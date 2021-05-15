from app import app
from flask import render_template, flash, redirect, url_for
from app.forms import LoginForm
from flask_login import current_user, login_user, login_required
from app.models import User, Result
from flask_login import logout_user
from flask import request
from werkzeug.urls import url_parse

from app import db
from app.forms import RegistrationForm, AnswerForm



@app.route('/')
def welcome():
    return render_template("welcome.html")

@app.route('/home')
def home():
    return render_template("Home.html")

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password, please try again')
            return redirect(url_for('login'))
        login_user(user, remember=form.remember_me.data)
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '':
            next_page = url_for('home')
        return redirect(next_page)
    return render_template('login.html', title='Sign In', form=form)

@app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Congratulations, you are now a registered user!')
        return redirect(url_for('login'))
    return render_template('register.html', title='Register', form=form)

@app.route('/learn')
def learn():
    return render_template("learn.html")

@app.route('/assessment_home')
def assessment_home():
    return render_template("assessment_home.html")

@app.route('/assessment', methods=['GET', 'POST'])
def assessment():
    form = AnswerForm()
    if form.validate_on_submit():
        score,correct = getmark(form)
        result = Result(user_id=current_user.get_id(),mark=score)
        db.session.add(result)
        db.session.commit()
        return redirect(url_for('feedback', score = score, correct = correct))
    return render_template("assessment.html", form=form)


@app.route('/table')
@login_required
def table():
    results = Result.query.filter_by(user_id=current_user.get_id()).all()
    return render_template("table.html", results=results)

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('home'))

@app.route('/feedback?<int:score><string:correct>')
def feedback(score,correct):
    return render_template("feedback.html", score = score, correct = correct)


def getmark(form):
    score = 0
    correct = ''
    if form.q1.data == 'nu':
        score += 10
        correct += ' 1'
    if form.q2.data == 'nume':
        score += 10
        correct += ' 2'
    if form.q3.data == 'ネ':
        score += 10
        correct += ' 3'
    if form.q4.data == 'を':
        score += 10
        correct += ' 4'
    if form.q5.data == 'ga ka':
        score += 10
        correct += ' 5'
    if form.q6.data == 'ノ':
        score += 10
        correct += ' 6'
    if form.q7.data == 'へ':
        score += 10
        correct += ' 7'
    if form.q8.data == 'た':
        score += 10
        correct += ' 8'
    if form.q9.data == 'ぽ':
        score += 10
        correct += ' 9'
    if form.q10.data == 'ん':
        score += 10
        correct += ' 10'
    return score, correct