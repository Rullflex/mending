import 'lazysizes'
import UIkit from 'uikit'
import { App, Quiz, Form } from '../../modules/scripts/_core'


document.addEventListener(`DOMContentLoaded`, function () {
    const app = new App()
    app.init()

    document.querySelectorAll(`a[href="tel:+380932111826"]`).forEach(el => {
        el.addEventListener('click', () => ym(72785254,'reachGoal','call'))
    })

    // FORM
    const form = new Form(() => {
        UIkit.modal(`#thanks`).show()
        ym(72785254,'reachGoal','form')
    })
    form.init('form:not([class="quiz__final-form"])')
    

    document.querySelector(`.header__drop-btn`).addEventListener('click', () => UIkit.dropdown(`.header__drop`).hide(0))



    const quiz = new Quiz({
        selector: `#quiz`
    })
    quiz.create()
    
    document.querySelectorAll(`.quiz__input`).forEach( (elem, idx) => {
        elem.addEventListener('focus', () =>  elem.closest(`.quiz__input-wrap`).classList.add('focused'))
        elem.addEventListener('focusout', () => {
            elem.closest(`.quiz__input-wrap`).classList.remove('focused')
            if (elem.value != '') {
                elem.closest(`.quiz__input-wrap`).classList.add('notnull')
            } else {
                elem.closest(`.quiz__input-wrap`).classList.remove('notnull')
            }
        })
    })


    if (window.innerWidth < app.md) {
        UIkit.slider(`.s9__team-wrap`, {
            autoplay: true
        })
    } else if (window.innerWidth >= app.md && window.innerWidth < app.lg) {
        UIkit.slider(`.s9__team-wrap`, {
            autoplay: false,
            sets: true,
            center: true
        })
    } else if (window.innerWidth >= app.lg) {

    }
    if (window.innerWidth < app.md) {
       

        UIkit.slideshow(`.s5__slideshow`, {
            autoplay: false,
            draggable: true,
            ratio: false
        })

        UIkit.slider(`.s11__slider`, {
            autoplay: false
        })
    }
    else {

        UIkit.slideshow(`.s5__slideshow`, {
            autoplay: false,
            animation: 'push',
            draggable: false,
            ratio: false
        })
        document.querySelectorAll(`.s5__slideshow-navitem`).forEach( (elem, idx, parent) => {
            
            elem.addEventListener(`click`, (event) => {
                event.preventDefault()
                document.querySelector(`.s5__slideshow-navitem.active`).classList.remove(`active`)
                event.currentTarget.classList.add(`active`)
                document.querySelectorAll(`.s5__slideshow-navitem`).forEach( (elem, idx) => {
                    if (elem.classList.contains(`active`)) {
                        UIkit.slideshow(`.s5__slideshow`).show(idx)
                    }
                })
    
            })
        })
    }
    if (window.innerWidth < app.lg) {
        
    } else {
        
    }


    UIkit.scrollspy(`.s11__map`)
    document.querySelector(`.s11__map`).addEventListener(`inview`, (event) => {
        document.querySelector(`.s11__map-script`).insertAdjacentHTML(`beforeend`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1542.5067930807736!2d32.06801302015278!3d49.44337410905408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b7c811c873d%3A0x6052c6a008731945!2z0YPQuy4g0KHQvNC10LvRj9C90YHQutCw0Y8sIDE1LCDQp9C10YDQutCw0YHRgdGLLCDQp9C10YDQutCw0YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDQuNC90LAsIDE4MDAx!5e0!3m2!1sru!2sru!4v1612765520263!5m2!1sru!2sru" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`)
    })


    UIkit.scrollspy(`#v-about`)
    document.querySelector(`#v-about`).addEventListener(`inview`, (event) => {
        document.querySelector(`#v-about .popup__body`).insertAdjacentHTML(`beforeend`, `<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/lpGr5OuS4mg" frameborder="0" allowfullscreen="true" data-uk-video data-uk-responsive"></iframe>`)
    })
    

})
