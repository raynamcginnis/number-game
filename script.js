const images = [
    {
      image_name: 'bananas.jpg',
      number_of_items: 6,
    },
    {
      image_name: 'birthday candles.jpg',
      number_of_items: 7,
    },
    // {
    //   image_name: 'blocks.jpg',
    //   number_of_items: 6,
    // },
    // {
    //   image_name: 'brushes.jpg',
    //   number_of_items: 7,
    // },
    // {
    //   image_name: 'cakes.jpg',
    //   number_of_items: 7,
    // },
    // {
    //   image_name: 'cars.jpg',
    //   number_of_items: 2,
    // },
    // {
    //   image_name: 'crayons.jpg',
    //   number_of_items: 8,
    // },
    // {
    //   image_name: 'cupcakes.jpg',
    //   number_of_items: 7,
    // },
    // {
    //   image_name: 'deer.jpg',
    //   number_of_items: 3,
    // },
    // {
    //   image_name: 'donuts.jpg',
    //   number_of_items: 6,
    // },
    // {
    //   image_name: 'ducks.jpg',
    //   number_of_items: 6,
    // },
    // {
    //   image_name: 'eggs.jpg',
    //   number_of_items: 8,
    // },
    // {
    //   image_name: 'elephants.jpg',
    //   number_of_items: 7,
    // },
    // {
    //   image_name: 'hot air balloons.jpg',
    //   number_of_items: 5,
    // },
    // {
    //   image_name: 'jelly beans.jpg',
    //   number_of_items: 9,
    // },
    // {
    //   image_name: 'macaroons.jpg',
    //   number_of_items: 7,
    // },
    // {
    //   image_name: 'pencils.jpg',
    //   number_of_items: 12,
    // },
    // {
    //   image_name: 'people.jpg',
    //   number_of_items: 6,
    // },
    // {
    //   image_name: 'peppers.jpg',
    //   number_of_items: 2,
    // },
    // {
    //   image_name: 'pizza slices.jpg',
    //   number_of_items: 8,
    // },
  ]

  const timeDelay = 4000
  let currentImageValue = 0, 
    displayNumber = 0
    score = 0
    chosen = false
  document.getElementById("time-setting").innerHTML = timeDelay / 1000
  document.getElementById('game-area').style.display = "none"
  const totalAvailableRef = document.getElementById('totalPoints').innerHTML = images.length
  document.getElementById('currentScore').innerHTML = score

generateImage = (randomNumber) => {

  const imageFileName = images[randomNumber].image_name
  const image = document.querySelector('img')
  image.src =`images/${imageFileName}` 

  const imageName = imageFileName.slice (0, imageFileName.length -4)
  document.getElementById("itemName").innerHTML = imageName
  
  const numberOfItems = images[randomNumber].number_of_items

  const number0to1 = Math.floor(Math.random() *2)

  const plusOrMinus = number0to1 === 0 ? -1 : +1

  const split = Math.floor(Math.random() *2)
  if(split === 0) {
    // add real number to screen
    document.getElementById('number').innerHTML = numberOfItems
    displayNumber = numberOfItems
  }
  else {
    // false number
    document.getElementById('number').innerHTML = `${numberOfItems + plusOrMinus}`
    displayNumber = `${numberOfItems + plusOrMinus}`
  }
  currentImageValue = numberOfItems
  images.splice(randomNumber, 1)
  console.log(images)

}
 
loop = () => {
  document.getElementById('message').innerHTML = ""
  if(images.length===0) {
    endOfGame()
    stopTimer()
    return
  }
  chosen = false
  const randomNumber = Math.floor(Math.random() * images.length)
  generateImage(randomNumber)

}
const timer = () => {
  setInterval(loop, timeDelay)
}

play = () => {
  document.getElementById("game-area").style.display = "block"
  document.getElementById("welcome").style.display="none"
  document.getElementById("play-button").style.display="none"
  loop()
  timer()
}

stopTimer = () => {
  clearInterval(timer)
}

match = () => {
if (!chosen) {  currentImageValue === displayNumber ? score++ : score --
  document.getElementById('currentScore').innerHTML = score
  chosen = true
}
}

noMatch = () => {
  if (!chosen) {
    currentImageValue !== displayNumber ? score++ : score --
    document.getElementById('currentScore').innerHTML = score
    chosen = true
  }
}

endOfGame = () => {
  document.getElementById('game-area').style.display = "none"
  document.getElementById("message").innerHTML = `Game over, your score was ${score} / ${totalAvailableRef}`
  setTimeout(() => location.reload(), 5000)
}