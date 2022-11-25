
function addnum(a:number, b:number){
    return a+b;

}

let dspl = document.createElement('div');
dspl.innerText = "Im a DIV";
document.body.append(dspl);
dspl.innerText = dspl.innerText + "  " + addnum(39764,76);