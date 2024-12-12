// Fonction pour ouvrir la Sidebar
function openNav() {
  const sidebar = document.getElementById("mySidebar");
  const mainContent = document.getElementById("main");

  // Afficher la Sidebar avec la largeur souhaitée
  sidebar.style.width = "250px";
  mainContent.style.marginLeft = "250px";
}

// Fonction pour fermer la Sidebar
function closeNav() {
  const sidebar = document.getElementById("mySidebar");
  const mainContent = document.getElementById("main");

  // Fermer la Sidebar
  sidebar.style.width = "0";
  mainContent.style.marginLeft = "0";
}

// Écouter les événements de redimensionnement de la fenêtre
window.addEventListener("resize", function() {
  // Si l'écran est plus large que 768px, on force la Sidebar fermée
  if (window.innerWidth > 768) {
    closeNav();
  }
});

// Fonction utilitaire pour gérer l'état responsive
function handleResponsive() {
  if (window.innerWidth > 768) {
    // S'assurer que la Sidebar est fermée en mode bureau
    closeNav();
  }
}

// Appel initial pour s'assurer que l'état est bien en mode bureau après un rechargement
handleResponsive();
