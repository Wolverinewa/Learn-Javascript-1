
// Menu Mobile

document.getElementById("hamburguer-icon").onclick = function () {

  document.getElementById("sliding-header-menu-outer").style.right = "0";

};

document.getElementById("sliding-header-menu-close-button").onclick = function () {

  document.getElementById("sliding-header-menu-outer").style.right = "-320px";

};


// About us Tab

var aboutUs = {
  "Missão": "Prestar serviços da Proteção Social Básica e/ou Proteção Social Especial de Média Complexidade prioritariamente à crianças, adolescentes e famílias em situação de risco e/ou vulnerabilidade social, no município de Campinas e/ou outros municípios do Estado de São Paulo, através de programas e projetos específicos que atendam total ou parcialmente suas necessidades.",
  "Visão": "Ser reconhecida pela comunidade como uma organização parceira, inovadora e criativa, que oferece sempre as melhores formas de assitência social.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";

var about_tags = document.getElementsByClassName("single-tab");

for (var a = 0; a < about_tags.length; a++) {

  about_tags[a].onclick = function () {

    for (var b = 0; b < about_tags.length; b++) {
      about_tags[b].style['background-color'] = unselected_color;
      about_tags[b].style['font-weight'] = "normal";
    }

    this.style['background-color'] = selected_color;
    this.style['font-weight'] = "bold";

    var selecionado = this.innerHTML;

    document.getElementById("box-text").innerHTML = aboutUs[selecionado];

  };

  


}



// Slider de serviços

var our_services = [
  {
    'title': 'SESF Norte, Sul e Sudoeste',
    'text': 'Serviço de Proteção e Atendimento Especializado a Famílias e Indivíduos.'
  },

  {
    'title': 'SCFV Guaraçaí e Santana',
    'text': 'Serviço de Convivência e Fortalecimento de Vínculos.'
  },

  {
    'title': 'Liberdade Assistida LA',
    'text': 'Serviço de Proteção Social a Adolescentes em Cumprimento de Medida Socioeducativa.'
  }

];

// service-previous
// service-next
// service-title
// service-text

var servico_atual = 0;

document.getElementById("service-previous").onclick = function() {

  if (servico_atual == 0) {
    var servico_anterior = our_services.length - 1;
  } else {
    var servico_anterior = servico_atual - 1;
  }

  document.getElementById("service-title").innerHTML = our_services[servico_anterior].title;
  document.getElementById("service-text").innerHTML = our_services[servico_anterior].text;
  servico_atual = servico_anterior;

};

document.getElementById("service-next").onclick = function() {

  if (servico_atual == our_services.length - 1) {
    var servico_seguinte = 0;
  } else {
    var servico_seguinte = servico_atual + 1;
  }

  document.getElementById("service-title").innerHTML = our_services[servico_seguinte].title;
  document.getElementById("service-text").innerHTML = our_services[servico_seguinte].text;
  servico_atual = servico_seguinte;


};

// Data Footer

var ano_atual = new Date;
ano_atual = ano_atual.getFullYear();
document.getElementById("current_year").innerHTML = ano_atual;


// API Key Google: AIzaSyBMD-clZ1JUApCv7BN6JH3b6RN2hd62hz8

  
   


   