let countDate = new Date('Aug 25, 2022 00:00').getTime()

function countDown() {
  let now = new Date().getTime()
  let gap = countDate - now

  let second = 1000
  let minute = second * 60
  let hour = minute * 60
  let day = hour * 24

  let daysCount = Math.floor(gap / day)
  let hoursCount = Math.floor((gap % day) / hour)
  let minutesCount = Math.floor((gap % hour) / minute)
  let secondsCount = Math.floor((gap % minute) / second)

  document.getElementById('days').innerText = daysCount
  document.getElementById('hours').innerText = hoursCount
  document.getElementById('minutes').innerText = minutesCount
  document.getElementById('seconds').innerText = secondsCount
}

setInterval(function () {
  countDown()
}, 1000)

const open = document.getElementById('open')

const modal_container = document.getElementById('modal_container')

const close = document.getElementById('close')

open.addEventListener('click', () => {
  modal_container.classList.add('show')
})

close.addEventListener('click', () => {
  modal_container.classList.remove('show')
})
