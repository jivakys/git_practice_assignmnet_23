function checkPalindrome(str){
    let new_str="";
    for(let i=str.length-1; i>=0; i--){
        new_str+= str[i];
    }
    return new_str;
}

let ans =  checkPalindrome("naman");
if(ans == new_str){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}