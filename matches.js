// write js code here corresponding to matches.html
var data = JSON.parse(localStorage.getItem("schedule"));

for (var i = 0; i < data.length; i++) {
  var obj = data[i];

  var tableBody = document.getElementById("tbody");
  var currentRow = document.createElement("tr");
  var machNumber = document.createElement("td");
  var teamA = document.createElement("td");
  var teamB = document.createElement("td");
  var date = document.createElement("td");
  var venue = document.createElement("td");
  var favourites = document.createElement("td");

  venue.textContent = obj.venue
  machNumber.textContent = obj.matchNumber
  teamA.textContent = obj.teamA
  teamB.textContent = obj.teamB
  date.textContent = obj.date
  favourites.textContent = 'Add as Favourites'
  favourites.style.color = 'green'
  favourites.style.cursor = 'pointer'
  favourites.addEventListener('click', (el)=>{

   var Fav = el.target.parentNode
   var cells = Fav.getElementsByTagName('td')
   var newFav = {}
    newFav.number = cells[0].innerText
    newFav.teamA = cells[1].innerText
    newFav.teamB = cells[2].innerText
    newFav.Date = cells[3].innerText
    newFav.venue = cells[4].innerText
   
   if(localStorage.getItem("favourites")){ 
    var favorites = JSON.parse(localStorage.getItem("favourites"))
}else{
    var favorites = []
}

favorites.push(newFav)
localStorage.setItem('favourites', JSON.stringify(favorites))

})

  currentRow.append(machNumber,teamA,teamB,date,venue,favourites)
  tableBody.append(currentRow)


  
}
