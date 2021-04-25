console.log("Hello, world!");

function runIBPCI(state) {
    
    var str = document.getElementById('editor').innerText;
    str = str.replace(/\s\s+/g, ' ');
    //console.log(str);

    var ptr  = allocate(intArrayFromString(str), ALLOC_NORMAL);

    var out = String(Module.__Z20run_interpreter_wasmPc(ptr));
    console.log(out);

    //var resValue = Pointer_stringify(out);
    //console.log(out);


    _free(ptr);    
}

