/*document.addEventListener('keydown', function(e) {
    var str = document.getElementById('editor').textContent
    console.log(str)
});*/

document.getElementById('button_run').addEventListener('click', function() {
    var str = document.getElementById('editor').textContent;
    console.log(str);
    return str;

});
