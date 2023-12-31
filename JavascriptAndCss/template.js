// ========================================
// CSSで消せない広告を消す

// 削除した要素のカウンタ
let eraseCounter = 0;

// 200msごとにdisplay: none;を適用し、既に適用されている場合はスクリプトを停止する
let timer = setInterval(async () => {
    // 削除対象の要素を初期化
    let eraseTargetElements = [];

    // 削除対象の要素を追加
    eraseTargetElements.push(document.querySelector('.fc-ab-root'));

    for (let i = 0; i < eraseTargetElements.length; i++) {
        if (eraseTargetElements[i]) {
            eraseTargetElements[i].setAttribute('style', 'display: none !important;');
            eraseCounter++;
        }
        if (eraseCounter === eraseTargetElements.length) {
            // bodyのスクロール禁止を解除
            document.querySelector('body').style.overflow = 'auto';

            // スクリプトを停止
            clearInterval(timer);
        }
    }
}, 200);
