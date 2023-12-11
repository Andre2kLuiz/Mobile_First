 
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
      moonInfo.innerHTML = `Na fase da lua nova, é recomendável dar uma pausa<br>
      nas atividades de plantio e colheita. Em vez disso, use<br>
      este periodo para planejar e preparar seu jardim ou horta. Você<br>
      pode planejar novos layouts, projetar novas áreas de<br>
      cultivo e preparar o solo para futuras platações. É<br>
      um momento de renovação e preparação para as<br>
      próximas fases da lunares.<br><br>
      A fase da lua nova é um momento de renovação e<br>
      recomeço no ciclo lunar. Nesta fase, você pode se<br>
      concentrar em preparar seu jardim ou horta para um <br>
      novo ciclo de crescimento.<br><br>
      <Strong>Lembre-se de que a influência da lua nas atividades de jardinagem é<br>
      uma crença tradicional e não é apoiada por evidências sólidas.<br>
      No entato, muitos jardineiros desfrutam de rituais relacionados á lua,<br>
      pois isso os ajuda a se conectarem mais profundamente com suas <br>
      plantas e jardins.</Strong><br>`
      
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
      <Strong>Lembre-se de que a influência da lua nas atividades de jardinagem é<br>
      uma crença tradicional e não é apoiada por evidências sólidas.<br>
      No entato, muitos jardineiros desfrutam de rituais relacionados á lua,<br>
      pois isso os ajuda a se conectarem mais profundamente com suas <br>
      plantas e jardins.</Strong><br>`;
    } else {
      faseTexto = "Lua Minguante";
      luaNova.classList.add("hide");
      LuaCrescente.classList.add("hide")
      LuaCheia.classList.add("hide")
      LuaMinguante.classList.remove("hide")
      moonInfo.innerHTML = `Durante a fase minguante da lua, concentre-se<br>
      em tarefas de manutenção e cuidados com solo. É um<br>
      momento adequado para fazer podas de limpeza,<br>
      eliminar ervas daninhas e adubar o solo, Também é<br>
      um bom momento para transplantar plantas, já que a<br>
      lua minguante promove o desenvolvimento da raízes.<br><br>
      Durante a fase da lua minguante, a energia da lua<br>
      está diminuindo, o que pode ser aproveitado para<br>
      realizar atividades de limpeza, manuenção e<br>
      preparação para o próximo ciclo de crescimento.<br><br>
      Lembre-se de que a influência da lua nas atividades de jardinagem é<br>
      uma crença tradicional e não é apoiada por evidências sólidas.<br>
      No entato, muitos jardineiros desfrutam de rituais relacionados á lua,<br>
      pois isso os ajuda a se conectarem mais profundamente com suas <br>
      plantas e jardins.<br>`
    }

    // Exibindo a fase da lua na div
    document.getElementById("moon-phase").innerText = `Fase da Lua: ${faseTexto}`;
  }

  // Chamando a função ao carregar a página
  window.onload = calcularFaseLua;