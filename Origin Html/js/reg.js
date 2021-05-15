window.onload = function(){
    var regUsername = /^[a-zA-Z][a-zA-Z0-9_]{9,16}$/;
    var Username = document.querySelector('#Username');
    var surepwd = document.querySelector('#surepwd');
    var pwd = document.querySelector('#pwd');
    Username.onblur = function(){
        if(regUsername.test(this.value)){            
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class = "success_icon"></i>';
        }else{            
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class = "error_icon"></i> Error</br>(starting with a letter, 9-16 bytes allowed, alphanumeric underline allowed)';
        }
    }


    surepwd.onblur = function(){
        if(this.value == pwd.value){
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class = "success_icon"></i>';
        }else{
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class = "error_icon"></i> Error</br>Your confirmed password and new password do not match.';
        }
    }
}

function select(){
    var name = document.getElementsByName("queren");
    var flag = false;
    if (name[0].checked){
        flag = true;
    }
    if(!flag){
        alert("Please agree to the relevant matters first.");
    }
    
}

// function Check(){
//     var password = document.querySelector('#password');
//     var password2 = document.querySelector('#password2');
//         if(password == password2){
//             password2.nextElementSibling.className = 'success';
//             password2.nextElementSibling.innerHTML = '<i class = "success_icon"></i>';
//         }else{
//             password2.nextElementSibling.className = 'error';
//             password2.nextElementSibling.innerHTML = '<i class = "error_icon"></i> Error</br>Your confirmed password and new password do not match.';
//         }
//     }
