document.addEventListener("DOMContentLoaded", function () {
    let postfix = "meta";
    let labels = document.querySelectorAll('label[for^="pods-form-ui-pods-' + postfix + '-"]');

    if (labels.length === 0) {
        postfix = "field";
        labels = document.querySelectorAll('label[for^="pods-form-ui-pods-' + postfix + '-"]');
    }

    labels.forEach(function (label) {
        const forAttributeValue = label.getAttribute('for');

        const parts = forAttributeValue.split('pods-form-ui-pods-'+ postfix +'-');
        const podVariable = parts[1].replace(/-/g, '_');

        const div = document.createElement('div');
        div.className = 'small';
        div.style.fontWeight = '200';
        div.style.fontStyle = 'italic';
        div.textContent = podVariable;

        label.insertAdjacentElement('afterend', div);
    });
});