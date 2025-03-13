document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os itens do menu
    const menuItems = document.querySelectorAll('.iten-menu a');
    
    // Adiciona evento de clique para cada item
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Remove a classe 'ativo' de todos os itens
            menuItems.forEach(i => {
                i.parentElement.classList.remove('ativo');
            });
            
            // Adiciona a classe 'ativo' ao item clicado
            this.parentElement.classList.add('ativo');
            
            // Opcional: Salva a seleção no localStorage para persistir entre páginas
            localStorage.setItem('menuSelecionado', this.querySelector('.txt-link').innerText);
        });
    });
    
    // Verifica se há item salvo no localStorage ao carregar a página
    const itemSalvo = localStorage.getItem('menuSelecionado');
    if (itemSalvo) {
        menuItems.forEach(item => {
            if (item.querySelector('.txt-link').innerText === itemSalvo) {
                item.parentElement.classList.add('ativo');
            }
        });
    }
})