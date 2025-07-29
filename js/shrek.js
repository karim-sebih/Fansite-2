const rekImgDiv = document.querySelectorAll(".rekImgDiv");

const rekImg = document.querySelectorAll(".rekImg");

rekImg.forEach((left) => {
  left.style.left = "0px";
});

let dabro = "no";

rekImgDiv.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    const img = elem.querySelector(".rekImg");

    rekImg.forEach((element) => {
      console.log(element.style.left);
      if ("0px" !== element.style.left) {
        dabro = "yes";
      }
      if (dabro == "yes") {
        setTimeout(() => {
          dabro = "no";
          console.log("vraz chi");
        }, 1000);
      } else if (dabro == "no") {
        img.style.left = "-100px";
        console.log("vraz");
        setTimeout(() => {
          img.style.zIndex = "1";
        }, 200);

        setTimeout(() => {
          img.style.left = "-1px";
        }, 300);

        elem.addEventListener("mouseleave", () => {
          img.style.left = "-100px";

          setTimeout(() => {
            img.style.zIndex = "0";
          }, 200);

          setTimeout(() => {
            img.style.left = "0px";
          }, 300);
        });
        // setTimeout(()=>{

        // }, 1000)
      }
    });
  });
});

//KADRER

let shrekArr = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-wDPkFyaHP3---u4sbv1Ydd6TVACQFnpLww&s",
  "https://sfractus-images.cleo.media/unsafe/0x0:1280x720/2000x0/images/Shrek-5-bientot-une-realite-8137.jpg",
  "https://focus.telerama.fr/2025/03/19/0/0/0/0/1600/1067/60/0/a7c38b2c3e31468097d3606f3750c6ea.jpg",
  "https://media.ouest-france.fr/v1/pictures/2836d44a494bb81fafccd2c82d6d7596-shrek-film-d-animation-programme-tv?width=1260&height=708&sign=71fe2198e664a7929d2378c72477929a2e80563b0b8e38442a6e099e21640ec4&client_id=bpservices",
  "https://leparisien.fr/resizer/m0BVRJvugTkCF1_6LgEfvvOT8WQ=/1200x675/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/GN52AGUFO4YSK2BFOBLFS6YQGU.jpg",
  "https://resize.programme-television.org/original/var/premiere/storage/images/news/cinema/films-animation/shrek-l-ogre-vert-revient-dans-un-cinquieme-film-en-2026-4730313/102882010-1-fre-FR/Shrek-l-ogre-vert-revient-dans-un-cinquieme-film-en-2026.png",
];

let shrekArr2 = [
  "https://media1.tenor.com/m/yEG23sxXIVQAAAAC/shrek-shrek-meme.gif",
  "https://media1.tenor.com/m/yEG23sxXIVQAAAAC/shrek-shrek-meme.gif",
  "https://media1.tenor.com/m/yEG23sxXIVQAAAAC/shrek-shrek-meme.gif",
  "https://media1.tenor.com/m/yEG23sxXIVQAAAAC/shrek-shrek-meme.gif",
  "https://media1.tenor.com/m/yEG23sxXIVQAAAAC/shrek-shrek-meme.gif",
  "https://media1.tenor.com/m/yEG23sxXIVQAAAAC/shrek-shrek-meme.gif",
];

const kadr = document.querySelectorAll(".kadr");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

shrekArr.forEach((img, i) => {
  if (i < kadr.length) {
    kadr[i].src = img;
  }
});

right.addEventListener("click", () => {
  shrekArr2.forEach((img, i) => {
    if (i < kadr.length) {
      kadr[i].src = img;
    }
  });
});

left.addEventListener("click", () => {
  shrekArr.forEach((img, i) => {
  if(i < kadr.length){
     kadr[i].src = img
  }
 
});
});

//
// let count = 0

// right.addEventListener("click", ()=>{
//   count++

//   for (let y = count, x = 0; y < shrekArr.length,  x < kadr.length; y++, x++) {

//     if(count < shrekArr.length){
//       kadr[x].src = shrekArr[y];
//     }
//     else{
//       y = 0
//       kadr[x].src = shrekArr[y];
//     }

// }

// })
