//this js file is only for home html part

//jehutu amr 4 input er 4 ta niei kaj kora lage so age oder 
//access korte hobe//
const validPin = 1234;
//so add-amount and pin number er function similer so oi pura function 
//ai function er vitor rekhe just parameter hishebe id die dilei 
//hoe jabe 
//process: akhane korlam holo jehutu add number and pin number 
//same way te ber korci 
//ami just akta function e oi system ta likhe dici and oi 
//function er value ta jar jar addeventlistener er vitor call ba return kore 
//dici///
//jake pete chai just function call er moddhe id ta add kore dibo

//reuseable function to get input values
function getInputValueNumber(id) {
    const inputValuesNum = parseInt(document.getElementById(id).value);
    return inputValuesNum;
}
//ar akta function parseINT chara jara ace
function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
    //akhn ai function er nam ta oder variable e call kore daw..
    //ora value ta return kore dibe;
}

//function to get innerText
function getInnerText(id) {
    const getElement = parseInt(document.getElementById(id).innerText);
    return getElement;
}

//function to set innerText
function setInnerText(value) {
    const setAvailableBalanceElement = document.getElementById('available-balance');
    setAvailableBalanceElement.innerText = value;
}

//function for toggle
function handleToggle(id){
    const forms = document.getElementsByClassName('form');
        for (form of forms) {
            console.log(form);
            form.style.display = 'none';
        }
        document.getElementById(id).style.display = 'block';
}

//function for toggle button's bg and border handle
function handleBg(id){
    const formBtns = document.getElementsByClassName('form-btn');
        
        for (const btn of formBtns){
            btn.classList.remove("bg-[#F3F8FE]", "border-[#2174F2]");
            btn.classList.add("border-gray-300");
        }

        document.getElementById(id).classList.remove("border-gray-300");
        document.getElementById(id).classList.add("bg-[#F3F8FE]", "border-[#2174F2]");
}



//adding money::
document.getElementById('add-money-btn').addEventListener('click',
    function (e) {
        e.preventDefault();
        //parseINT chara duita:
        const bank = getInputValue('bank');
        const accountNumber = getInputValue('account-number');

        //parseINT wala duita:
        const amount = getInputValueNumber('add-amount');//aikhnae just oi function ta call kore dibo
        //return kora value ta akhane add hoe gelo
        //mane ai pin = 1000//jodi 1000 add kori
        const pin = getInputValueNumber('pin-number');

        //accha shobinput ke access peye geci akhn 
        //kaj holo add amount er taka ta available balance er shathe 
        //jog kore oi jayga tei rakhte hobe//
        //akhn available balance ke access kroi cholo

        //ai available balance er jonno alada reuseable function nici
        const availableBalance = getInnerText('available-balance');

        //kicu jinish cheak kora add howar age 
        if (accountNumber.length < 11) {
            alert('Please Provide a Valid Bank Account Number!');
            return; //return dici karon jodi aita true hoy taile 
            //er pore =r line er code e jabei na money o add hobe na ar...
        }
        else if (pin !== validPin) {
            alert('Please Provide a Valid Pin Number!');
            return;
        }

        //amr kaj akhn jog kora
        const totalAvailableBalance = availableBalance + amount;

        //jog kora amount ta kintu oi same jayga tei boshate hobe
        //atar jonno alada function newa hoice name setInnertext:
        setInnerText(totalAvailableBalance);
    }
)


//amr kaj akhn cashout function add kora 
//age shob input gula access kori cholo
//cash-out:

document.getElementById('withdraw-money-button').addEventListener('click',
    function (e) {
        e.preventDefault();

        const agentNumber = getInputValue('agent-number');

        //same reuseable function use korlam 
        //purseInT wala gula 
        const withdrawAmount = getInputValueNumber('withdraw-amount');
        const pinNumber = getInputValueNumber('cash-pin-number');

        //available balance ke access kore minus kora withdraw amount er shathe 
        const availAbleBalance = getInnerText('available-balance');

        if (agentNumber.length !== 11) {//length jokhon ber korbo take string ba array tei 
            //rakha lagbe number e nile kaj hobe na//
            alert('Please Provide a Valid Agent Number');
            return;
        }
        else if (pinNumber !== validPin) {
            alert('Please Provide a Valid Pin Number');
            return;
        }
        const cashOut = availAbleBalance - withdrawAmount;

        if(cashOut < 0){
            alert('Balance is 0');
            return;
        }
        //minus kora amount ta same jaygay rakhbo abr 
        setInnerText(cashOut);
    }
)

