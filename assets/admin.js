document.addEventListener("DOMContentLoaded", function () {
    const labels = document.querySelectorAll('label[for^="pods-form-ui-pods-meta-"]');

    labels.forEach(function (label) {
        // Haal de waarde van het "for" attribuut op
        const forAttributeValue = label.getAttribute('for');

// Splits de waarde op basis van "pods-form-ui-pods-meta-"
        const parts = forAttributeValue.split('pods-form-ui-pods-meta-');
        const podVariable = parts[1].replace(/-/g, '_');

        const div = document.createElement('div');
        div.className = 'small';
        div.style.fontWeight = '200';
        div.style.fontStyle = 'italic';
        div.textContent = podVariable;

        label.insertAdjacentElement('afterend', div);
    });
});