export function header() {
    let body = document.body;
    let header = document.createElement("header");
    let container = document.createElement("div");
    let header_left = document.createElement("div");
    let campus_list = document.createElement("div");
    let h1 = document.createElement("h1");
    let auth = document.createElement("div");
    let sign_in = document.createElement("a");
    let slash = document.createElement("span");
    let sign_up = document.createElement("a");

    let campus_arr = ["SKD", "TAS", "BHK"];

    for (const campus of campus_arr) {
        let button = document.createElement("button");

        button.classList.add("campus");

        if (campus == "SKD") {
            button.classList.add("campus_selected");
        }

        button.innerHTML = `${campus}`;
        button.href = `#`;

        campus_list.append(button);
    }

    container.classList.add("container");
    container.classList.add("header");
    header_left.classList.add("header_left");
    campus_list.classList.add("campus_list");
    auth.classList.add("auth");
    sign_in.classList.add("sign_in");
    sign_up.classList.add("sign_up");

    h1.innerHTML = "School 21 Booking Service";
    sign_in.innerHTML = "Login";
    sign_in.href = "#";
    slash.innerHTML = "/";
    sign_up.innerHTML = "Sign up";
    sign_up.href = "#";

    header.append(container);
    container.append(header_left, auth);
    header_left.append(campus_list, h1);
    auth.append(sign_in, slash, sign_up);

    body.append(header);

    let campus_btns = document.querySelectorAll(".campus");

    campus_btns.forEach(btn => {

        btn.onclick = () => {
            campus_btns.forEach(btn => btn.classList.remove("campus_selected"))

            btn.classList.add("campus_selected");
        }

    })
}