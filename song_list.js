//song list
let All_song = [
   {
     name: "အသည္းရက္စက္တယ္",
     path: src="https://drive.google.com/uc?export=download&id=10z-f32tPFx14q2l_AqWFzZzaWk6ot_RF",
     img: src="https://drive.google.com/uc?export=download&id=1ijssQknM21Ci8MkwB9EBNvPwcUNAUmQI",
     singer: "phyoe pyae sone"
   },
   {
     name: "Lwan Nay Sal Par Mya Kune Nyo",
     path: src="https://drive.google.com/uc?export=download&id=10z5mRaP3xo06vkqCU68KCIOukTz6Neo6",
     img: src="https://drive.google.com/uc?export=download&id=1ijssQknM21Ci8MkwB9EBNvPwcUNAUmQI",
     singer: "phyoe pyae sone "
   },
   {
     name: "အသည္းနှလံုးမရွိတဲ့သူ",
     path: src="https://drive.google.com/uc?export=download&id=113mjsBgVa2zUwvNbhKb8W0KZcUebfxMk",
     img: src="https://drive.google.com/uc?export=download&id=1ijssQknM21Ci8MkwB9EBNvPwcUNAUmQI",
     singer: "phyoe pyae sone "
   },
   {
     name: " ေနာက္ဆိုရင္",
     path: src="https://drive.google.com/uc?export=download&id=117VCc7UccdM-VazqxDw0Db5ykrmvEsoD",
     img: src="https://drive.google.com/uc?export=download&id=1ijssQknM21Ci8MkwB9EBNvPwcUNAUmQI",
     singer: "phyoe pyae sone"
   },
   {
     name: "ကျွန်တော် နဲ့အသည်းနှလုံ",
     path: src="https://drive.google.com/uc?export=download&id=117eEfGq9o9Hn17jgJJutgBSarRL-ygj4",
     img: src="https://drive.google.com/uc?export=download&id=1ijssQknM21Ci8MkwB9EBNvPwcUNAUmQI",
     singer: "phyoe pyae sone "
   },
   {
    name: " မျှော်နိုင်သမှျ",
    path: src="https://drive.google.com/uc?export=download&id=11FwndENIfW1rZsPMgCSzG7vXoApn31OC",
    img: src="https://drive.google.com/uc?export=download&id=1ijssQknM21Ci8MkwB9EBNvPwcUNAUmQI",
    singer: "phyoe pyae sone"
   },
   {
    name: "နှလုံးသားရဲ့နေရာတိုင်းမှာ",
    path: src="https://drive.google.com/uc?export=download&id=11IJVp-6SmEDsIJYC-t_nW-My1ntguWHU",
    img: src="https://drive.google.com/uc?export=download&id=1ijssQknM21Ci8MkwB9EBNvPwcUNAUmQI",
    singer: "phyoe pyae sone "
   },
  
   {
    name: "ရင်ကွဲပုံပြင်",
    path: src="https://drive.google.com/uc?export=download&id=11IRp2E1n1nW1NGJ20JjREcxdzQEcLrQM",
    img:src= "https://drive.google.com/uc?export=download&id=1ijssQknM21Ci8MkwB9EBNvPwcUNAUmQI",
    singer: "phyoe pyae sone "
   },
   
   { 
     name:"အလွမ်းမှတ်တိုင်",
    path: src="https://drive.google.com/uc?export=download&id=11Nx3uDaDjK0u-60E-GcAiu9Es_fiTWr-",
    img:src= "https://drive.google.com/uc?export=download&id=1ijssQknM21Ci8MkwB9EBNvPwcUNAUmQI",
    singer: " phyoe pyae sone"
   },
   {
    name: "အသဲကွဲ ဧည့်သည်",
    path: src="https://drive.google.com/uc?export=download&id=11VJl2aU-y-Ye5pqFABsQqeNIC7ECLCbq",
    img:src= "https://drive.google.com/uc?export=download&id=1ijssQknM21Ci8MkwB9EBNvPwcUNAUmQI",
    singer: "phyoe pyae sone "
   },
  
  
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/