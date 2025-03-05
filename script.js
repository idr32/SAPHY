// Aufgaben-Datenbank
const tasks = {
    Mechanische_Energie: {
        1: [
            {
                task: '<iframe src="H5P_Aufgaben/MechanischeEnergie_A1_l.html" title="Externe Inhalte" id="h5p_Aufgabe"></iframe>',
            },
            {
                task: '<iframe src="H5P_Aufgaben/MechanischeEnergie_A4a_l.html" title="Externe Inhalte" id="h5p_Aufgabe"></iframe>'
            }
          
        ],
        2: [
            {
                task: '<iframe src="H5P_Aufgaben/MechanischeEnergie_A3_m.html" title="Externe Inhalte" id="h5p_Aufgabe"></iframe>',
            },
            {
                task: '<iframe src="H5P_Aufgaben/MechanischeEnergie_A4b_m.html" title="Externe Inhalte" id="h5p_Aufgabe"></iframe>'
            }
        ],
        3: [
            {
                task: "Ein Körper rollt einen Hang mit 30° Neigung herunter. Berechne die Energie am Fuß des Hangs.",
            }
        ]
        
    },
    Elektrische_Energie: {
        1: [
            {
                task: '<iframe src="H5P_Aufgaben/ElektrischeEnergie_A1_l.html" title="Externe Inhalte" id="h5p_Aufgabe"></iframe>',
            },
            {
                task: '<iframe src="H5P_Aufgaben/ElektrischeEnergie_A3_l.html" title="Externe Inhalte" id="h5p_Aufgabe"></iframe>'
            }
        ],
        2: [
            {
                task: "2",
            }
        ],
        3: [
            {
                task: "3",
            }
        ]
    }
};


let completedTasks = {}; // Objekt zur Speicherung bearbeiteter Aufgaben

function generateTask() {
    const topic = document.getElementById("topic").value;
    const difficulty = document.getElementById("difficulty").value;
    const taskContainer = document.getElementById("taskContainer");




    if (!tasks[topic] || !tasks[topic][difficulty]) {
        taskContainer.innerHTML = `<p>Keine Aufgabe für das gewählte Thema und die Schwierigkeitsstufe gefunden.</p>`;
        return;
    }

    const availableTasks = tasks[topic][difficulty]
        .map((_, index) => index)
        .filter(index => !completedTasks[topic]?.[difficulty]?.includes(index));

    if (availableTasks.length === 0) {
        taskContainer.innerHTML = `<p>Alle Aufgaben für dieses Thema und diese Schwierigkeitsstufe wurden bearbeitet.</p>`;
        return;
    }

    const randomIndex = availableTasks[Math.floor(Math.random() * availableTasks.length)];
    const { task, correctAnswers } = tasks[topic][difficulty][randomIndex];

    currentCorrectAnswers = correctAnswers; // Speichere die aktuellen korrekten Antworten
    completedTasks[topic] = completedTasks[topic] || {};
    completedTasks[topic][difficulty] = completedTasks[topic][difficulty] || [];
    completedTasks[topic][difficulty].push(randomIndex);

    
    
    console.log(availableTasks);

    taskContainer.innerHTML = `
        <h2>${task}</h2>
        
    `;
}


