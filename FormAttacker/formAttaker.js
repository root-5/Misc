const formAttacker = () => {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input,textarea');
    const radios = form.querySelectorAll('input[type="radio"]');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');

    // ランダムな文字列を生成
    const randomString = () => {
        const randomChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const randomCharsLength = randomChars.length;
        const randomString = Array.from(crypto.getRandomValues(new Uint32Array(10)))
            .map((n) => randomChars[n % randomCharsLength])
            .join('');
        return randomString;
    };

    // input,textareaにランダムな文字列を入れる
    inputs.forEach((input) => {
        input.value = randomString();
    });

    // radioにランダムな値を入れる
    radios.forEach((radio) => {
        const radioName = radio.name;
        const radioGroup = document.getElementsByName(radioName);
        const randomRadio = radioGroup[Math.floor(Math.random() * radioGroup.length)];
        randomRadio.checked = true;
    });

    // checkboxにランダムな値を入れる
    checkboxes.forEach((checkbox) => {
        const randomCheckbox = Math.floor(Math.random() * 2);
        if (randomCheckbox === 0) {
            checkbox.checked = true;
        }
    });
};

formAttacker();