(() => {
 const layer = document.querySelector('.petal-layer');
 if (!layer || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
 const random = (a,b) => Math.random()*(b-a)+a;
 function breeze(){
   for(let i=0,n=Math.floor(random(2,6));i<n;i++){
     const p=document.createElement('i');
     p.className='petal';
     p.style.left=random(1,99)+'vw';
     p.style.setProperty('--duration',random(8,16)+'s');
     p.style.setProperty('--sway',random(-22,22)+'vw');
     p.style.width=random(8,15)+'px';
     p.style.height=random(12,21)+'px';
     p.style.animationDelay=random(0,1.5)+'s';
     layer.appendChild(p);
     p.addEventListener('animationend',()=>p.remove(),{once:true});
   }
   setTimeout(breeze,random(2400,6500));
 }
 setTimeout(breeze,1200);
})();