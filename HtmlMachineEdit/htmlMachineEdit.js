import { JSDOM } from 'jsdom';
import fs from 'fs';

// ===================================================================
// ======================== ！！！初期設定！！！ ========================

// 入力
const inputFileNames = ['index_A.html', 'index_B.html']; // 'htmlファイル名' を配列で指定
const outputFileName = 'index.html'; // 'htmlファイル名'

// ======================== ！！！初期設定！！！ ========================
// ===================================================================

// 設定
const inputFolder = './input';
const outputFolder = './output';

// 入力と設定からパスを生成
for (let i = 0; i < inputFileNames.length; i++) {
    inputFileNames[i] = inputFolder + '/' + inputFileNames[i];
}
const outputFilePath = outputFolder + '/' + outputFileName;

// DOMオブジェクトを配列に格納
let domObjectsArr = [];
for (let i = 0; i < inputFileNames.length; i++) {
    const html = fs.readFileSync(inputFileNames[i], 'utf8');
    domObjectsArr.push(new JSDOM(html));
}

// ユーザー定義関数を実行
const bodyText = await userJsEdit(domObjectsArr);
fs.writeFileSync(outputFilePath, bodyText);

/**
 * ユーザー定義関数
 * @param {配列} domObjectsArr - htmlファイルのDOMオブジェクトを格納した配列
 * @returns {文字列} htmlファイルの文字列（基本的にinnerHTMLの戻り値を格納）
 */
async function userJsEdit(domObjectsArr) {
    // ===================================================================
    // ================= ！！！DOM操作を記述！！！ =================

    // DOMオブジェクトを取得
    let dom_A = domObjectsArr[0];
    let dom_B = domObjectsArr[1];

    // DOM操作
    let dom_A_h1 = dom_A.window.document.querySelector('h1');
    let dom_B_h1 = dom_B.window.document.querySelector('h1');
    dom_A_h1.innerHTML = dom_B_h1.innerHTML;

    // 結果のinnerHTMLを返す
    let bodyText = await dom_A.window.document.documentElement.innerHTML;
    return bodyText;

    // ================= ！！！DOM操作を記述！！！ =================
    // ===================================================================
}
