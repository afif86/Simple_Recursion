
const form = document.querySelector('#getnumber')
form.addEventListener("submit", e => {
    e.preventDefault()
    let arr = (calculator(e.target.enterance.value))

document.querySelector('#arrelement').innerHTML = arr.map((element) => `<li>${element}</li>`).join(''); 
    

});
  
function calculator(x) {
    if (x % 5 !== 0) {
        const para = document.createElement("p");
        const node = document.createTextNode("The number you entered is not multiple of 5, please try by another number.");
      
        para.appendChild(node);
        let p = document.body.appendChild(para)
        
        p.style.cssText = 'text-align: center; margin-top: 50px; color: red;'

        return x
    }

    let arr = []
    function mod(x) {
        if (x >= 50) {
            arr.push(...Array(Math.floor(x / 50)).fill(50))
            return mod(x % 50)
      
        } else if (x >= 20) {
            arr.push(...Array(Math.floor(x / 20)).fill(20))
            return mod(x % 20)
        
        } else if (x >= 10) {
            arr.push(...Array(Math.floor(x / 10)).fill(10))
            return mod(x % 10)
      
        } else {
            arr.push(...Array(Math.floor(x / 5)).fill(5))
        }
    }
  
    if (x >= 100) {
        arr.push(...Array(Math.floor(x / 100)).fill(100))
        mod(x % 100)
      
    } else {
        mod(x)
    }
  
    return arr
}


