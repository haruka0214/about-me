document.addEventListener('DOMContentLoaded', () => {
    console.log('自己紹介サイトへようこそ！');
});
    const btn = document.getElementById('btn-menu');
    const nav = document.querySelector('.main-nav');
    
    btn.addEventListener('click', () => {
        nav.classList.toggle('open-menu');
        if (btn.innerHTML === 'Menu') {
            btn.innerHTML = 'Close';
        } else {
            btn.innerHTML = 'Menu';
        }
    });
    

//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
    easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
    duration: 1000,//時間指定(1000＝1秒)
    strokeWidth: 0.2,//進捗ゲージの太さ
    color: '#555',//進捗ゲージのカラー
    trailWidth: 0.2,//ゲージベースの線の太さ
    trailColor: '#bbb',//ゲージベースの線のカラー
    text: {//テキストの形状を直接指定
      style: {//天地中央に配置
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: '0',
        margin: '-30px 0 0 0',//バーより上に配置
        transform:'translate(-50%,-50%)',
        'font-size':'1rem',
        color: '#fff',
      },
      autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function(state, bar) {
      bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
  });
  
  //アニメーションスタート
  bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 で100%まで描画します
    $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
  });

  //スクロールした際の動きを関数でまとめる