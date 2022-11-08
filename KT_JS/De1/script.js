function myFunction() {
    const name = document.getElementById('name');
    const address = document.getElementById('address');

    console.log(FormString(name.value));
    console.log(FormString(address.value));

    name.value = FormString(name.value);
    // address.value = FormString(address.value);
    
}

function FormString(str) {
    let strNew = str;

    strNew = strNew.trim();     
    strNew = strNew.toLowerCase();
    strNew = strNew.replace(/ +/g, ' ');

    let arrWords = strNew.split(' ');
    strNew = "";
    for (const word of arrWords) {
        if (word.trim().length > 0) {
            let string = word + '';
            if (string == ',' || string == '.') {
                // strNew += string;    // Chuẩn hoá thêm cho địa chỉ
            }
            else {
                string = string.charAt(0).toUpperCase() + string.slice(1);
                strNew += ' ' + string;
            }

        }
    }

    strNew = strNew.trim();

    return strNew;
}
