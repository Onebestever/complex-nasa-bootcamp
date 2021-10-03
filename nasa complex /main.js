  fetch(`https://data.nasa.gov/resource/gvk9-iz74.json`) 
  
  //the value of this variable is now being attached to the link      //this link doesnt change because allof the memes are stord in this array // note* if this was outside input wpuld be blank b/v it would load as the page loads
   .then(res => res.json())                                      //whatever you put in the input is now that
   .then(data => {
     console.log(data[1].facility)
     console.log(data[1].state)
     console.log(data[1].city)
     console.log(data[1].country)
     console.log(data[1].location.longitude)
     console.log(data[1].location.latitude)

      for(let i = 0; i < data.length; i++){
        let row = document.createElement('tr')
        let weatherCell = document.createElement('td')

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${data[i].location.latitude}&lon=${data[i].location.longitude}&appid=putKey`

        fetch(url)
        .then(res => res.json())
        .then(data2 => {
          let weather = data2.weather[0].description
          console.log(weather)
          weatherCell.innerText = weather
          row.appendChild(weatherCell)
          })
          
          .catch(err =>{console.log(`error $(err)`)}
          )

          let facility = data[i].center
          let city = data[i].city
          let state = data[i].state
          let facilityCell = document.createElement('td')
          let cityCell = document.createElement('td')
          let stateCell = document.createElement('td')
            facilityCell.innerText = facility
            stateCell.innerText = state
            cityCell.innerText = city
             row.appendChild(facilityCell)
             row.appendChild(cityCell)
             row.appendChild(stateCell)
             document.querySelector('tbody').appendChild(row)
      }



    
   })
  
