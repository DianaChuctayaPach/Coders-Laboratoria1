var chile_4 =document.getElementById('chile4');
var lima_5 =document.getElementById('lima5');
var lima_6=document.getElementById('lima6');
var select=document.getElementById('select');
select.onchange=function(){
    if (select.value=="chile_4") {
 displayImage();
 chile_4.style.display='block';
    }
    if (select.value=="lima_5") {
        displayImage();
        lima_5.style.display='block';
    }
    if (select.value=="lima_6") {
        displayImage();
        lima_6.style.display='block';
    }

}
function displayImage() {
    chile_4.style.display='none';
    lima_5.style.display='none';
    lima_6.style.display='none';
}
