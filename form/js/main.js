// Sign IN logic
const FormSignIn = document.querySelector('.primari_form-signin');
const MovingRight = document.querySelector('.mv-right');

// Sign UP logic
const MovingLeft = document.querySelector('.mv-left');
const FormSignUp = document.querySelector('.survey-form-signup');
const SignUp = document.getElementById('btn-signup');
SignUp.innerHTML = 'Sign up';

// Butons Next and Back
const Next = document.querySelector('.next');
const Back = document.querySelector('.back');
const Grid = document.getElementById('survey-form');

SignUp.addEventListener('click' , () => {
    
    if(SignUp.innerHTML == 'Sign up'){
        FormSignIn.style.width = '0px';
        FormSignUp.style.width = '60vw';
        SignUp.innerHTML =  'Sign in';
        MovingRight.style.marginLeft = '800px';
        MovingLeft.style.marginLeft = '0px';
    } else {
        FormSignIn.style.width = '40vw';
        FormSignUp.style.width = '0px';
        SignUp.innerHTML =  'Sign up';
        MovingRight.style.marginLeft = '0px';
        MovingLeft.style.marginLeft = '-1600px';
    };
   
});

var ScrollCount = 0;
var Margin = 0;

Next.addEventListener('click' , () => {
   
    if(ScrollCount < 2){
        Margin -= 45
        Grid.style.marginTop = `${Margin}vh`;
        ScrollCount++;
    } if(ScrollCount == 2){
        Next.style.visibility = 'hidden';
    } if(ScrollCount > 0 ){
        Back.style.visibility = 'visible';
    } 
});
Back.addEventListener('click' , () => {
   
    if(!ScrollCount == 0 ){
        Margin += 45
        Grid.style.marginTop = `${Margin}vh`;
        ScrollCount--;
    }if(ScrollCount == 1){
        Next.style.visibility = 'visible';
    }else{
        Back.style.visibility = 'hidden';
    };
});

