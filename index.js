// Your code here
const mapToNegativize = (array) => {
  return array.map(m=> m *-1)
}

const mapToNoChange = (array) => {
  return array.map(m=> m)
}


const  mapToDouble =(array) => array.map(m => m * 2)
const  mapToSquare =(array) => array.map(m => m * m)

function reduceToTotal(array, startingPoint = 0){
  return array.reduce((a, c)=>{
    a = a + c
    return a
  }, startingPoint)
}


const reduceToAllTrue = (array) => array.reduce(()=>{return true}, false)
