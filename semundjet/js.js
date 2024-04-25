// Funksioni Accordion që inicializon akordionin
function Accordion() {
  // Zgjidh të gjitha elementet që kanë atributin 'data-toggle="collapse"'
  const triggers = document.querySelectorAll('[data-toggle="collapse"]');
  // Variabla për të ruajtur elementin e fundit që është aktivizuar
  let activeToggle;
  // Kontrollo nëse ka elemente për të iteruar
  triggers &&
    triggers.forEach(trigger => {
      // Vendos elementin që duhet të fshihet ose shfaqet
      trigger.collapseTarget = document.querySelector(
        trigger.hash || trigger.dataset.target
      );
      // Kontrollo nëse elementi ka një prind dhe është aktiv
      trigger.collapseTarget.dataset.parent &&
        trigger.collapseTarget.classList.contains("is-active") && (
          activeToggle = trigger);
      // Shto një event listener për ngjarjen 'click'
      trigger.addEventListener("click", event => {
        event.preventDefault(); // Parandalon veprimin parazgjedhur të browser-it
        event.stopPropagation(); // Parandalon përhapjen e ngjarjeve në elementet prind
        toggle(trigger); // Shfaq apo fshij elementin e zgjedhur
      });
      // Hiq lartësinë kur përfundon tranzicioni i hapjes
      trigger.collapseTarget.addEventListener("transitionend", ({ target }) => {
        if (!target.classList.contains("is-active")) return; // Kontrollon nëse elementi është ende aktiv

        target.style.height = null; // Hiq lartësinë
      });
    });

  // Mbyll të gjitha elementet e shkallëzueshme kur faqja ngarkohet
  triggers.forEach(trigger => {
    close(trigger);
  });

  // Funksioni për të shfaqur ose fshehur elementin e zgjedhur
  function toggle(trigger) {
    if (!trigger.collapseTarget.classList.contains("is-active")) {
      activeToggle &&
        activeToggle.collapseTarget.dataset.parent &&
        close(activeToggle);

      trigger.collapseTarget.dataset.parent && (activeToggle = trigger);

      open(trigger);
    } else {
      close(trigger);
      activeToggle = null;
    }
  }

  // Funksioni për të mbyllur elementin e zgjedhur
  function close(trigger) {
    setHeight(trigger.collapseTarget);

    trigger.parentElement.classList.remove("is-active");
    trigger.classList.remove("is-active");
    trigger.collapseTarget.classList.remove("is-active");

    setTimeout(() => {
      trigger.collapseTarget.style.height = null; // Hiq lartësinë
    }, 0);
  }
  // Funksioni për të hapur elementin e zgjedhur
  function open(trigger) {
    trigger.classList.add("is-active");
    trigger.parentElement.classList.add("is-active");

    setTimeout(() => {
      setHeight(trigger.collapseTarget);
      trigger.collapseTarget.classList.add("is-active");
    }, 0);
  }
  // Funksioni për të vendosur lartësinë e elementit
  function setHeight(target) {
    target.style.height = target.scrollHeight + "px";
  }
}
// Thirrja e funksionit për të inicializuar akordionin
Accordion();