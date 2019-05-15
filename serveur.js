let db = require("./db")
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Permet d'allez chercher la bonne donnée dans db.js
function displayResponse (userResponse) {
    for(let i=0; i < db[userResponse].length ; i++){
            console.log(i + '\t' + db[userResponse][i]['name'])
    }
}
// Pose la question de départ
function enterMenu(){
    rl.question('Que voulez-vous faire ? (type help or 1 for more information)\n> ', (answer) => {
        actionToDo(answer)
    })
}
// fonction qui affiche juste l'aide pour éviter de répeter le code 3 fois
function help(){
    console.log(
        "Voici les differentes entrées  possibles : " +
        "\n1 - help : Permet d'afficher l'aide" +
        "\n2 - todo : Affiche les tâches à faire " +
        "\n3 - inprogress : Affiche les tâches en cours " +
        "\n4 - done : Affiche les tâches terminés " +
        "\n5 - deletedone : Permet de supprimer les tâches terminées" +
        "\n6 - exit : Pour quitter le programme")
}

// Permet de choisir l'action à faire en fonction de l'entrée
function actionToDo(answer){
    switch (answer) {
        case 'help' && '1':
            help()
            enterMenu()
            break

        case 'todo' && '2':
            displayResponse('todo')
            enterMenu()
            break

        case 'inprogress' && '3':
            displayResponse('inprogress')
            enterMenu()
            break

        case 'done' && '4':
            if (db.done.length === 0){
                console.log("Vous avez aucune tâches terminée, il est temps de se mettre au travail !!")
            }
            displayResponse('done')
            enterMenu()
            break

        case 'deleteDone' && '5':

            db['done'] = ''
            if (db.done.length === 0) {
                console.log("Les tâches déjà effectuées on bien été supprimés")
            }
            enterMenu()
            break

        case 'exit' && '6':
            rl.close()
            break

        case '' :
            help()
            console.log('Vous avez choisi aucune option, veuillez en choisir une parmis celle ci-dessus')
            break

        default:
            help()
            console.log('Veuillez entrer une option valide !! (voir help ou 1) ')
            break
    }
}
enterMenu()