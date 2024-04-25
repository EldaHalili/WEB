// Vendos një event handler për ngjarjen e skrollit të dritares
window.onscroll = function() {
    scrollFunction()
};

// Kur përdoruesi klikon në buton, bëj skroll lart në fillimin e dokumentit
function topFunction() {
    // Vendos pozicionin e skrollit të dokumentit dhe dritares së dokumentit në 0 për të shkuar në fillim
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
