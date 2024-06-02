document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#lista-produtos li a');
    const products = document.querySelectorAll('.novo_produto_box');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            document.querySelectorAll('#lista-produtos li').forEach(li => {
                li.classList.remove('ativo');
            });

            this.parentElement.classList.add('ativo');

            const category = this.getAttribute('data-category');

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

    document.querySelector('[data-category="todos"]').click()
});