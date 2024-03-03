// VARIAVEIS DOM
const buttons = document.querySelectorAll(".forma");
const text_area = document.querySelector('#text-input');
const select_font = document.querySelector('.select_font');
const select_size = document.querySelector('.select_size');
const foreColor = document.querySelector('.colorone');
const hiliteColor = document.querySelector('.colorsec');

// LISTA DE FONTES
let fonts = [
    'Arial',
    'Verdana',
    'Times New Roman',
    'Garamond',
    'Georgia',
    'Courier New',
    'Cursive'
];

inicializer();

// FUNÇÃO PARA INSERIR FONTES E TAMANHOS
function inicializer() {
    fonts.forEach((font) => {
        let create_option = document.createElement('option');
        create_option.setAttribute('value', font);
        create_option.innerText = font;
        select_font.appendChild(create_option);
    });

    for (let i = 1; i <= 7; i++) {
        let create_option = document.createElement('option');
        create_option.setAttribute('value', i);
        create_option.innerText = i;
        select_size.appendChild(create_option);
    }
};

// FUNÇÃO PARA MODIFICAR O TEXTO ~ document.execCommand(command, defaltUI, value); -> FAZ COM QUE O ITEM SELECIONADO OU O PROXIMO A SER DIGITADO MODE CONFORME O COMANDO
const modifyText = (command, defaltUI, value) => {
    text_area.focus();
    document.execCommand(command, defaltUI, value);
};

//PARA CADA BOTÃO, ATRAVES DO ID, QUE É O MESMO DOS COMANDOS, O MODYFYTEXT ALTERA DE ACORDO COM O COMANDO
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        modifyText(button.id, false, null);
    });
})

// CADA VEZ QUE MUDAR A FONTE, OS CARACTERES SELECIONADOS MUDARÃO DE FONTE
select_font.addEventListener('change', () => {
    modifyText(select_font.id, false, select_font.value);
});

// CADA VEZ QUE MUDAR A FONTE, OS CARACTERES SELECIONADOS MUDARÃO DE TAMANHO
select_size.addEventListener('change', () => {
    modifyText(select_size.id, false, Number(select_size.value));
});

// CADA VEZ QUE MUDAR A COR, OS CARACTERES SELECIONADOS MUDARÃO A COR DA FONTE
foreColor.addEventListener("change", () => {
    modifyText(foreColor.id, false, foreColor.value);
});

// CADA VEZ QUE MUDAR A COR, OS CARACTERES SELECIONADOS MUDARÃO A COR DE FUNDO
hiliteColor.addEventListener("change", () => {
    modifyText(hiliteColor.id, false, hiliteColor.value);
});
