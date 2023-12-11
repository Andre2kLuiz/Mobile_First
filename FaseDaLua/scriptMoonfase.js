 
 const luaNova = document.querySelector("#LuaNova");
 const LuaCrescente = document.querySelector("#LuaCrescente")
 const LuaCheia = document.querySelector("#LuaCheia")
 const LuaMinguante = document.querySelector("#LuaMinguante")
 const moonInfo = document.querySelector("#moon-info")
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
      moonInfo.innerHTML = `Durante a fase crescente da lua, é um ótimo momento para semear<br>
      culturas que produzem frutos e sementes, como tomates, pimentões<br>
      e abóboras.
      Esta fase promove o crescimento e o desenvolvimento<br> das plantas,
      então concentre-se em plantar culturas que você deseja<br> que
      cresçam vigorosamente.<br><br> Na fase da lua crescente, o poder de crescimento das plantas<br> é
      amplificado, o que a torna uma ótima época para promover o<br> 
      crescimento vigoroso de suas plantas no jardim ou horta.<br><br><Strong>Lembre-se de que a influência da lua nas atividades de jardinagem é<br>
      uma crença tradicional e não é apoiada por evidências sólidas.<br>
      No entato, muitos jardineiros desfrutam de rituais relacionados á lua,<br>
      pois isso os ajuda a se conectarem mais profundamente com suas<br> 
      plantas e jardins.</Strong>`;
    } else if (fase < 0.97) {
      faseTexto = "Lua Cheia";
      luaNova.classList.add("hide");
      LuaCrescente.classList.add("hide")
      LuaCheia.classList.remove("hide")
      LuaMinguante.classList.add("hide")
      moonInfo.innerHTML = `Na fase da lua cheia, é um momento ideal para a colheita de vegetais<br>
      e ervas.<br>
      As plantas tendem a estar em seu ponto máximo de maturação nesta<br>
      fase, o que significa que você pode colher produtos de alta qualidade.<br>
      Aproveite para colher os frutos do seu trabalho duro no jardim.<br><br>
      A fase da lua cheia é frequentemente associada a um período de alta<br>
      energia e atividade.<br><br>
      Lembre-se de que a influência da lua nas atividades de jardinagem é<br>
      uma crença tradicional e não é apoiada por evidências sólidas.<br>
      No entato, muitos jardineiros desfrutam de rituais relacionados á lua,<br>
      pois isso os ajuda a se conectarem mais profundamente com suas <br>
      plantas e jardins.<br>`;
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