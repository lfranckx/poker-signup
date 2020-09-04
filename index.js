function dynInput(cbox) {
    if (cbox.checked) {
        if (cbox.name === "apple-pay" || cbox.name === "paypal") {
            return;
        }
        const input = document.createElement("input");
        input.type = "text";
        input.name = `${cbox.name} ` + "handle";
        input.placeholder = "Username";
        input.required = true;
        const div = document.createElement("div");
        div.id = cbox.name;
        div.appendChild(input);
        document.querySelector(`.${cbox.name}`).appendChild(div);
    } else {
        document.getElementById(cbox.name).remove();
    }
}