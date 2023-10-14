import './style.css'

const checkRadio = document.querySelector(".apropos_text_parcours_title")
const experience_radio = document.querySelector("#experience_radio")
const formation_radio = document.querySelector("#formation_radio")
const certificat_radio = document.querySelector("#certificat_radio")
const color_radio1 = document.querySelector("#color_radio1")
const color_radio2 = document.querySelector("#color_radio2")
const color_radio3 = document.querySelector("#color_radio3")


const experience = document.querySelector("#experience")
const formation = document.querySelector("#formation")
const certification = document.querySelector("#certification")

formation.style.display = "none"
certification.style.display = "none"
color_radio1.style.color = '#fe5000'
//color_radio1.style.borderBottom = '4px solid red';


checkRadio.addEventListener('click', ()=>{
    if (formation_radio.checked) {
        formation.style.display = "block"
        certification.style.display = "none"
        experience.style.display = "none"
        color_radio2.style.color = '#fe5000'
        color_radio1.style.color = ''
        color_radio3.style.color = ''
        //color_radio2.style.transform = 'scale(1.5)';
        //color_radio1.style.transform = '';
        //color_radio3.style.transform = '';
    }
    else if (experience_radio.checked) {
        formation.style.display = "none"
        certification.style.display = "none"
        experience.style.display = "block"
        color_radio1.style.color = '#fe5000'
        color_radio2.style.color = ''
        color_radio3.style.color = ''
    }
    else if (certificat_radio.checked) {
        formation.style.display = "none"
        certification.style.display = "grid"
        experience.style.display = "none"
        color_radio3.style.color = '#fe5000'
        color_radio1.style.color = ''
        color_radio2.style.color = ''
    }
})

const certification_item = document.querySelectorAll('.certification_item')
const apropos_text_presentation = document.querySelector('.apropos_text_presentation')
const toggle =document.querySelector("#toggle")
toggle.style.display = "none"
const certificat_title = document.querySelector('.apropos_title')
const diplome_master = document.querySelector("#diplome_master")
const certi_ds = document.querySelector("#certi_ds")
const open1 = document.querySelector("#open1")
const open2 = document.querySelector("#open2")
const ds1 = document.querySelector("#ds1")
const ds2 = document.querySelector("#ds2")
for (let item of certification_item) {
    if (item.id == "diplome_master") {
        item.addEventListener('click', ()=>{
            //item.style.transform ='scale(4)'
            item.classList.add('certification_zoom')
            apropos_text_presentation.style.display ="none"
            checkRadio.style.display ="none"
            certi_ds.style.display ="none"
            open1.style.display ="none"
            open2.style.display ="none"
            ds1.style.display ="none"
            ds2.style.display ="none"
            certificat_title.innerHTML ='<h2> Diplôme master mathématiques </h2>'
            toggle.style.display = "block"
            toggle.addEventListener('click', ()=>{
                toggle.style.display = "none"
                item.classList.remove('certification_zoom')
                apropos_text_presentation.style.display ="block"
                checkRadio.style.display =""
                certi_ds.style.display =""
                open1.style.display =""
                open2.style.display =""
                ds1.style.display =""
                ds2.style.display =""
                certificat_title.innerHTML ='<h2> À propos </h2>'
            })
        })  
    }
    else if (item.id == "certi_ds") {
        item.addEventListener('click', ()=>{
            //item.style.transform ='scale(4)'
            item.classList.add('certification_zoom')
            apropos_text_presentation.style.display ="none"
            checkRadio.style.display ="none"
            open1.style.display ="none"
            open2.style.display ="none"
            ds1.style.display ="none"
            ds2.style.display ="none"
            diplome_master.style.display ="none"
            certificat_title.innerHTML ='<h2> Certificat Data Science </h2>'
            goBack(item)
        })  
    }
    else if (item.id == "open1") {
        item.addEventListener('click', ()=>{
            //item.style.transform ='scale(4)'
            item.classList.add('certification_zoom')
            apropos_text_presentation.style.display ="none"
            checkRadio.style.display ="none"
            certi_ds.style.display ="none"
            open2.style.display ="none"
            ds1.style.display ="none"
            ds2.style.display ="none"
            diplome_master.style.display ="none"
            certificat_title.innerHTML ='<h2> Certificat JavaScript </h2>'
            goBack(item)
        })  
    }
    else if (item.id == "open2") {
        item.addEventListener('click', ()=>{
            //item.style.transform ='scale(4)'
            item.classList.add('certification_zoom')
            apropos_text_presentation.style.display ="none"
            checkRadio.style.display ="none"
            certi_ds.style.display ="none"
            open1.style.display ="none"
            ds1.style.display ="none"
            ds2.style.display ="none"
            diplome_master.style.display ="none"
            certificat_title.innerHTML ='<h2>Certificat PHP & MySQL</h2>'
            goBack(item)
        })  
    }
    else if (item.id == "ds1") {
        item.addEventListener('click', ()=>{
            //item.style.transform ='scale(4)'
            item.classList.add('certification_zoom')
            apropos_text_presentation.style.display ="none"
            checkRadio.style.display ="none"
            certi_ds.style.display ="none"
            open1.style.display ="none"
            open2.style.display ="none"
            ds2.style.display ="none"
            diplome_master.style.display ="none"
            certificat_title.innerHTML ='<h2> Certificat Web Scraping avec python </h2>'
            goBack(item)
        })  
    }
    else if (item.id == "ds2") {
        item.addEventListener('click', ()=>{
            //item.style.transform ='scale(4)'
            item.classList.add('certification_zoom')
            apropos_text_presentation.style.display ="none"
            checkRadio.style.display ="none"
            certi_ds.style.display ="none"
            open1.style.display ="none"
            open2.style.display ="none"
            ds1.style.display ="none"
            diplome_master.style.display ="none"
            certificat_title.innerHTML ='<h2>Certificat Scikit learn</h2>'
            goBack(item)
        })  
    }    
}


