let arrayEnglish = ['english','information','car','bird']
let arrayVietnamese = ['tiếng anh', 'thông tin', 'xe hơi', 'con chim'];
let arrayDictionary = new Array(arrayEnglish.length);

console.log(arrayDictionary);
function translateText () {
    let inputText = document.getElementById('inputText').value;

    if (document.getElementById('selectLanguage').value == 'english') {
        let indexOfWord = arrayEnglish.indexOf(inputText);
        if (indexOfWord == -1) {
            document.getElementById('outputResult').innerHTML = 'Không tìm được từ yêu cầu!';
        }
        else {
            document.getElementById('outputResult').innerText = arrayVietnamese[indexOfWord];
        }
    } else if(document.getElementById('selectLanguage').value == 'vietnamese') {
        let indexOfWord = arrayVietnamese.indexOf(inputText);
        if (indexOfWord==-1) {
            document.getElementById('outputResult').innerText = 'Không tìm được từ yêu cầu!';
        }
        else {
            document.getElementById('outputResult').innerText = arrayEnglish[indexOfWord];
        }
    }
    else {
        document.getElementById('outputResult').innerText = 'Không tìm được từ yêu cầu!';
    }
}
