let colors = ["#2d1850", "#5b108b", "#a454a1"]

gsap.from(".link", {opacity:0, duration:2, delay:1, stagger:.6})
gsap.from(".choco", {opacity:0, y:300, duration: 1})
gsap.from(".btn", {y:30, opacity:0, duration:3, delay:3})

gsap.to(".image", {rotation:360,x:100, duration:1, delay:.4})
gsap.to(".par1", {x:100,duration:1,delay:1.5, opacity:1})

gsap.to(".box", {x:100,duration:1.5, rotation:360,stagger:1})
gsap.to(".par2", {x:50,duration:1,delay:1.5, backgroundColor: function(i){
    return colors[i%3]
}})
gsap.from(".btn1", {x:100, opacity:0, duration:3, delay:3})

let move =153
gsap.to(".box1", {duration:1.5, delay:1.5, x: function(i){
    if (i%2 ===1) {
        return - move
    }
    else {return move}}
})

let moves=40
gsap.to(".par3", {ease:"bounce",duration:2, delay:1.5, stagger:.3, y: function(I){
    if(I%2===1) {
        return moves
    }
    else return - moves
}

})