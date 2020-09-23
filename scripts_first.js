function viewCurrDate() {
    document.getElementById('demo').innerHTML = Date();
    
    var name = prompt("이름을 입력하세요");
    alert("입력한 이름은 " + name);
    
    var ret = confirm("다시 입력하시겠습니까?");
    alert(ret);
}
