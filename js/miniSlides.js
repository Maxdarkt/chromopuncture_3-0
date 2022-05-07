var dev = 1
//----------Arret du slide en mode DEV------------------//
//Partie du code à commenter en mode Production ->
// $(".mini-slide").on("click", () => {
//     if (dev == 0) {
//         $(".mini-slide_1").show()
//         $(".mini-slide_2").hide()
//         $(".mini-slide_3").hide()
//         $(".mini-slide_4").hide()
//         $(".mini-slide_5").hide()
//         $(".mini-slide_6").hide()
//         dev++
//     } else if (dev == 1) {
//         $(".mini-slide_1").hide()
//         $(".mini-slide_2").show()
//         $(".mini-slide_3").hide()
//         $(".mini-slide_4").hide()
//         $(".mini-slide_5").hide()
//         $(".mini-slide_6").hide()
//         dev++
//     } else if (dev == 2) {
//         $(".mini-slide_1").hide()
//         $(".mini-slide_2").hide()
//         $(".mini-slide_3").show()
//         $(".mini-slide_4").hide()
//         $(".mini-slide_5").hide()
//         $(".mini-slide_6").hide()
//         dev++
//     } else if (dev == 3) {
//         $(".mini-slide_1").hide()
//         $(".mini-slide_2").hide()
//         $(".mini-slide_3").hide()
//         $(".mini-slide_4").show()
//         $(".mini-slide_5").hide()
//         $(".mini-slide_6").hide()
//         dev++
//     } else if (dev == 4) {
//         $(".mini-slide_1").hide()
//         $(".mini-slide_2").hide()
//         $(".mini-slide_3").hide()
//         $(".mini-slide_4").hide()
//         $(".mini-slide_5").show()
//         $(".mini-slide_6").hide()
//         dev++
//     } else if (dev == 5) {
//         $(".mini-slide_1").hide()
//         $(".mini-slide_2").hide()
//         $(".mini-slide_3").hide()
//         $(".mini-slide_4").hide()
//         $(".mini-slide_5").hide()
//         $(".mini-slide_6").show()
//         dev = 0
//     }
// })//<-- A commenter en mode Production
//----------FIN Arret du slide en mode DEV------------------//

//---------- Programme des mini-slide : Production --------//
$(document).ready(function () {
    //On cache toutes les autres div
    $(".mini-slide_1").show()
    $(".mini-slide_2").hide()
    $(".mini-slide_3").hide()
    $(".mini-slide_4").hide()
    $(".mini-slide_5").hide()
    $(".mini-slide_6").hide()

    var isMobile = false
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      isMobile = true
    }
    var isPaused = false
    if(!isMobile){
      //Mise en pause du slide
      $(".mini-slide").on("mouseenter", () => {
          isPaused = true
      })
      $(".mini-slide").on("mouseleave", () => {
          isPaused = false
      })
    } else {
      $(".mini-slide").on("click", () => {
        if(isPaused){
          isPaused = false
        } else {
          isPaused = true
        }
      })
    }
    //Fonction de timing pour faire tourner le slide
    var miniSlide = () => {
        let i = 0

        setInterval(() => {
            if (!isPaused) {
                if (i == 0) {
                    $(".mini-slide_1").fadeOut(0)
                    $(".mini-slide_2").fadeIn(500)
                    i++
                } else if (i == 1) {
                    $(".mini-slide_2").fadeOut(0)
                    $(".mini-slide_3").fadeIn(500)
                    i++
                } else if (i == 2) {
                    $(".mini-slide_3").fadeOut(0)
                    $(".mini-slide_4").fadeIn(500)
                    i++
                } else if (i == 3) {
                    $(".mini-slide_4").fadeOut(0)
                    $(".mini-slide_5").fadeIn(500)
                    i++
                } else if (i == 4) {
                    $(".mini-slide_5").fadeOut(0)
                    $(".mini-slide_6").fadeIn(500)
                    i++
                } else if (i == 5) {
                    $(".mini-slide_6").fadeOut(0)
                    $(".mini-slide_1").fadeIn(500)
                    i = 0
                }
            }
        }, 4000)
    }
    //Déclenchement du timer
    var removeScrollBis = true
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 130 && removeScrollBis) {
            miniSlide()
            removeScrollBis = false
        }
    }
})