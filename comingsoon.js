let comingDate = new Date('Jan 1, 2023 00:00:00')


var arr=["#4285F4","#FBBC05","#EA4335","#34A853"]

let d = document.getElementById('days')
let h = document.getElementById('hours')
let m = document.getElementById('minutes')
let s = document.getElementById('seconds')

let col=0;



let x = setInterval(function() {
  let now = new Date()
  let selisih = comingDate.getTime() - now.getTime()

  let days    = Math.floor(selisih / (1000 * 60 * 60 * 24))
  let hours   = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  let minutes = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60))
  let seconds = Math.floor(selisih % (1000 * 60) / 1000)

  d.innerHTML = getTrueNumber(days)
  h.innerHTML = getTrueNumber(hours)
  m.innerHTML = getTrueNumber(minutes)
  s.innerHTML = getTrueNumber(seconds)

  d.style.color=arr[(col)%4];
  h.style.color=arr[(col+1)%4];
  m.style.color=arr[(col+2)%4];
  s.style.color=arr[(col+3)%4];
//   console.log("next---------------------")
//   console.log(col%4)
//   console.log((col+1)%4)
//   console.log((col+2)%4)
//   console.log((col+3)%4)
  
  col++;


  if (selisih < 0) {
    clearInterval(x)
    d.innerHTML = '00'
    h.innerHTML = '00'
    m.innerHTML = '00'
    s.innerHTML = '00'
  }
}, 1000)

function getTrueNumber(x) {
  if (x < 10) return '0' + x
  else return x
}