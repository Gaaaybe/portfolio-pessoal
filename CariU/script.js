document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#lista-produtos li a');
    const products = document.querySelectorAll('.novo_produto_box');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove 'ativo' class from all <li> elements
            document.querySelectorAll('#lista-produtos li').forEach(li => {
                li.classList.remove('ativo');
            });

            // Add 'ativo' class to the clicked <li> element
            this.parentElement.classList.add('ativo');

            // Get the category from the clicked link
            const category = this.getAttribute('data-category');

            // Show/hide products based on the category
            products.forEach(product => {
                if (category === 'todos') {
                    product.style.display = 'flex';
                } else {
                    if (product.getAttribute('data-category') === category) {
                        product.style.display = 'flex';
                    } else {
                        product.style.display = 'none';
                    }
                }
            });
        });
    });

    // Initially show all products
    document.querySelector('[data-category="todos"]').click()
});