//transfer form:
document.getElementById('transfer-money-button').addEventListener('click',
    function (e) {
        e.preventDefault();
        //transfer money mane taka onno account e jay nijer theke minus hoy??
        const transferAccountNumber = getInputValue('transfer-account-number');
        const transferAmount = getInputValueNumber('transfer-amount');
        const transferPin = getInputValueNumber('transfer-pin-number');


        
        
        if(transferAccountNumber.length !== 11){
            alert('Invalid Account Number!');
            return;
        }
        else if(transferPin !== validPin){
            alert('Invalid Pin Number');
            return;
        }
        const preUpdateBalance = getInnerText('available-balance');
        const postUpdatedBalance = preUpdateBalance - transferAmount;

        if(postUpdatedBalance < 0){
            alert('Balance is 0');
            return;
        }
        setInnerText(postUpdatedBalance);
    }
)

//get bonus form:
//get bonus e just akta given id ba naam ke input nile 
//taka add hobe 500 ba 1000

document.getElementById('get-bonus-button').addEventListener('click', 
    function(e){
        e.preventDefault();
        
        //ata string value o hote pare so parseINT er dorkar nai
const bonusCouponCode = validPin;
const couponValue = 1000;
const getBonus = getInputValue('coupon-number');

const availBalance = getInnerText('available-balance');


if (getBonus !== bonusCouponCode){
    const updatedbalance = availBalance + couponValue;
    setInnerText(updatedbalance);
}
else{
    alert('get a valid coupon number');
    return;
}
    }
)

//pay bill system:
//mane just taka kombee
document.getElementById('pay-bill-btn').addEventListener('click',
    function (e) {
        e.preventDefault();

        const billAccountNumber = getInputValue('bill-account-number');

        //same reuseable function use korlam 
        //purseInT wala gula 
        const billAmount = getInputValueNumber('bill-amount');
        const billPinNumber = getInputValueNumber('bill-pin-number');

        //available balance ke access kore minus kora withdraw amount er shathe 
        const availAbleBillBalance = getInnerText('available-balance');

        if (billAccountNumber.length !== 11) {//length jokhon ber korbo take string ba array tei 
            //rakha lagbe number e nile kaj hobe na//
            alert('Please Provide a Valid Agent Number');
            return;
        }
        else if (billPinNumber !== validPin) {
            alert('Please Provide a Valid Pin Number');
            return;
        }
        const bill = availAbleBillBalance - billAmount;

        if(bill < 0){
            alert('Balance is 0');
            return;
        }
        //minus kora amount ta same jaygay rakhbo abr 
        setInnerText(bill);
    }
)





//this is called toggle 
//shob button er jonno kintu eventListener lagbei...
//process:age class name die jinish ta nie asho shob gulo ke same class daw tarpor shei class gulo ke loop chalaw and
//bolo shobai display none hoe jaw. and loop er baire eshe bolo,
//jake show korate chaw take display block korte hoe gelo...
document.getElementById('add-money-button').addEventListener('click',
    function () {
        handleToggle('add-money-parent');

        handleBg('add-money-button');
    }
)
document.getElementById('cash-out-button').addEventListener('click',
    function () {
        handleToggle('cash-out-parent');

        handleBg('cash-out-button');
    }
)
document.getElementById('transfer-money').addEventListener('click',
    function () {
        //age class name die pura form ta nie asho
        handleToggle('transfer-money-parent');

        handleBg('transfer-money');
    }
)
document.getElementById('bonus-get').addEventListener('click',
    function () {
        //age class name die pura form ta nie asho
        handleToggle('get-bonus-parent');

        handleBg('bonus-get');
    }
)
document.getElementById('pay-bill-button').addEventListener('click',
    function () {
        //age class name die pura form ta nie asho
        handleToggle('pay-bill-parent');

        handleBg('pay-bill-button');
    }
)
document.getElementById('transaction-button').addEventListener('click',
    function () {
        //age class name die pura form ta nie asho
        handleToggle('transaction-parent');

        handleBg('transaction-button');
    }
)


//akta mojar jininish ami nijei kori 
//jodi img er upor click kori taile refresh hoe jbae page

document.getElementById('refresh').addEventListener('click',
    function(){
        location.reload();
    }
)

//for logOut button 
document.getElementById('log-out').addEventListener('click',
    function(){
        window.location.href = "./index.html";
    }
)


