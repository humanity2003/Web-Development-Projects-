const sliderValue = document.getElementById("inputSlider");
const genPwdBtn = document.getElementById("genBtn");
const pwdLengthSpan = document.getElementById("pwdLengthSpan");
const txtBox = document.getElementById("txtBox");
const copyIcon = document.getElementById("copyIcon");

sliderValue.addEventListener('input',() => {
    pwdLengthSpan.textContent = sliderValue.value;
});

copyIcon.addEventListener('click',() => {
    txtBox.select();
    document.execCommand("copy");
    console.log("Password copied....")

})

genPwdBtn.addEventListener('click',generatePassword);


function generatePassword(){

    const lowerCaseGroup = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseGroup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersGroup = "0123456789";
    const symbolsGroup = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    let pwdGroup = '';
    let pwd = '';
    let hasLower = false, hasUpper = false, hasNumber = false, hasSymbol = false;

    // Check if at least one checkbox is checked
    if (!document.getElementById("lowerCase").checked && 
        !document.getElementById("upperCase").checked && 
        !document.getElementById("number").checked && 
        !document.getElementById("symbol").checked) {
        
        alert("Please select at least one character type.");
        return; // Exit the function if no checkboxes are checked
    }

    if (document.getElementById("lowerCase").checked){
        pwdGroup += lowerCaseGroup;
        pwd += lowerCaseGroup[Math.floor(Math.random() * lowerCaseGroup.length)];
        hasLower = true;
    }

    if (document.getElementById("upperCase").checked){
        pwdGroup += upperCaseGroup;
        pwd += upperCaseGroup[Math.floor(Math.random() * upperCaseGroup.length)];
        hasUpper = true;
    }

    if (document.getElementById("number").checked){
        pwdGroup += numbersGroup;
        pwd += numbersGroup[Math.floor(Math.random() * numbersGroup.length)];
        hasNumber = true;
    }

    if (document.getElementById("symbol").checked){
        pwdGroup += symbolsGroup;
        pwd += symbolsGroup[Math.floor(Math.random() * symbolsGroup.length)];
        hasSymbol = true;
    }

    // Calculate how many more characters are needed
    let remainingLength = sliderValue.value - pwd.length;

    for (let i=0;i<remainingLength;i++){
        // Ensure the random index is within the bounds of the pwdGroup string
        let randomIndex = Math.floor(Math.random() * pwdGroup.length);
        pwd += pwdGroup[randomIndex];
    }

    // Shuffle password to ensure randomness
    pwd = pwd.split('').sort(() => Math.random() - 0.5).join('');

    txtBox.disabled = false;
    txtBox.value = pwd;
   
}