// ==========================================
// MISTER REFRIGERAÇÃO - FUNÇÕES DO SITE
// ==========================================

const NUMERO_WHATSAPP = "5562994568502";
const MARCAS_NAO_ATENDIDAS = ["GE", "CONTINENTAL", "MABE"];

// ==========================================
// GOOGLE ADS / GOOGLE TAG MANAGER
// ==========================================
function gtag_report_conversion(url) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: "clique_whatsapp",
        link_url: url
    });

    if (url) {
        setTimeout(function () {
            window.open(url, "_blank", "noopener,noreferrer");
        }, 300);
    }
    return false;
}

// ==========================================
// ABRIR WHATSAPP COM SERVIÇO ESPECÍFICO
// ==========================================
function abrirWhats(servico) {
    const mensagem = "Olá! Vim pelo site da Mister Refrigeração.\n\n" +
                     "📌 Serviço: " + servico + "\n\n" +
