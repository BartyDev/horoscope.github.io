
let signo = "";
let nombre = "";


function usuarioZod() {
         nombre = prompt("Ingresa tu nombre :");
    alert("Bienvenido " + nombre.toUpperCase());   
}
    
function signosZod() {
        signo = prompt("Ingresa tu signo zodiacal :");
    if (signo === "sagitario") {
        alert("♐ Estas sufriendo de insomnio y eso no puede seguir. Busca la manera de meditar y de reflexionar qué hace que no te permite darle descanso a la mente y al cuerpo. En el amor, tu pareja está para apoyarte, así que permítele en estos momentos demostrarte cuanto te quiere solo con su compañía.");
    } else if (signo === "cancer") {
        alert("♋ Es un día para no pensar en los problemas laborales, para darle a tu cuerpo y a tu mente descanso y diversión. Sal con tus amigas, busca a la familia, eso te ayudara a despejar. En el amor, no te sientas mal porque aún estás sola, la persona ideal llegará pronto.");
    }else if (signo === "piscis") {
        alert("♓ Tienes mucha energía, tanta que deberías aprovecharla para hacer actividades al aire libre que te ayuden a estar en movimiento. Tu cuerpo lo agradecerá. En el amor, los cambios siempre generan desajustes sentimentales, así que tranquila esta es solo una etapa que vas a superar con tu pareja.");
    }else if (signo === "leo") {
        alert("♌ Organízate para que tengas un tiempo para ti, para hacer actividades diferentes que ayuden a tu cuerpo y a tu mente a estar sanos. En el amor, vas a pasar momentos muy gratos con tu pareja, aprovecha para avivar la llama del amor y compenetrarse aún más.");
    }else if (signo === "aries") {
        alert("♈ Aprovecha el día para estar al aire libre, disfrutar con los compañeros, distraerte de la rutina y hasta hacer ejercicio. Así iniciaras una semana con buen pie. En el amor, tendrás el apoyo de todos para tomar una decisión que será trascendental en tu futuro.");
    }else if (signo === "tauro") {
        alert("♉ Te has sentido muy agobiada en la semana y eso te tiene con un cansancio nada normal. No pasa nada, tienes todo el derecho a dormir para recuperar esas energías pérdidas. En el amor, la familia tiene una sorpresa que te va a encantar, así que anímate a compartir.");
    }else if (signo === "geminis") {
        alert("♊ El equilibrio de la vida es sentir que tu cuerpo y tu mente están bien y en completa armonía. Haz ejercicio, camina, sal de la rutina, medita, eso te ayudará. En el amor, deja la percusión y la posesión con tu pareja, al final del camino quien se hace daño eres tú. Si no funciona toma una decisión.");
    }else if (signo === "virgo") {
        alert("♍ Te sientes decaída y sin ánimos de nada, Eso es válido a veces el cuerpo nos pide descanso, paz y tranquilidad. En el amor, no entres en discusiones con tu pareja que no te llevan a nada. Por el contrario, busquen un momento de paz para sentarse a resolver sus diferencias.");
    }else if (signo === "libra") {
        alert("♎ La semana fue muy difícil, de mucho trabajo y necesitas descanso para agarra con energía lo que viene de aquí en adelante en el plano laboral. En el amor, un amigo te invita a salir en plan de conquista, así que acepta y date la oportunidad de conocerlo.");
    }else if (signo === "escorpio") {
        alert("♏ Tienes que cuidarte mucho porque tienes cansancio acumulado y mucho estrés que puede afectar tu salud. Procura dormir eso es muy importante. En el amor, no dejes que por chismes tu relación se vea afectada. Hablar y resolver las diferencias no cuesta nada.");
    }else if (signo === "capricornio") {
        alert("♑ La salud no va nada bien, así que debes buscar alguna manera de salir de la rutina y hacer actividades que te permitan sanar, recuerda que tú eres lo más importante. En el amor, deja a un lado el pasado y piensa en disfrutar la vida. Ya vendrá alguien especial a tu vida.");
    }else if (signo === "acuario") {
        alert("♒ Es un día maravilloso para estar en contacto con la naturaleza, meditar y sanar la mente y el cuerpo. Busca a tus amigas y corre, libera energía para que inicies la semana con buen pie. En el amor, la persona que quieres a tu lado está más cerca de lo que te imaginas, pero tú ni cuenta te das. Abre los ojos.");
    } else {
        alert("ingresa una opcion valida");
        return signosZod();
    }
    return mensajeZod();
}

function mensajeZod() {
    alert("Mi querido " + signo.toUpperCase() + ", sea o no positivo el mensaje que recibiste nunca olvides : 'La vida no se mide en minutos , se mide en MOMENTOS ❤️'");
    alert("Gracias por visitarnos " + nombre.toUpperCase() + ", vuelva pronto!");
}

usuarioZod(nombre);
signosZod();



