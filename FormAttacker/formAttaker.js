// ボタン生成
let createButton = () => {
    // ボディ要素取得
    let bodyEle = document.querySelector('body');
    let inputEles = document.querySelectorAll('input,textarea,select');

    // ==========================================================
    // 全ての要素にランダムな値を挿入するボタン
    let insertAllBtn = document.createElement('button');
    insertAllBtn.id = 'insertAllBtn';
    insertAllBtn.textContent = 'insertAllBtn';
    insertAllBtn.addEventListener('click', (e) => {
        e.preventDefault();
        randomValueInsert(inputEles);
        e.textContent = 'Clicked!!';
        setTimeout(() => {
            e.textContent = 'insertAllBtn';
        }, 500);
    });
    bodyEle.insertAdjacentElement('beforeend', insertAllBtn);

    // ==========================================================
    // 入力要素ごとにランダムな値を挿入するボタン
    let insertBtn;
    for (let i = 0; i < inputEles.length; i++) {
        insertBtn = document.createElement('button');
        insertBtn.id = 'insertBtn' + i;
        insertBtn.textContent = 'insertBtn' + i;
        insertBtn.addEventListener('click', (e) => {
            e.preventDefault();
            randomValueInsert([inputEles[i]]);
            e.textContent = 'Clicked!!';
            setTimeout(() => {
                e.textContent = 'insertBtn' + i;
            }, 500);
        });
        inputEles[i].insertAdjacentElement('beforebegin', insertBtn);
    }

    // ==========================================================
    // スタイル指定（ボタンはabsolute指定）
    let style = document.createElement('style');
    style.textContent = `
        #insertAllBtn {
            position: absolute;
            bottom: 100px;
            right: 50px;
            width: 100px;
            height: 25px;
            color: #333;
            background-color: #fff;
            border-radius: 5px;
            z-index: 9999;
        }
        #insertAllBtn:hover {
            cursor: pointer;
            background-color: #eee;
        }
        #insertBtn {
            // position: absolute;
            // bottom: 50px;
            // right: 50px;
            width: 100px;
            height: 25px;
            color: #333;
            background-color: #fff;
            border-radius: 5px;
            z-index: 9999;
        }
        #insertBtn:hover {
            cursor: pointer;
            background-color: #eee;
        }
    `;
    bodyEle.insertAdjacentElement('beforeend', style);
};

/**
 * 入力された要素配列にランダムな値を挿入する
 * @param {配列} elementArr - 要素の配列
 */
let randomValueInsert = (elementArr) => {
    for (let i = 0; i < elementArr.length; i++) {
        let element = elementArr[i];
        let elementType = element.type;

        if (elementType === 'text' || elementType === 'textarea') {
            // input,textarea >> ランダムな文字列を生成してvalueに入れる
            let randomChars =
                'abcdefghijABCDEFGHIJ0123456789あいうえおアイウエオ`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?\n 　';
            let randomCharsLength = randomChars.length;
            let randomString = Array.from(crypto.getRandomValues(new Uint32Array(20)))
                .map((n) => randomChars[n % randomCharsLength])
                .join('');
            element.value = randomString;
        } else if (elementType === 'number') {
            // number >> ランダムな数値を生成してvalueに入れる
            let randomNum = Math.floor(Math.random() * 1000000000);
            element.value = randomNum;
        } else if (elementType === 'email') {
            // email >> ランダムな文字列を生成してvalueに入れる
            let randomChars =
                'abcdefghijABCDEFGHIJ0123456789あいうえおアイウエオ`~!#$%^&*()-_=+[{]}\\|;:\'",<.>/?';
            let randomCharsLength = randomChars.length;
            let randomString = Array.from(crypto.getRandomValues(new Uint32Array(10)))
                .map((n) => randomChars[n % randomCharsLength])
                .join('');
            element.value = randomString + '@example.com';
        } else if (elementType === 'tel') {
            // tel >> ランダムな数値を生成してvalueに入れる
            let randomNum = Math.floor(Math.random() * 1000000000);
            element.value = '0' + randomNum;
        } else if (elementType === 'radio') {
            // radio >> ランダムな選択肢を選択する
            let radioName = element.name;
            let radioGroup = document.getElementsByName(radioName);
            let randomRadio = radioGroup[Math.floor(Math.random() * radioGroup.length)];
            randomRadio.checked = true;
        } else if (elementType === 'checkbox') {
            // checkbox >> ランダムにチェックを入れる
            let randomCheckbox = Math.floor(Math.random() * 2);
            if (randomCheckbox === 0) {
                element.checked = true;
            } else {
                element.checked = false;
            }
        } else if (elementType === 'select-one') {
            // select >> ランダムなoptionを選択する
            let randomOption = Math.floor(Math.random() * element.options.length);
            element.options[randomOption].selected = true;
        }
    }
};

createButton();
