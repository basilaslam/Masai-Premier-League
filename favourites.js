// write js code here corresponding to matches.html
var data = JSON.parse(localStorage.getItem("favourites"));

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
  machNumber.textContent = obj.number
  teamA.textContent = obj.teamA
  teamB.textContent = obj.teamB
  date.textContent = obj.date
  favourites.textContent = 'Delete'
  favourites.style.color = 'red'
  favourites.style.cursor = 'pointer'
  favourites.addEventListener('click', (el)=>{


   var row = el.target.parentNode
   var cell = row.getElementsByTagName('td');
   el.target.parentNode.remove()
   var favorites = JSON.parse(localStorage.getItem("favourites"))
   var fav2 = []
  
   for(let i = 0; i < favorites.length;i++){
    if(cell[0].textContent != favorites[i].number){
        fav2.push(favorites[i])
      
    }
    localStorage.setItem('favourites', JSON.stringify(fav2))

}
})

  currentRow.append(machNumber,teamA,teamB,date,venue,favourites)
  tableBody.append(currentRow)


  
}
