"use script";

let prenom="John";
let musique=["Musique une", "Musique deux","Musique trois","Musique quatre", "Anissa - Wejdene"];
let mentale=10
let changement=0

let radio; 

for(let i=29;i>=0;i--){
    radio = musique[Math.floor(Math.random() * musique.length)];
    if(radio=="Anissa - Wejdene"){
        mentale--;
        changement++;
        console.log("Anissa - Wejdene, vous perdez un point de vie et vous changez de taxi, votre santé mentale : "+ mentale +", il reste "+i+" feux rouges")
    }
    if(mentale==0){
        console.log("EXPLOSION !!!")
        break;
    }
    if(i==0){
        console.log("Vous êtes arrivé à destination en " + changement + " changements de Taxi")
        break;
    }
    if(radio=="Musique une"){
        console.log("Jules qui danse - FirAze   Il reste " +i+ " feux rouges")
    }
    if(radio=="Musique deux"){
        console.log("Jean qui danse - Xendor   Il reste " +i+ " feux rouges")
    }
    if(radio=="Musique quatre"){
        console.log("Jarod qui danse - Werious   Il reste " +i+ " feux rouges")
    }
    if(radio=="Musique trois"){
        console.log("Ilan qui danse - Slapilou   Il reste " +i+ " feux rouges")
    }

}






