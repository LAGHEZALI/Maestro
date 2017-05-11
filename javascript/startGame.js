function startGame() {

    touche_do = new component(100, 500, "black", 100, 50, "sounds/do.wav", "Do");
    touche_re = new component(100, 500, "white", 200, 50, "sounds/re.wav", "Ré");
    touche_mi = new component(100, 500, "black", 300, 50, "sounds/mi.wav", "Mi");
    touche_fa = new component(100, 500, "white", 400, 50, "sounds/fa.wav", "Fa");
    touche_sol= new component(100, 500, "black", 500, 50, "sounds/sol.wav", "Sol");
    touche_la = new component(100, 500, "white", 600, 50, "sounds/la.wav", "La");
    touche_si = new component(100, 500, "black", 700, 50, "sounds/si.wav", "Si");
    touche_do2= new component(100, 500, "white", 800, 50, "sounds/do2.wav", "Do2");

    myGameArea.start();
}