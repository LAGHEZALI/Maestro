
//  L'objet Demo
function demoObj(tabNotes) {
    this.tabNotes   = tabNotes;
    this.nbNotes    = tabNotes.length;
    this.iter       = 0;
    this.playCurrent = function() {
       
    if( this.tabNotes[this.iter].nomNote == "Do")         {  touche_do.pressed(); }
    else if( this.tabNotes[this.iter].nomNote == "Ré" )   { touche_re.pressed(); }
    else if( this.tabNotes[this.iter].nomNote == "Mi" )   { touche_mi.pressed(); }
    else if( this.tabNotes[this.iter].nomNote == "Fa" )   { touche_fa.pressed(); }
    else if( this.tabNotes[this.iter].nomNote == "Sol" )  { touche_sol.pressed(); }
    else if( this.tabNotes[this.iter].nomNote == "La" )   { touche_la.pressed(); }
    else if( this.tabNotes[this.iter].nomNote == "Si" )   { touche_si.pressed(); }
    else if( this.tabNotes[this.iter].nomNote == "Do2" )  { touche_do2.pressed();}

    this.iter+=1;

    if(this.demoComplet()) { this.demoEnd(); }

    }
    this.demoComplet = function() {
        if( this.iter == this.nbNotes )
            return true;
        return false;
    }
    this.demoStart = function() {
        mode=2; //  Activation Mode Démo
        document.getElementById("btn-demo").value="Arrêter";
        
    }
    this.demoEnd = function() {
        mode=0; //  Désactivation Mode Demo
        document.getElementById("btn-demo").value="Démo";

        document.getElementById("mode").innerHTML="Mode : Libre";
        document.getElementById("chansonEnCours").innerHTML="";
        document.getElementById("notesChansonEnCours").innerHTML="";
    }
}