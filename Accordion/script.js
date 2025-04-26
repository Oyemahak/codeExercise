var accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(function(header) {
    header.addEventListener('click', function() {
        var content = header.nextElementSibling;
        
        // Toggle visibility
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }

        // Optionally, close other sections when one is opened
        var allContents = document.querySelectorAll('.accordion-content');
        allContents.forEach(function(item) {
            if (item !== content) {
                item.style.display = 'none';
            }
        });
    });
});