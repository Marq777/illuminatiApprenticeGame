/*
Frame 6 (eye closed): https://drive.google.com/file/d/1PvNAM4QIpj3bFN8dw2sZ6tCO3-LRhV43/view?usp=sharing
Frame 5: https://drive.google.com/file/d/1ex6FSuyQ9G5tV2ouiqs-HkV3EtbO21p5/view?usp=sharing
Frame 4: https://drive.google.com/file/d/1Yx7J7jFtfRTY3c3xqkItZf8MnXaEsYKr/view?usp=sharing
Frame 3: https://drive.google.com/file/d/1DiiP6MOMaOXE6cfpchLfmIQm04-fWb8i/view?usp=sharing
Frame 2: https://drive.google.com/file/d/1cpLhrtHEBQQwvKxrsA0Is47kM-EXa6XP/view?usp=sharing
Frame 1 (eye open): https://drive.google.com/file/d/1o4b_89tZmKP-hxUVwnkQzeS2yt4d0O6N/view?usp=sharing

Export 6: 'https://drive.google.com/uc?export=view&id=1PvNAM4QIpj3bFN8dw2sZ6tCO3-LRhV43'
Export 5: 'https://drive.google.com/uc?export=view&id=1ex6FSuyQ9G5tV2ouiqs-HkV3EtbO21p5'
Export 4: 'https://drive.google.com/uc?export=view&id=1Yx7J7jFtfRTY3c3xqkItZf8MnXaEsYKr'
Export 3: 'https://drive.google.com/uc?export=view&id=1DiiP6MOMaOXE6cfpchLfmIQm04-fWb8i'
Export 2: 'https://drive.google.com/uc?export=view&id=1cpLhrtHEBQQwvKxrsA0Is47kM-EXa6XP'
Export 1: 'https://drive.google.com/uc?export=view&id=1o4b_89tZmKP-hxUVwnkQzeS2yt4d0O6N'
*/

// Images asset
const pyramidImages = {
    1:'https://drive.google.com/uc?export=view&id=1PvNAM4QIpj3bFN8dw2sZ6tCO3-LRhV43', // Export 6
    2:'https://drive.google.com/uc?export=view&id=1ex6FSuyQ9G5tV2ouiqs-HkV3EtbO21p5', // Export 5
    3:'https://drive.google.com/uc?export=view&id=1Yx7J7jFtfRTY3c3xqkItZf8MnXaEsYKr', // 4
    4:'https://drive.google.com/uc?export=view&id=1DiiP6MOMaOXE6cfpchLfmIQm04-fWb8i', // 3
    5:'https://drive.google.com/uc?export=view&id=1cpLhrtHEBQQwvKxrsA0Is47kM-EXa6XP', // 2
    6:'https://drive.google.com/uc?export=view&id=1o4b_89tZmKP-hxUVwnkQzeS2yt4d0O6N', // 1
}


// Global variable to control the scrolling behavior
const step = 30; // For each 30px, change an image
function trackScrollPosition() {
  const y = window.scrollY;
  const label = Math.min(Math.floor(y/30) + 1, 20);
  const imageToUse = pyramidImages[label];
  // Change the background image
  $('.pyramidContainer').css('background-image', `url('${imageToUse}')`);}$(document).ready(()=>{
  $(window).scroll(()=>{
    trackScrollPosition();
  })
})