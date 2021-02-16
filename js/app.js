const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim,{
    deleteSpeed: 50
})
.typeString('Dehesdin Shad')
.pauseFor(300)
.typeString(', Etudiant ')
.pauseFor(300)
.deleteChars(9)
.pauseFor(50)
.typeString('<span style= "color: green"> Projet WEB</span> !')
.pause(1000)
.start()