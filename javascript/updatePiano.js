//  MAJ du piano en cas d'evenment
function updatePiano() {

     x+=1;
     document.getElementById("test").innerHTML=x;
     if(x==10){
         x=0;
         // Si on est dans le mode demo
         if(mode==2)
            maDemo.playCurrent();

     }
       

    //  Si quelqun tape une touche au clavier physique
    if (myGameArea.keys && myGameArea.keys[90]) { touche_do.pressed() }
        else{ touche_do.released() }
    if (myGameArea.keys && myGameArea.keys[69]) { touche_re.pressed() }
        else{ touche_re.released() }
    if (myGameArea.keys && myGameArea.keys[82]) { touche_mi.pressed() }
        else{ touche_mi.released() }
    if (myGameArea.keys && myGameArea.keys[84]) { touche_fa.pressed() }
        else{ touche_fa.released() }
    if (myGameArea.keys && myGameArea.keys[89]) { touche_sol.pressed() }
        else{ touche_sol.released() }
    if (myGameArea.keys && myGameArea.keys[85]) { touche_la.pressed() }
        else{ touche_la.released() }
    if (myGameArea.keys && myGameArea.keys[73]) { touche_si.pressed() }
        else{ touche_si.released() }
    if (myGameArea.keys && myGameArea.keys[79]) { touche_do2.pressed() }
        else{ touche_do2.released() }

    // si quelqun clique ou touche le clavier du piano virtuel
    if (myGameArea.x && myGameArea.y) {
        if (touche_do.clicked()) { touche_do.pressed(); }
        if (touche_re.clicked()) { touche_re.pressed(); }
        if (touche_mi.clicked()) { touche_mi.pressed(); }
        if (touche_fa.clicked()) { touche_fa.pressed(); }
        if (touche_sol.clicked()) { touche_sol.pressed(); }
        if (touche_la.clicked()) { touche_la.pressed(); }
        if (touche_si.clicked()) { touche_si.pressed(); }
        if (touche_do2.clicked()) { touche_do2.pressed(); }
    }
}