function tutoriel() {

    if(mode == 0) {

        var selectedMusic = document.getElementById("mesChansons");
        var idMusic = selectedMusic.options[selectedMusic.selectedIndex].value;

        var msg1 = "", msg2 = "";

        if( idMusic != -1 ) {
            for (i in data) {
                if( idMusic == data[i].id ) {
                    msg1 += data[i].titre;

                    //  Creation d'un tuto
                    monTuto = new tuto(data[i].notes);
                    monTuto.tutoStart();

                    for (j in data[i].notes) {
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
    else if(mode == 1) {
        

        monTuto.tutoEnd();
    }
}
