let resetDate = document.getElementById("resetDate");
let dateField = document.getElementById("birth");
resetDate.addEventListener("click", function(){
	dateField.value = dateField.defaultValue;
});


let dateArticle = document.getElementById('dateArticle');
let currDate = new Date();
let yyyy = currDate.getFullYear();
let mm = currDate.getMonth()+1;
let dd = currDate.getDate();
if (dd < 10) { 
            dd = '0' + dd; 
        } 
        if (mm < 10) { 
            mm = '0' + mm; 
        } 
let today = yyyy + '-' + mm + '-' + dd; 
dateArticle.value = today;
