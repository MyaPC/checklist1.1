// Función para validar que todos los grupos de radio estén completos
function validateRadioCompletion() {
    const form = document.getElementById('checklistForm');
    const radios = form.querySelectorAll('input[type="radio"]');
    let allComplete = true;

    radios.forEach((radio) => {
        const groupName = radio.name;
        const groupRadios = form.querySelectorAll(`input[type="radio"][name="${groupName}"]`);
        let anyChecked = false;

        groupRadios.forEach((r) => {
            if (r.checked) {
                anyChecked = true;
            }
        });

        if (!anyChecked) {
            allComplete = false;
            // Cambia el color de fondo de la fila del grupo no completo para destacarlo visualmente
            radio.closest('tr').style.backgroundColor = '#ffecec';
        }
    });

    return allComplete;
}

// Función para calcular el % de cumplimiento
function calculateCompliance() {
    const form = document.getElementById('checklistForm');
    const radios = form.querySelectorAll('input[type="radio"]');
    let naCount = 0;
    let complianceScore = 0;

    // Validar que todos los grupos de radio estén completos antes de calcular el % de cumplimiento
    const allComplete = validateRadioCompletion();

    if (!allComplete) {
        alert('Por favor complete todos los campos antes de calcular el % de cumplimiento.');
        return;
    }

    radios.forEach((radio) => {
        if (radio.checked) {
            if (radio.value === 'NA') {
                naCount++;
            } else if (radio.value === 'C') {
                complianceScore++;
            } else if (radio.value === 'CP') {
                complianceScore += 0.5;
            }
        }
    });

    const totalQuestions = radios.length / 4; // Cada pregunta tiene 4 opciones (NA, C, CP, NC)
    const totalValidQuestions = totalQuestions - naCount;
    const percentage = (complianceScore / totalValidQuestions) * 100;

    const compliancePercentage = document.getElementById('compliancePercentage');
    compliancePercentage.textContent = percentage.toFixed(2) + '%';
}