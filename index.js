// Your code here
const mapToNegativize = (array) => {
  return array.map(m=> m *-1)
}

const mapToNoChange = (array) => {
  return array.map(m=> m)
}


const  mapToDouble =(array) => array.map(m => m * 2)
const  mapToSquare =(array) => array.map(m => m * m)

// mapToSquare(sourceArray)

const reduceToTotal = (array, startingPoint) => array.reduce((a, c)=>{
  a = a + c
  return a
}, startingPoint)
