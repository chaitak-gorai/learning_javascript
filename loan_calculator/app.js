document.getElementById('loan-form').addEventListener('submit',function(e){
    document.getElementById('results').style.display='none';
    document.getElementById('loading').style.display='block';

    setTimeout(calculateresults,2000);



    e.preventDefault();
});

function calculateresults(){
    console.log('claculating..');
const amount=document.getElementById('amount');
const interest=document.getElementById('interest');
const years=document.getElementById('years');
const monthly=document.getElementById('monthly-payment');
const total=document.getElementById('total-payment');
const totalinterest=document.getElementById('total-interest');

const principal=parseFloat(amount.value);
const interestval=parseFloat(interest.value)/100/12;
 const payment=parseFloat(years.value)*12;


 const x=Math.pow(1+interestval,payment);
const monthlypay=(principal*x*interestval)/(x-1);

if(isFinite(monthlypay)){
    monthly.value=monthlypay.toFixed(2);
    total.value=(monthlypay*payment).toFixed(2);
    totalinterest.value=((monthlypay*payment)-principal).toFixed(2);
    document.getElementById('results').style.display='block';
    document.getElementById('loading').style.display='none';


}else{
    showError('Please Check Your Fields');

}


    
}

function showError(error){
    document.getElementById('results').style.display='none';
    document.getElementById('loading').style.display='none';
    const card=document.querySelector('.card');
    const head=document.querySelector('.heading');


    const errordiv=document.createElement('div');

    errordiv.className='alert alert-danger';
    errordiv.appendChild(document.createTextNode(error));
    card.insertBefore(errordiv,head);

    setTimeout(clearError,3000);

}

function clearError(){
    document.querySelector('.alert').remove();
}