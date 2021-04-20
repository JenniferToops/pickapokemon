//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value.toLowerCase()
  const url = 'https://pokeapi.co/api/v2/pokemon/'+ `${choice}/`  

  console.log(choice)
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.name)
        document.querySelector('h2').style.visibility = "visible";
        document.querySelector('section'). style.visibility = "visible";

        //pokemon name
        document.querySelector('#name').style.visibility = "visible";
        document.querySelector('#name').innerText = data.name.toUpperCase();
        
        //type
        document.querySelector('#type').innerText = data.types[0].type.name

        //ability

        document.querySelector('#ability1').innerText = data.abilities[0].ability.name
        //height
        document.querySelector('#height').innerText = data.height
        //weight
        document.querySelector('#weight').innerText = data.weight

        //moves

        document.querySelector('#moves').innerText = data.moves[0].move.name
        document.querySelector('#moves2').innerText = data.moves[1].move.name
        document.querySelector('#moves3').innerText = data.moves[2].move.name
        document.querySelector('#moves4').innerText = data.moves[3].move.name
        document.querySelector('#moves5').innerText = data.moves[4].move.name
        document.querySelector('#moves6').innerText = data.moves[6].move.name
        //images
        document.querySelector('#img1').src = data.sprites.front_default
        document.querySelector('#img2').src = data.sprites.back_default
      })
      
      .catch(err => {
          console.log(`error ${err}`)
      });
    }






