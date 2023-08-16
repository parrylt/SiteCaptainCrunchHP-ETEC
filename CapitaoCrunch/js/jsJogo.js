let audio00 = new Audio('audios/0.wav');
let audio01 = new Audio('audios/1.wav');
let audio02 = new Audio('audios/2.wav');
let audio03 = new Audio('audios/3.wav');
let audio04 = new Audio('audios/4.wav');
let audio05 = new Audio('audios/5.wav');
let audio06 = new Audio('audios/6.wav');
let audio07 = new Audio('audios/7.wav');
let audio08 = new Audio('audios/8.wav');
let audio09 = new Audio('audios/9.wav');
let audioA = new Audio('audios/DTMFA.wav');
let audioB = new Audio('audios/DTMFB.wav');
let audioC = new Audio('audios/DTMFC.wav');
let audioD = new Audio('audios/DTMFD.wav');
let audioHash = new Audio('audios/hash.wav');
let audioAST = new Audio('audios/star.wav');


function toca0 (){
      audio00.play();
}
function toca1 (){
      audio01.play();
}
function toca2 (){
      audio02.play();
}
function toca3 (){
      audio03.play();
}
function toca4 (){
      audio04.play();
}
function toca5 (){
      audio05.play();
}
function toca6 (){
      audio06.play();
}
function toca7 (){
      audio07.play();
}
function toca8 (){
      audio08.play();
}
function toca9 (){
      audio09.play();
}
function tocaA (){
      audioA.play();
}
function tocaB (){
      audioB.play();
}
function tocaC (){
      audioC.play();
}
function tocaD (){
      audioD.play();
}
function tocaHash (){
      audioHash.play();
}
function tocaAST (){
      audioAST.play();
}

const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');
const botaoA = document.getElementById('botaoA');
const botao4 = document.getElementById('botao4');
const botao5 = document.getElementById('botao5');
const botao6 = document.getElementById('botao6');
const botaoB = document.getElementById('botaoB');
const botao7 = document.getElementById('botao7');
const botao8 = document.getElementById('botao8');
const botao9 = document.getElementById('botao9');
const botaoC = document.getElementById('botaoC');
const botaoSTAR = document.getElementById('botao*');
const botao0 = document.getElementById('botao0');
const botaoHASH = document.getElementById('botao#');
const botaoD = document.getElementById('botaoD');


botao1.addEventListener('click', function() {
      discagem('1');
    });

botao2.addEventListener('click', function() {
      discagem('2');
    });
botao3.addEventListener('click', function() {
      discagem('3');
    });
botaoA.addEventListener('click', function() {
      discagem('A');
    });
botao4.addEventListener('click', function() {
      discagem('4');
    });
botao5.addEventListener('click', function() {
      discagem('5');
    });
botao6.addEventListener('click', function() {
      discagem('6');
    });
botaoB.addEventListener('click', function() {
      discagem('B');
    });
botao7.addEventListener('click', function() {
      discagem('7');
    });
botao8.addEventListener('click', function() {
      discagem('8');
    });
botao9.addEventListener('click', function() {
      discagem('9');
    });
botaoC.addEventListener('click', function() {
      discagem('C');
    });
botaoSTAR.addEventListener('click', function() {
      discagem('*');
    });
botao0.addEventListener('click', function() {
      discagem('0');
    });
botaoHASH.addEventListener('click', function() {
      discagem('#');
    });
botaoD.addEventListener('click', function() {
      discagem('D');
    });


    const agendaTelefonica = [
      {
      numero: '7A7A',
      imagem: 'imagens/papa.png'
      },
      {
      numero: 'A667777335556666',
      imagem: 'imagens/anselmo.png'
      },
      {
      numero: '4447777777A33555',
      imagem: 'imagens/israel.png'
          },
      {
      numero: '777666D7774444666',
      imagem: 'imagens/rodrigo.png'
      },];


      let discador = '';

      function discagem(digit) 
      {
            discador += digit;
            quemliga();
      }
          
          function quemliga() {
            for (let i = 0; i < agendaTelefonica.length; i++) {
              const { numero , imagem } = agendaTelefonica[i];
              if (discador === numero) {
                const DivImagem = document.getElementById('DivImagem');
                DivImagem.classList.add('fade-in');
                DivImagem.innerHTML = `<img src="${imagem}">`;
                DivImagem.style.display = 'block';
                setTimeout(function() {
                  DivImagem.classList.remove('fade-in');
                  DivImagem.classList.add('fade-out');
                  setTimeout(function() {
                  DivImagem.style.display = 'none';
                  DivImagem.classList.remove('fade-out');
                  dialedNumber = '';
                  location.reload()
            }, 500);
                }, 5000);
                
                return;
              }
            }
          }