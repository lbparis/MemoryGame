document.addEventListener('DOMContentLoaded', () => {
  
    const cardArray = [
      {
        name: 'blueHat',
        img: 'images/bluehat.jpg'
      },
      {
        name: 'bowtie',
        img: 'images/bowtie.jpg'
      },
      {
        name: 'bunny',
        img: 'images/bunny.jpg'
      },
      {
        name: 'pinkhat',
        img: 'images/pinkhat.jpg'
      },
      {
        name: 'redhat',
        img: 'images/redhat.jpg'
      },
      {
        name: 'tongue',
        img: 'images/tongue.jpg'
      },
      {
        name: 'blueHat',
        img: 'images/bluehat.jpg'
      },
      {
        name: 'bowtie',
        img: 'images/bowtie.jpg'
      },
      {
        name: 'bunny',
        img: 'images/bunny.jpg'
      },
      {
        name: 'pinkhat',
        img: 'images/pinkhat.jpg'
      },
      {
        name: 'redhat',
        img: 'images/redhat.jpg'
      },
      {
        name: 'tongue',
        img: 'images/tongue.jpg'
      }
      
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  

    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/question.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/question.png')
        cards[optionTwoId].setAttribute('src', 'images/question.png')
        alert('click a different image')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert("You have a match! Keep going.")
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/question.png')
        cards[optionTwoId].setAttribute('src', 'images/question.png')
        alert('Not a match! Try Again.')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
        
      }
    }

    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
