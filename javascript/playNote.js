//  Jouer son d'une note avec silence
function playNote(nomNote,silence) {

    if( nomNote == "Do")        { touche_do.pressed(); }
    else if(nomNote == "Ré" )   { touche_re.pressed(); }
    else if(nomNote == "Mi" )   { touche_mi.pressed(); }
    else if(nomNote == "Fa" )   { touche_fa.pressed(); }
    else if(nomNote == "Sol" )  { touche_sol.pressed();}
    else if(nomNote == "La" )   { touche_la.pressed(); }
    else if(nomNote == "Si" )   { touche_si.pressed(); }
    else if(nomNote == "Do2" )  { touche_do2.pressed();}
}