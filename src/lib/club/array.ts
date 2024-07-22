function FalseArray(){
  let a:boolean[] = []
  for (let i = 0; i < 35; i++) {
    a.push(false)
  }
  return a
}
function TrueArray(){
  let a:boolean[] = []
  for (let i = 0; i < 35; i++) {
    a.push(true)
  }
  return a
}

export const falseArray = FalseArray()
export const trueArray = TrueArray()