function goBack(item) {
    toggle.style.display = "block"
    toggle.addEventListener('click', ()=>{
        toggle.style.display = "none"
        item.classList.remove('certification_zoom')
        apropos_text_presentation.style.display ="block"
        checkRadio.style.display =""
        certi_ds.style.display =""
        open1.style.display =""
        open2.style.display =""
        ds1.style.display =""
        ds2.style.display =""
        diplome_master.style.display =""
        certificat_title.innerHTML ='<h2> À propos </h2>'
    })
}


/*const canvas = document.getElementById('charts');
const ctx = canvas.getContext('2d');


const data = {
    labels: ['Python', 'Java Script', 'PHP', 'SQL', 'HTML', 'CSS', 'Machine Learning', 'Deep Learning', 'Linux'],
    datasets: [{
        label: 'Compétences',
        data: [4, 4, 4, 4, 5, 5, 5, 4, 4],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        pointBackgroundColor: [
            '#1ba098'//'rgba(255, 99, 132, 1)',
        ],
        borderColor: [
            '#fe5000'//'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 2

    }]
};

const myChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
        scales: {
            
            r: {
                angleLines: {
                    color: '#081521' //couleur des traits reliant les points
                  },
                  grid: {
                    color: '#081521', //couleur des toiles
                  },
                pointLabels: { 
                    color: '#001233', //couleur des labels
                    font: {
                        size: 13, // Taille de la police en pixels
                      }
                  },
                beginAtZero: true,
                max: 5,
                ticks: {
                      display: false, //ignore l'affichage des échelles (barèmes)
                    },
            }
        },
        plugins: {
            legend: {
                display: false // Cacher la légende
            },
            tooltip: {
                enabled: false // Désactiver les tooltips
            }
        }
    }
});*/



const projetItem = document.querySelectorAll(".projet_item");
const nextBouton = document.querySelectorAll(".next_bout");
const prevBouton = document.querySelectorAll(".prev_bout");
let currentIndex = 0; // Index de l'élément actuellement affiché
// Fonction pour afficher l'élément correspondant à l'index donné

function afficherElement(index) {
    projetItem.forEach((item, i) => {
        if (i === index) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
}

// Afficher le premier élément au chargement de la page
afficherElement(currentIndex);

// Gérer le clic sur le bouton "Next Project"
nextBouton.forEach((next) => {
    next.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projetItem.length;
        afficherElement(currentIndex);
    });
});

prevBouton.forEach((next) => {
    next.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projetItem.length) % projetItem.length;
        afficherElement(currentIndex);
    });
});


const fermer = document.querySelector('.fermer')
const ouvrir = document.querySelector('.ouvrir')
const accueil = document.querySelector('.the_menu')
//const body =document.querySelector('body')
const liens = document.querySelectorAll('.the_menu a')

ouvrir.addEventListener('click', () =>{
    ouvrir.style.display ="none"
    fermer.style.display ="block"
    fermer.style.zIndex = 2;
    accueil.style.transform = "translateX(0)"
    accueil.style.transition = "transform 1s";
})

fermer.addEventListener('click', () =>{
    ouvrir.style.display ="block"
    fermer.style.display ="none"
    accueil.style.transform = "translateX(-100%)"
})


liens.forEach((link) => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            accueil.style.transform = "translateX(-100%)";
            ouvrir.style.display = "block";
            fermer.style.display = "none";
            accueil.style.transform = 'translate 0.1s';
        }
    });
});

let tl = gsap.timeline();


tl.from('.welcome', {
    duration: 1.25,
    filter: "blur(15px)"
});

tl.from('.the_menu','.presentation_text', {
    duration: 0.75,
    opacity: 0
}); 


tl.from('.fermer_ouvrir', {
    duration: 0.75,
    x : '-130%'
});

/*tl.from('.presentation_text', {
    duration: 0.75,
    //opacity: 0
    x : '-120%'
});*/

















