function drawPiano() {

    //  Dessiner les touches
    touche_do.create(); 
    touche_re.create(); 
    touche_mi.create(); 
    touche_fa.create(); 
    touche_sol.create();
    touche_la.create(); 
    touche_si.create(); 
    touche_do2.create(); 
}

//  Ecrire les noms dans note dans le canvas
function writeNotesNames() {

    ctx = myGameArea.context;
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "White";
    ctx.fillText("Do"   , 130, 585); 
    ctx.fillText("Ré"   , 230, 585); 
    ctx.fillText("Mi"   , 330, 585); 
    ctx.fillText("Fa"   , 430, 585); 
    ctx.fillText("Sol"  , 530, 585); 
    ctx.fillText("La"   , 630, 585); 
    ctx.fillText("Si"   , 730, 585); 
    ctx.fillText("Do"   , 830, 585); 
}
