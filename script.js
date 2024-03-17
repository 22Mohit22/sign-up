const pass = document.getElementById('password-inp');
const rePass = document.getElementById('re-password-inp');
const inputs = document.querySelectorAll('input');
const passBox = document.getElementById('passbox');

const warnEl = document.createElement('p');
warnEl.style.color = 'red';
warnEl.textContent = '*Passwords do not match';

inputs.forEach(input => {
    input.addEventListener('focus', () => {

        
        if((pass.value == '' || rePass.value == '') || (pass.value.trim() != rePass.value.trim())){
            passBox.appendChild(warnEl);
            pass.style.borderColor = 'red';
            rePass.style.borderColor = 'red';
        } else{
            if((!pass.focus || !rePass.focus) || passBox.contains(warnEl)){

                passBox.removeChild(warnEl);
                pass.style.borderColor = '#05d41d'
                rePass.style.borderColor = '#05d41d'
            }
        }
    })
})