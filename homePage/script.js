// Vendosim një event listener për të kapur kur përdoruesi vendos kurset mbi një kuti
document.addEventListener('DOMContentLoaded', function () {
    var serviceBoxes = document.querySelectorAll('.service-box');

    serviceBoxes.forEach(function (box) {
        box.addEventListener('mouseover', function () {
            // Ndryshojmë ngjyrën e titullit të kutisë kur përdoruesi vendos kurset mbi të
            box.querySelector('h3').style.color = '#007bff';
        });

        box.addEventListener('mouseout', function () {
            // Kthejmë ngjyrën origjinale të titullit të kutisë kur përdoruesi hiqet nga kutia
            box.querySelector('h3').style.color = '#333';
        });
    });
});
