// write js code here corresponding to index.html
// You should add submit event on the form
var form = document.getElementById('masaiForm')

document.getElementById('submitBtn').addEventListener('click', (el)=>{
    
    el.preventDefault();
    var newMatch = {}
    if(localStorage.getItem("schedule")){
        var oldMatches = JSON.parse(localStorage.getItem("schedule"))
    }else{
        var oldMatches = []
    }
    
    newMatch.matchNumber = form.matchNum.value
    newMatch.teamA = form.teamA.value
    newMatch.teamB = form.teamB.value
    newMatch.date = form.date.value
    newMatch.venue = form.venue.value
    oldMatches.push(newMatch)
    localStorage.setItem('schedule', JSON.stringify(oldMatches))
    location.reload();
})