//ตัวแปร variable

var a = 20
let b = 20 
const c = 30 // const คือตัวแปรแบบคงที่

{
    var d = 40 
    let e = 50
    const f = 60 

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
    console.log(f)

    a = 111 
    b = 222 
    //c = 333 Error เพราะเป็นค่าห้ามเปลี่ยน
    d = 444 
    e = 555 
  //  f = 666 Error เปลี่ยนค่าได้
}

console.log(a)
console.log(b)
console.log(c)
console.log(d)
//console.log(e) ไม่รู้จัก
//console.log(f) ไใมรู้จัก