function openWhatsApp() {
    const phone = "5543999367925";
    const whatsappMessage = "Olá, gostaria de solicitar um orçamento para bonés personalizados.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
}

function closePopup() {
    document.querySelector('.lgpd-popup').style.display = 'none';
}

// Mostrar o popup da LGPD quando a página carregar
window.onload = function() {
    document.querySelector('.lgpd-popup').style.display = 'block';
};
