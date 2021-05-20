console.log("Hello, world!");

function runIBPCI(state) {
    var str = document.getElementById('edit').value;
    //str = str.replace(/\s\s+/g, ' ');
    console.log(str);
    var ptr = allocate(intArrayFromString(str), ALLOC_NORMAL);

    switch(state) {

        case 1: 
            Module.__Z20run_interpreter_wasmPc(ptr);
            break;
    }
    _free(ptr);    
}

function clear_output() {
    document.getElementById('output').innerHTML = "";
}

