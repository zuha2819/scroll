// class Human {
//     constructor(data) {
//         // // console.info(data)
//         // this.hi = 1
//         // console.info(this)

//         this.name = data.name
//         this.gender = data.gender
//     }



// }

// oop = obyektga yo'naltirilgan dasturlash

// const human = new Human('salom dunyo!')  /* new yangi egzemplyar class yasidi */
// const human1 = new Human('salom oylik!')  /* new yangi egzemplyar class yasidi */
// const human2 = new Human('salom quyosh!')  /* new yangi egzemplyar class yasidi */

// function HUMAN() {

// }

// const h = new HUMAN()


// class Human {
//     constructor(data) {
//         this.name = data.name
//         this.gender = data.gender

//     }
// }

// class Women extends Human {
//     constructor(data) {
//         super(data)
//         this.gender = 'female'
//     }
// }

// class Men extends Human{
//     constructor(data) {
//         super(data)
//         this.gender = 'Man'
//     }
// }

// class Child extends Women {
//     constructor(data) {
//         super(data)
//         this.mother = data.mother
//         this.gender = data .gender
//         this.child = `mening onam ${this.mother} va mening ismim ${this.name} va men ${this.gender}man.`
//     }
// }

// const human = new Human({
//     name: 'Sardor',
//     gender: 'Man'
// })

// const women = new Women({
//     name: 'Madina'
// })

// const men = new Men({
//     name: 'Ali'
// })

// const child = new Child({
//     name: 'ivan',
//     gender: 'Men',
//     mother: 'marfusha'
// })


class ElementQuery {
    constructor(data) {
        if(typeof data.el === 'string') 
            this.el = document.querySelector(data.el)
        else if(data.el instanceof HTMLElement)
            this.el = data.el
    }
}

class Scroll extends ElementQuery {
    constructor(data) {
        super(data)
        this.top = data.top
        this.unit = data.unit

        this.el.style.top = this.scroll()

        this.el.style.position = 'fixed'

    }

    scroll() {
        const int = this.scrollUnit()
        // console.log(pageYOffset);
        // console.log(this.el.clientHeight);
        const geo = int - pageYOffset
        window.onscroll = () => this.scroll()
        window.onresize = () => this.scroll()
        if(geo > 0) this.el.style.top = `${geo}px`
        else this.el.style.top = 0




    }

    scrollUnit() {
        if(this.unit === 'px') return this.top >= 0 ? this.top : 0
        else if(this.unit === '%' || !this.unit) 
            return this.calc(innerHeight, this.top) - this.el.clientHeight

    }

    calc(height, top) {
        return  height / 100 * top 
        // height = 100%
        // top = ?
    }
}

const scroll = new Scroll({
    el: '.header__nav',
    top: 100,
    unit: '%'
})


class Hover extends ElementQuery {
    constructor(data) {
        super(data)
        this.el.onmouseover = () => this.move()
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    move() {
        this.el.style.marginLeft = this.random(0, innerWidth - this.el.clientWidth) + 'px'
        this.el.style.marginTop = this.random(0, innerHeight - this.el.clientHeight) + 'px'  
        this.el.style.color = `rgb(${this.random(0, 255)},${this.random(0, 255)},${this.random(0, 255)})`
        this.el.style.background = `rgb(${this.random(0, 255)},${this.random(0, 255)},${this.random(0, 255)})`
        this.el.style.transition = '90ms'
    }
}

const hover = new Hover({
    el: '.header__content'
})

class My {
    static random = (min, max) => Math.floor(Math.random() * (max + 1 - min) +min)
}

