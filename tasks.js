// task1

function raceResults(...arr){
    const [first,second,third,...rest] = arr
    return {first,second,third,rest}
}
// console.log(raceResults(1,2,3,4,5,6,7))

const raceResults2 = (...arr) => {[first,second,third,...rest]=arr
return {first,second,third,rest}
}
// console.log(raceResults2('Tom', 'Margaret', 'Allison', 'David', 'Pierre'))

function createAnimal(species,verb,noise){

    function bark(){
        console.log(noise)
    }
    function bleet(){
        console.log(noise)
    }
}

const d=createAnimal("sheep", "bleet", "BAAAAaaaa")
d.bark()