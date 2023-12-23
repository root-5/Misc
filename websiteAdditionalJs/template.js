window.onload = function () {
    // ページ内のリンクを取得
    let aTagEles = document.getElementsByTagName('a');
    let linkUrls = [];
    for (let i = 0; i < aTagEles.length; i++) {
        linkUrls.push(aTagEles[i].getAttribute('href'));
    }

    // ページ右下にページ内リンクを表示
    let footer = document.getElementById('footer');
    let addcode = '<div id="linkBtns"><a href="' + linkUrls[0] + '">Click!!</a></div>';
    footer.insertAdjacentHTML('afterend', addcode);

    // 左右矢印キーにショートカットを追加
    document.addEventListener('keydown', function (e) {
        e.preventDefault();
        if (e.key == 'ArrowRight') {
            window.location.href = linkUrls[0];
        }
        if (e.key == 'ArrowLeft') {
            e.preventDefault();
            window.location.href = linkUrls[1];
        }
    });
};
