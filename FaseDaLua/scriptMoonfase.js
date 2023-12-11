 
 const luaNova = document.querySelector("#LuaNova");
 const LuaCrescente = document.querySelector("#LuaCrescente")
 const LuaCheia = document.querySelector("#LuaCheia")
 const LuaMinguante = document.querySelector("#LuaMinguante")
 // Função para calcular a fase da lua com base no ciclo lunar
 function calcularFaseLua() {
    const agora = new Date();
    const cicloLunar = 29.53058867; // Média do ciclo lunar em dias
    const diasDesdeNovaLua = Math.floor((agora - new Date()) / (1000 * 60 * 60 * 24)); // Data da última lua nova

    // Calcular a fase da lua com base no ciclo lunar
    const fase = (diasDesdeNovaLua % cicloLunar) / cicloLunar;

    let faseTexto;

    if (fase < 0.03) {
      faseTexto = "Lua Nova";
      luaNova.classList.remove("hide");
      LuaCrescente.classList.add("hide")
      LuaCheia.classList.add("hide")
      LuaMinguante.classList.add("hide")
    } else if (fase < 0.5) {
      faseTexto = "Lua Crescente";
      luaNova.classList.add("hide");
      LuaCrescente.classList.remove("hide")
      LuaCheia.classList.add("hide")
      LuaMinguante.classList.add("hide")
    } else if (fase < 0.97) {
      faseTexto = "Lua Cheia";
      luaNova.classList.add("hide");
      LuaCrescente.classList.add("hide")
      LuaCheia.classList.remove("hide")
      LuaMinguante.classList.add("hide")
    } else {
      faseTexto = "Lua Minguante";
      luaNova.classList.add("hide");
      LuaCrescente.classList.add("hide")
      LuaCheia.classList.add("hide")
      LuaMinguante.classList.remove("hide")
    }

    // Exibindo a fase da lua na div
    document.getElementById("moon-phase").innerText = `Fase da Lua: ${faseTexto}`;
  }

  // Chamando a função ao carregar a página
  window.onload = calcularFaseLua;