var uBlockUXP = {
    init: function() {
      // Inicjalizacja rozszerzenia
      window.addEventListener("load", this.onLoad.bind(this), false);
    },
  
    onLoad: function() {
      // Kod wykonywany po załadowaniu przeglądarki
    },
  
    onButtonClick: function(event) {
      // Obsługa kliknięcia przycisku
      alert("Button clicked!");
    }
  };
  
  // Uruchomienie rozszerzenia
  MyExtension.init();