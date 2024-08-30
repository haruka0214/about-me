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
    

    document.addEventListener('DOMContentLoaded', () => {
      const starfield = document.querySelector('.starfield');
      const starCount = 50;
  
      for (let i = 0; i < starCount; i++) {
          const star = document.createElement('div');
          star.classList.add('star');
          
          // 星のサイズと位置を設定
          const size = Math.random() * 20 + 10; // 5px〜15pxのサイズ
          const xPosition = Math.random() * 100 + 'vw';
          const animationDuration = Math.random() * 5 + 5; // 5〜10秒のアニメーション
  
          star.style.width = `${size}px`;
          star.style.height = `${size}px`;
          star.style.left = xPosition;
          star.style.animation = `fall ${animationDuration}s linear infinite`;
  
          starfield.appendChild(star);
      }
  });

  
  