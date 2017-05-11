
//  L'objet Tuto
function tuto(tabNotes) {
    this.tabNotes   = tabNotes;
    this.nbNotes    = tabNotes.length;
    this.iter       = 0;
    this.noteValide = function() {
        //  incrementer la progression
        this.iter += 1;
        //  Réinstaliser les couleurs des touches
        touche_do.color = "black";
        touche_re.color = "white";
        touche_mi.color = "black";
        touche_fa.color = "white";
        touche_sol.color= "black";
        touche_la.color = "white";
        touche_si.color = "black";
        touche_do2.color= "white";
        if(this.tutoComplet()){
            this.tutoEnd();
        }
        else {
            //  Colorer la note suivante
            if( this.tabNotes[this.iter].nomNote == "Do")         {  touche_do.color = "blue"; }
            else if( this.tabNotes[this.iter].nomNote == "Ré" )   { touche_re.color = "blue"; }
            else if( this.tabNotes[this.iter].nomNote == "Mi" )   { touche_mi.color = "blue"; }
            else if( this.tabNotes[this.iter].nomNote == "Fa" )   { touche_fa.color = "blue"; }
            else if( this.tabNotes[this.iter].nomNote == "Sol" )  { touche_sol.color= "blue";}
            else if( this.tabNotes[this.iter].nomNote == "La" )   { touche_la.color = "blue"; }
            else if( this.tabNotes[this.iter].nomNote == "Si" )   { touche_si.color = "blue"; }
            else if( this.tabNotes[this.iter].nomNote == "Do2" )  { touche_do2.color= "blue";}
        }
    }
    this.estValide = function(n) {

        if( n == this.tabNotes[ this.iter ].nomNote )
            return true;
        return false;
    }
    this.tutoComplet = function() {
        if( this.iter == this.nbNotes )
            return true;
        return false;
    }
    this.tutoStart = function() {
        mode=1; //  Activation Mode Tuto
        document.getElementById("btn-tuto").value="Arrêter";
        //  Colorer la premiere touche pour indiquer
        if( this.tabNotes[0].nomNote == "Do")         {  touche_do.color = "blue"; }
        else if( this.tabNotes[0].nomNote == "Ré" )   { touche_re.color = "blue"; }
        else if( this.tabNotes[0].nomNote == "Mi" )   { touche_mi.color = "blue"; }
        else if( this.tabNotes[0].nomNote == "Fa" )   { touche_fa.color = "blue"; }
        else if( this.tabNotes[0].nomNote == "Sol" )  { touche_sol.color= "blue";}
        else if( this.tabNotes[0].nomNote == "La" )   { touche_la.color = "blue"; }
        else if( this.tabNotes[0].nomNote == "Si" )   { touche_si.color = "blue"; }
        else if( this.tabNotes[0].nomNote == "Do2" )  { touche_do2.color= "blue";}
    }
    this.tutoEnd = function() {
        mode=0; //  Désactivation Mode Tuto
        document.getElementById("btn-tuto").value="Tutoriel";
        //  Réinstaliser les couleurs des touches
        touche_do.color = "black";
        touche_re.color = "white";
        touche_mi.color = "black";
        touche_fa.color = "white";
        touche_sol.color= "black";
        touche_la.color = "white";
        touche_si.color = "black";
        touche_do2.color= "white";
    }
}