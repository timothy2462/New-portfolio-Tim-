// alert('hello world')

const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');

//function for switching btw skills experience and education
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link')
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
}


// Hambuger phone menu function
const sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right = "0" 
}

function closemenu(){
    sidemenu.style.right = "-220px" 
}

// getting form input on my google spread sheet
  const scriptURL = 'https://script.google.com/macros/s/AKfycby4zVv98t0CzhlzsVBh2Bwf7ikc0-h_dlIPx11tjc6T0Q93sMx605WzXBUNG92c-s6yjg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'Message sent sucessfully :)'
        setTimeout(function(){
            msg.innerHTML = ""
        }, 1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
