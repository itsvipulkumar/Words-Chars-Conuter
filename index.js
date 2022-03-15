const clear_btn = document.getElementById("clear_btn");
    clear_btn.onclick = () => {
        document.getElementById("words").value = ""
        counter();
    }
    const counter = () => {
        const txtfield = document.getElementById("words");
        const showWdata = document.getElementById("showWdata");
        let charcount = document.getElementById("words").value.length;

        let txt = txtfield.value;
        const w = txt.split(" ");
        if (w[0] === "") {
            showWdata.innerText = 0;
        }
        else {
            showWdata.innerText = w.length;
        }
        document.getElementById("showCdata").innerHTML = charcount;

    }