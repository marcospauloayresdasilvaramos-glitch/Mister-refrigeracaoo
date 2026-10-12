// ==========================================
// MISTER REFRIGERAÇÃO - FUNÇÕES DO SITE
// ==========================================

const NUMERO_WHATSAPP = "5562994568502";

// ==========================================
// GOOGLE ADS - RASTREAMENTO DE CONVERSÃO
// ==========================================
function gtag_report_conversion(url) {
    var callback = function () {
        if (typeof(url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-18509489616/oCimCPWU5podENDLgfpE',
        'event_callback': callback
    });
    return false;
}

// ==========================================
// ABRIR WHATSAPP COM SERVIÇO ESPECÍFICO
// ==========================================
function abrirWhats(servico) {
    const mensagem = `Olá! Vim pelo site da Mister Refrigeração.%0A%0A` +
                     `📌 Serviço: ${servico}%0A%0A` +
                     `Gostaria de um orçamento e mais informações.`;

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`;
    gtag_report_conversion(url);
}

// ==========================================
// ENVIAR DIAGNÓSTICO COMPLETO VIA WHATSAPP
// ==========================================
function enviarDiagnostico() {
    const equipamento = document.getElementById("equipamento").value;
    const marca = document.getElementById("marca").value;
    const problema = document.getElementById("problema").value;
    const tempo = document.getElementById("tempo").value;

    if (equipamento === "" || marca === "" || problema === "") {
        alert("⚠️ Por favor, preencha os campos: Equipamento, Marca e Problema.");
        return;
    }

    let mensagem = `Olá! Vim pelo site da Mister Refrigeração.%0A%0A` +
                   `🔹 Equipamento: ${equipamento}%0A` +
                   `🔹 Marca: ${marca}%0A` +
                   `🔹 Problema: ${problema}%0A`;

    if (tempo && tempo !== "") {
        mensagem += `🔹 Quando começou: ${tempo}%0A`;
    }

    mensagem += `%0A📅 Gostaria de agendar uma visita técnica.`;

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`;
    gtag_report_conversion(url);
}

// ==========================================
// WHATSAPP COM MENSAGEM PERSONALIZADA
// ==========================================
function falarWhatsApp(mensagemPersonalizada) {
    let mensagem = mensagemPersonalizada || 
                   `Olá! Vim pelo site da Mister Refrigeração e gostaria de um orçamento.`;
    
    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
    gtag_report_conversion(url);
}

// ==========================================
// VOLTAR AO TOPO
// ==========================================
function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// EVENTOS AO CARREGAR A PÁGINA
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Site Mister Refrigeração carregado com sucesso!');

    const formBox = document.querySelector('.form-box');
    if (formBox) {
        formBox.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                enviarDiagnostico();
            }
        });
    }
});