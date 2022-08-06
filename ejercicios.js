
pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
//pangram('kaco')

function pangram(letter) {
    
    //const abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    letter = letter.toLowerCase()

    let cambio = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }
   console.log(cambio(letter))

    return letter
   }

  
   //console.log(pangram())