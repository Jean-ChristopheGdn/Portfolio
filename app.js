 // Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDV5aiXeI6RJSoPs0zVuOF_qnPMK5ACsBk",
    authDomain: "portfolio-38f49.firebaseapp.com",
    projectId: "portfolio-38f49",
    storageBucket: "portfolio-38f49.appspot.com",
    messagingSenderId: "517335848222",
    appId: "1:517335848222:web:85b9d42be2151887eba50f"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// Variable accès base de données collection

const db = firestore.collection("Contacts")

// Get submit

let submitBtn = document.querySelector('.button-sub');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let lastname= document.getElementById('nom').value;
    let firstname = document.getElementById('prenom').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('txt').value;

    db.doc().set({
        nom: lastname,
        prenom: firstname,
        email: email,
        message: message
    }).then( () => {
        console.log('Data saved')
        alert('Votre message a été envoyé avec succès !')
    }).catch((error) => {
        console.log(error)
    })

})

const btnMenu = document.querySelector('.btn-rond-menu');
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click', () => {
    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')
})

if(window.matchMedia('(max-width: 1300px)')) {
    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active');
        })       
    });
}

// Animation écriture

const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
})

typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString('Je suis Jean-Christophe Gendron')
.pauseFor(300)
.typeString(',<br /> <strong>Développeur Fullstack</strong> :)')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color: #e24a23;"> HTML</span><span style="color: #6699c9;">/CSS</span>')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color: #7377ad;">PHP</span>')
.pauseFor(1000)
.deleteChars(3)
.typeString('<span style="color: #5ed3f3;">React</span>')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #cfb430;">Javascript</span>')
.start()

// Animation Contact

const input_field = document.querySelectorAll('input');

for(let i = 0; i < input_field.length; i++) {
    let field = input_field[i];
    field.addEventListener('input', (e) => {
        if(e.target.value !== '') {
            e.target.parentNode.classList.add('animation')
        } else if (e.target.value =='') {
            e.target.parentNode.classList.remove('animation')
        }
    })
}

// Animation  accueil GSAP + ScrollMagic

const navbar = document.querySelector('.nav-gauche');
const titre = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-acc');
const btnMedias = document.querySelectorAll('.media');
const btnRondAccueil = document.querySelector('.btn-rond');
const TL1 = gsap.timeline({paused: true});

TL1
.to(navbar, {left: '0px', ease: Power3.easeOut, duration: 0.6})
// .from(titre, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4})
// .staggerFrom(btn, 1, {opacity: 0}, 0.2, '-=0.30')                                /*Stagger pour les tableaux*/ 
.staggerFrom(btnMedias , 1, {opacity: 0}, 0.2, '-=0.75')
.from(btnRondAccueil, {y: -50, opacity: 0, ease: Power3.easeOut, duration:0.4}, '-=1')                                
window.addEventListener('load', () => {
    TL1.play();
} )

//Animation ScrollMagic Gsap présentation

const presentationContainer = document.querySelector('.presentation');
const titrePres = document.querySelector('.titre-pres');
const presGauche = document.querySelector('.pres-gauche');
const listePres = document.querySelectorAll('.item-liste')

const TLpres = new TimelineMax();

TLpres
.from(titrePres, {y: -200, opacity: 0, duration: 0.6})
.from(presGauche, {y: -20, opacity: 0, duration: 0.6}, '-=0.5')
.staggerFrom(listePres, 1, {opacity: 0}, 0.2, '-=0.5')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(TLpres)
// .addIndicators()
.addTo(controller)

// Animation Portfolio

// 1ere rangée portfolio 

const containerPorfolio = document.querySelector('.portfolio');
const titrePortfolio = document.querySelector('.titre-port');
const itemPortfolio = document.querySelectorAll('.vague1');

const TLPortfolio = new TimelineMax();

TLPortfolio
.from(titrePortfolio, {y: -50, opacity: 0, duration: 0.5})
.staggerFrom(itemPortfolio, 1, {opacity: 0}, 0.2, '-=0.5')

const scene2 = new ScrollMagic.Scene({
    triggerElement: containerPorfolio,
    triggerHook: 0.5,
    reverse: false
})
.setTween(TLPortfolio)
// .addIndicators()
.addTo(controller)

// deuxième rangée de projets (vague 2)

const itemPortfolio2 = document.querySelectorAll('.vague2');

const TLPortfolio2 = new TimelineMax();

TLPortfolio2
.staggerFrom(itemPortfolio2, 1, {opacity: 0}, 0.2, '-=0.5')

const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio,
    triggerHook: 0.2,
    reverse: false
})
.setTween(TLPortfolio2)
// .addIndicators()
.addTo(controller)

// 3eme rangée portfolio 

const itemPortfolio3 = document.querySelectorAll('.vague3');

const TLPortfolio3 = new TimelineMax();

TLPortfolio3
.staggerFrom(itemPortfolio3, 1, {opacity: 0}, 0.2, '-=0.5')

const scene4 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio2,
    triggerHook: 0.2,
    reverse: false
})
.setTween(TLPortfolio3)
// .addIndicators()
.addTo(controller)


// Animation Compétences 

const sectionComp = document.querySelector('.section-range');
const titreComp = document.querySelector('.titre-exp');
const allLabel = document.querySelectorAll('.label-skill');
const allPourcent = document.querySelectorAll('.number-skill');
const allBarres = document.querySelectorAll('.barre-skill');
const allShadowBarres = document.querySelectorAll('.barre-grise');

const TLCompetences = new TimelineMax();

TLCompetences
.from(titreComp, {opacity: 0, duration: 0.6})
.staggerFrom(allLabel, 0.5, {y: -50, opacity: 0}, 0.1, '-=0.5')
.staggerFrom(allPourcent, 0.5, {y: -10, opacity: 0}, 0.1, '-=1')
.staggerFrom(allShadowBarres, 0.5, {y: -10, opacity: 0}, 0.1, '-=1')
.staggerFrom(allBarres, 0.5, {y: -10, opacity: 0}, 0.1, '-=1')

const scene5 = new ScrollMagic.Scene({
    triggerElement: sectionComp,
    reverse: false
})
.setTween(TLCompetences)
.addTo(controller)

