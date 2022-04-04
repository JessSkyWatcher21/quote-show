/* Data to Show*/
const data = [
  {
   quote: `'The big lesson in life, baby, is never be scared of anyone or anything.' -Frank Sinatra`, 
   emoji: '🎙', 
   image: `url(assets/FR.jpg)`
  }, 
  {
   quote: `'If this is just the beginning, my life's gonna be beautiful.'-Dean Martin`, 
   emoji:  '🎤', 
   image: `url(assets/DM.jpg)`
  },  
  {
   quote: `'Dispite everything, I have few regrets. I have crammed a lot of living into my time.' -Peter Lawford`, 
   emoji:  '🎬' , 
   image: `url(assets/PL.jpg)`
  },
  {
    quote: `'I love Chicago. I got on a bus and asked the driver, "Do you go to the Loop?" He said, "No, I go beep beep!' -Joey Bishop`, 
    emoji: '🎭', 
    image: `url(assets/JB.jpg)`
  },
  
  {
    quote: `'There will never be another Frank Sinatra. I never wanted to be another Frank Sinatra. I only wanted to be another Michael Buble.' -Michael Buble`, 
    emoji: '🎸', 
    image: `url(assets/MB.jpg)`
  },  
  
    {
    quote: `'If you smile through your fear and sorrow, smile and maybe tomorrow you'll see the sun come shining through for you.' -Nat King Cole`, 
    emoji: '🎹', 
    image: `url(assets/NKC.jpg)`
  },
  
  {
  quote:"'You have to be able to look back at your life and say, Yeah, that was fun.' -Sammy Davis Jr.",
  emoji:"🥂",
  image:'url(/assets/SDJ.jpg)'
  }
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector('blockquote');
// emoji
const emoji = document.querySelector('p');
// background
const bgImage = document.querySelector('body');

// Check-Check: change text
quote.innerHTML = "'You have to be able to look back at your life and say, Yeah, that was fun.' -Sammy Davis Jr." 
// Check-Check: change emoji text
emoji.innerHTML = "🥂";
// Check-Check: background image
bgImage.style.backgroundImage= 'url(/assets/SDJ.jpg)';

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
*/
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  
});
  
// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randButton.addEventListener('click', function() {
  
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor ( Math.random() * data.length );
  
  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  
});

// listen for keypress next
document.addEventListener('keyup', function(){
  
  // Next Right Arrow  
  if ( event.keyCode === 39 ) {
   
   // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
    
  }
  
  // Prev Left Arrow
  if ( event.keyCode === 37 ) {
  
   // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  }
  
  // Random Spacebar
  if ( event.keyCode === 32) {
    
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor ( Math.random() * data.length );

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;
  
  }
  
});