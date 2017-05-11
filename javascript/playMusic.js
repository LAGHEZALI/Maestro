function playMusic() {

    

    var selectedMusic = document.getElementById("mesChansons");
    var idMusic = selectedMusic.options[selectedMusic.selectedIndex].value;

    var msg1 = "", msg2 = "";

    if( idMusic != -1 ) {
        for (i in data) {
            if( idMusic == data[i].id ) {
                msg1 += data[i].titre;

                for (j in data[i].notes) {

                        playNote( data[i].notes[j].nomNote , data[i].notes[j].silence );

                        msg2 += data[i].notes[j].nomNote +" ";
                }
            }
        }
        
        document.getElementById("chansonEnCours").innerHTML="Titre : " + msg1+"<br><br>Notes : ";
        document.getElementById("notesChansonEnCours").innerHTML=msg2;
    }
    else {
        document.getElementById("chansonEnCours").innerHTML="";
        document.getElementById("notesChansonEnCours").innerHTML="";
    }
}
