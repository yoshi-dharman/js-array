// EXERCISE 1 ==============================================================================

let pekerjaanIT = ["Front End", "Back End", "UI/UX", "IT Support", "Full Stack"];

console.log("Panjang array pekerjaan IT adalah " + pekerjaanIT.length);
console.log(pekerjaanIT);

let sectionE1 = document.getElementById("e-1");

if (sectionE1 != null) {                                //Cuma buat ga error di console pas ke halaman lain karena tidak ada idnya
   document.getElementById("e-1-title").innerHTML = "Panjang array pekerjaan IT adalah " + pekerjaanIT.length;

   for (let i = 0; i <= pekerjaanIT.length - 1; i++) {
      let list = document.createElement("li");
      list.innerHTML = pekerjaanIT[i];
      sectionE1.getElementsByTagName("ul")[0].appendChild(list);
   }
}



// EXERCISE 2 ==============================================================================
let namaTeam = ["Ketua-Budi", "Budi1", "Budi2", "Budi3", "Ketua-Dodi", "Dodi1", "Dodi2", "Dodi3"]
let team1 = namaTeam.slice(0, 4);
let team2 = namaTeam.slice(4, namaTeam.length);

console.log(team1);
console.log(team2);

let sectionE2NamaTeam = document.getElementById("e-2-namaTeam");
let sectionE2Team1 = document.getElementById("e-2-team1");
let sectionE2Team2 = document.getElementById("e-2-team2");

// sectionE2NamaTeam.setAttribute("class", "breadcrumb_change");

if (sectionE2NamaTeam != null) {                                //Cuma buat ga error di console pas ke halaman lain karena tidak ada idnya
   sectionE2NamaTeam.innerHTML = "Nama team : " + namaTeam;

   document.getElementById("e-2-btn-slice").addEventListener("click", () => {
      sectionE2Team1.innerHTML = "Team 1 : " + namaTeam.slice(0, 4);
      sectionE2Team2.innerHTML = "Team 2 : " + namaTeam.slice(4, namaTeam.length);
   });
}



// EXERCISE 3 ==============================================================================
let angka = [3, 5, 7, 9, 11];

let sectionE3Angka = document.getElementById("e-3-angka");

if (sectionE3Angka != null) {                                //Cuma buat ga error di console pas ke halaman lain karena tidak ada idnya
   sectionE3Angka.innerHTML = "Angka Awal : " + angka;

   document.getElementById("e-3-btn-kali5").addEventListener("click", () => {
      angka.map((item, index, angka) => angka[index] = item * 5);
      document.getElementById("e-3-angka-kali5").innerHTML = "Angka di Kali 5 : " + angka;
      console.log(angka);
   })
}




// EXERCISE 4 ==============================================================================
let array1 = ["Math", "English", "Programming", "Japan", "German"];
let array2 = ["Geography", "Spanish", "Programming", "English"];

if (document.getElementById("e-4-array1") != null) {                               //Cuma buat ga error di console pas ke halaman lain karena tidak ada idnya
   document.getElementById("e-4-array1").innerHTML = "Array 1 : " + array1;
   document.getElementById("e-4-array2").innerHTML = "Array 2 : " + array2;

   document.getElementById("e-4-btn-findDuplicate").addEventListener("click", () => {
      let duplikat = [];
      let boolDuplikat;

      array1.map((item, index) => {
         array2.map((item2, index2) => {
            boolDuplikat = !!(item == item2);
            if (boolDuplikat) {
               duplikat.push(item);
            }
            // console.log(index + " " + item + " == " + item2);
         })
      })

      console.log("Yang duplikat adalah" + duplikat);

      if (duplikat.length > 0) {
         document.getElementById("e-4-arrayHasil").innerHTML = "Yang duplikat adalah " + duplikat;
      }
      else {
         document.getElementById("e-4-arrayHasil").innerHTML = "Tidak ada yang duplikat ";
      }
   })
}



// EXERCISE 5 ==============================================================================
let tweetStuff = document.getElementById("tweet-stuff");
let tweetArray = [];

if (tweetStuff != null) {

   document.getElementById("btn-submit-tweet").addEventListener("click", () => {
      tweetArray.unshift(tweetStuff.value);
      document.getElementById("your-tweet-stuff").innerHTML = "";

      for(let i = 0 ; i < tweetArray.length; i++){
         let paragraph = document.createElement("p");
         paragraph.innerHTML = tweetArray[i];
         document.getElementById("your-tweet-stuff").appendChild(paragraph);
      }

      tweetStuff.value = "";
   });

}

// EXERCISE 6 ==============================================================================
let btnSubmitUser = document.getElementById("btn-submit-user");

if (btnSubmitUser != null) {

   let errAlert = document.getElementById
   let arrayUser =[];

   function userChecker(user, pass) {
      let userErrorAlert = document.getElementsByClassName("alert");

      if (user.value != "" && user.value.length > 5 && pass.value != "" && pass.value.length > 7) {
         userErrorAlert[1].setAttribute("class", "alert hidden");
         userErrorAlert[0].setAttribute("class", "alert hidden");
         return true;
      }
      else
         userErrorAlert[1].setAttribute("class", "alert");
         userErrorAlert[0].setAttribute("class", "alert");
         return false;
   }



   function encryptPass(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }

   btnSubmitUser.addEventListener("click", () => {
      let userName = document.getElementById("user-name");
      let userPass = document.getElementById("user-pass");
      let hashPass;

      if (userChecker(userName, userPass)) {
         hashPass = userPass.value.replace(userPass.value,encryptPass(userPass.value.length));                    // Replacenya disini ya (walau ga butuh sih)
         arrayUser.push([userName.value,hashPass]);
         document.getElementById("user-list").innerHTML = "";

         for(let i = 0; i < arrayUser.length; i++){
            let list = document.createElement("p");
            list.innerHTML = "Username : " + arrayUser[i][0] + "<br> Password : " + arrayUser[i][1];
            document.getElementById("user-list").appendChild(list);
         }

         userName.value = "";
         userPass.value = "";
      }
   });
}