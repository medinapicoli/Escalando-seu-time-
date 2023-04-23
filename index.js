function addPlayer(){
    const positionPlayer = document.getElementById('position').value
    const namePlayer = document.getElementById('nome').value
    const numberPlayer = document.getElementById('numero').value

    const confirmation = confirm("Escalar \n" + "Nome: "+ namePlayer + "\nPosição: " + positionPlayer + "\nNúmero da camisa: " + numberPlayer )

    if(confirmation) {
        const teamList = document.getElementById('teamList')
        const playerLi = document.createElement('li')
        playerLi.id = 'player-' + numberPlayer
        playerLi.innerText = positionPlayer + ": " + namePlayer + " - camisa " + numberPlayer
        teamList.appendChild(playerLi)

        document.getElementById('position').value = ''
        document.getElementById('nome').value = ''
        document.getElementById('numero').value = ''
    }
}

function removePlayer(){
    const numberPlayer = document.getElementById('removePlayer').value
    const removeToNamber = document.getElementById('player-' + numberPlayer)

    const confirmation = confirm(
        "Tem certeza que deseja excluir o jogador " + removeToNamber.innerText)

        if(confirmation){
            // ou podemos remover diretamente o elemento, sem precisar ir no elemento pai
            // removeToNamber.remove()
            teamList = document.getElementById('teamList').removeChild(removeToNamber)
            document.getElementById('removePlayer').value = ''
        }  
}