const arrow = document.querySelectorAll('.list_arrow');
const drop = document.querySelectorAll('.list_panel');
// console.log(drop);



const finder = (e,i,arrow) => {
    e.addEventListener('click', ()=>{
        const fn = (a,j) => {
            if(i == j) {
                if(a.classList.contains('activation') == false){
                    a.classList.add('activation');
                } else if(a.classList.contains('activation') == true){
                    a.classList.remove('activation');
                }
            }
        }
        drop.forEach(fn)
         
    })

}
arrow.forEach(finder);

class Panel {
    constructor(dropki,name,pick, calc,mat,color,tag){
        this.dropki = dropki;
        this.name = name;
        this.pick = pick;
        this.mat = mat;
        this.color = color;
        this.tag = tag;
        this.calc = [];
    }

    setPick() {
        const drop = document.querySelectorAll('.list_arrow');
        const pickName = document.querySelectorAll('.list_label');
        const fn = (e,i,drop) => {
            e.addEventListener('click', ()=>{
                this.pick = i;
                this.name = pickName[this.pick].innerText
            });
        }
        drop.forEach(fn)
    }

    setName(){
        const dropki = document.querySelectorAll('.list_panel li');
        const pickName = document.querySelectorAll('.list_label');
        const leftPanelName = document.querySelectorAll('.title');
        const leftPanelColor = document.querySelectorAll('.color');
        const leftPanelMat = document.querySelectorAll('.pattern');
        const chairImage = document.querySelector('.chair-image');

        const fn = (e) => {
            e.addEventListener('click', ()=>{
                this.dropki = e.innerText;
                if(this.pick == 0){
                    this.name = pickName[this.pick].innerText = `${this.dropki}`;
                    leftPanelName[0].innerText = `${this.dropki}`;
                    if(leftPanelName[0].innerText == "Clair"){
                        leftPanelName[1].innerText = 150;
                    }  else{
                        leftPanelName[1].innerText = 120;
                    }
                    if(this.calc.includes(150) == true){
                        let index = this.calc.indexOf(150);
                        this.calc.splice(index);
                    } else if(this.calc.includes(120)==true){
                        let index1 = this.calc.indexOf(120);
                        this.calc.splice(index1)
                    }
                    this.tag = parseInt(leftPanelName[1].innerText);
                    this.calc.push(this.tag);
                } else if(this.pick == 1){
                    this.name = pickName[this.pick].innerText = `${this.dropki}`;
                    leftPanelColor[0].innerText = `${this.dropki}`;
                    leftPanelColor[1].innerText = `0`;  
                    this.calc.push(parseInt(leftPanelColor[1].innerText));
                    if(this.dropki == "Czarny"){
                        chairImage.src = "images/black_chair.png"
                        chairImage.style.marginLeft = "0";
                    } else {
                        chairImage.src = "images/red_chair.png"
                    }
                } else if(this.pick == 2){
                    this.name = pickName[this.pick].innerText = `${this.dropki}`;
                    leftPanelMat[0].innerText = `${this.dropki}`;
                    if(leftPanelMat[0].innerText == "Tkanina"){
                        leftPanelMat[1].innerText = 50;
                    }  else{
                        leftPanelMat[1].innerText = 100;
                    }
                    if(this.calc.includes(50)==true){
                        let index = this.calc.indexOf(50)
                        this.calc.splice(index);
                    }else if(this.calc.includes(100)==true){
                        let index = this.calc.indexOf(100)
                        this.calc.splice(index);
                    }
                    this.calc.push(parseInt(leftPanelMat[1].innerText));
                }
                this.calculator()
            });
        }
        dropki.forEach(fn)
    }
    calculator (){
        const sum = document.querySelector('.sum')
        const fn = (a,b) => {
            
           return a + b
        }
        let result = this.calc.reduce(fn);
        sum.innerText = `${result}`
        
    }
    transport(){
        const transport = document.querySelector('#transport');
        const transportIndex = document.querySelectorAll('.transport');
        let count = 0;
        console.log(transportIndex[1])
        transport.addEventListener('click', ()=>{
            count++
            if(count%2 == 0){
                transportIndex[1].innerText = 0;
            }else if(count%2 !== 0){
                transportIndex[1].innerText = 40
                transportIndex[0].innerText = "Transport"
            }
            if(this.calc.includes(40)==true){
                let index = this.calc.indexOf(40)
                this.calc.splice(index);
            }
            this.calc.push(parseInt(transportIndex[1].innerText));
            this.calculator();
        });
    }

}

let panel = new Panel();
panel.setPick();
panel.setName();
panel.transport();

