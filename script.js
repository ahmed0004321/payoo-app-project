//1st task holo log in e number and 4 digit pin dile and
//log in button e click korlei amake amr app er moddhe nie jabe

//log in button ke eventListener add kore dilei hoe jabe

//log in page functionality::

document.getElementById('loginButton').addEventListener('click',
    function(e){
        e.preventDefault();//page refresh howa prevent korte ai line//
        const mobileNumber = 1734449965;
        const pinNumber = 1234;

        //1st amake input duita ke paite hobe
        const mobileNumberValue = document.getElementById('phone-number').value;
        const pinNumberValue = document.getElementById('pin-number').value;

        const mobileValueConverted = parseInt(mobileNumberValue);
        const pinNumberConverted = parseInt(pinNumberValue);

        if(mobileValueConverted === mobileNumber && pinNumberConverted === pinNumber){
            //so aikhane jinishta true mane akhanthekei onno akta html 
            //page amake nie jabe//
            window.location.href="./home.html";
        }
        else {
            alert('invalid credentials')
        }
    }
)