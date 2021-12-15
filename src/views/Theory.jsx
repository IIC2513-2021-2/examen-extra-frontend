import React from 'react';

export default function Theory() {
  return (
    <>
      <h1>Preguntas teóricas</h1>

      <div class="question">
        <h3>Pregunta 1</h3>
        <p>¿Para qué sirven los headers HTTP?</p>
        <h4>Respuesta:</h4>
        <p>Los headers HTTP sirven para extender la información que se transmite entre cliente y servidor, es decir, permiten enviar información extra fuera del cuerpo del mensaje, que ambas partes pueden interpretar y utilizar para procesar el mensaje de una manera particular. Por ejemplo, los headers de cookies y CORS añaden información que puede tener consecuencias en cada una de las partes.</p>
      </div>

      <div class="question">
        <h3>Pregunta 2</h3>
        <p>Supongamos que usted tiene una API RESTful construida y funcionando en producción desde hace un tiempo. Hoy le llega el requerimiento de migrar las URLs existentes a un nuevo esquema (por ejemplo, agregarles un identificador como sufijo). ¿Qué debería hacer para que quienes consumen activamente su API no se vean perjudicados y puedan seguir consumiéndola sin tener que cambiar sus requests?</p>
        <h4>Respuesta:</h4>
        <p>Las URLs existentes deberían retornar como parte del response un status code <code>301 (Moved Permanently)</code>, e incluir en el header <code>Location</code> la nueva URL. De esta forma, quienes consumen la API pueden procesar el status code del response, y realizar las acciones pertinentes (que deberían involucrar acceder a la URL en el header <code>Location</code>). Si bien los consumidores deben hacer algo para manejar este caso, no tendrían que cambiar el request original explícitamente.</p>
      </div>

      <div class="question">
        <h3>Pregunta 3</h3>
        <p>¿A qué se refiere el concepto "Single page application"?</p>
        <h4>Respuesta:</h4>
        <p>Se refiere a una aplicación en el lado del cliente, construida mayormente utilizando JavaScript, que se encarga de 3 tareas: interacción con el usuario, manejo del estado (datos) y rendering visual. Existe una carga inicial de un documento HTML base, y toda actualización visual posterior producto de interacción con el usuario se lleva a cabo modificando el DOM, sin cargas extra. Si se requiere procesar nuevos datos, se realizan requests asíncronos.</p>
      </div>

      <div class="question">
        <h3>Pregunta 4</h3>
        <p>Mencione 2 beneficios de llevar a cabo un flujo de desarrollo que incluya Code Review</p>
        <h4>Respuesta:</h4>
        <p>Uno de los beneficios principales es detectar errores tempranamente, previo a integrar el código a la base existente. Otro beneficio relevante es poder tener la perspectiva de más personas, que eventualmente pueden sugerir mejoras a las soluciones, desde un enfoque constructivo. Existen más beneficios válidos, como seguir buenas prácticas o mejorar comunicación, entre otros.</p>
      </div>

      <div class="question">
        <h3>Pregunta 5</h3>
        <p>El hook <code>useEffect</code> de React nos sirve sólo para ejecutar un side effect cuando se monta un componente. Comente esta afirmación presentando argumentos</p>
        <h4>Respuesta:</h4>
        <p>La afirmación no es correcta, pues no sólo nos sirve para ejecutar un side effect cuando se monta un componente, sino también para ejecutar side effects luego de cada render del componente, o luego de un render producto del cambio de una prop o state en particular. También nos sirve para ejecutar funciones de cleanup previo a ejecutar los side effects.</p>
      </div>

      <div class="question">
        <h3>Pregunta 6</h3>
        <p>En el contexto del desarrollo de un componente React, ¿sería buena idea utilizar <code>document.createElement</code>? Fundamente su respuesta.</p>
        <h4>Respuesta:</h4>
        <p>React utiliza el concepto de Virtual DOM, que le permite realizar actualizaciones en forma óptima en el DOM real ("sólo" cuando es necesario). Por esa razón, mezclar código React con la API nativa del DOM podría interferir en este proceso óptimo que React realiza y terminar impactando en la performance de la aplicación. Por lo tanto, no sería aconsejable realizar esto.</p>
      </div>

      <div class="question">
        <h3>Pregunta 7</h3>
        <p>Las vulnerabilidad de tipo XSS son de las más comunes en la Web. ¿Por qué un ataque XSS persistente puede llegar a afectar a más personas que uno reflejado?</p>
        <h4>Respuesta:</h4>
        <p>En general un ataque XSS reflejado suele afectar a usuarios que acceden a links que incluyen código malicioso dentro de los query params (por ejemplo, enviado por SMS, Whatsapp, emails, etc). Sin embargo, un ataque XSS persistente está presente de forma permanente en un sitio web, pudiendo llegar a afectar a todo quien ingrese a este sitio. Si el ataque ocurre en un sitio web con alto tráfico, entonces potencialmente el público afectado será mayor.</p>
      </div>

      <div class="question">
        <h3>Pregunta 8</h3>
        <p>¿Cuál es la función de un certificado TLS?</p>
        <h4>Respuesta:</h4>
        <p>Un certificado TLS, emitido por una autoridad certificadora, certifica que un dominio en particular es dueño de una llave pública específica. En el contexto de HTTPS, permite que un cliente o browser valide mediante la autoridad certificadora si la comunicación segura que está intentando establecer con un servidor está ocurriendo realmente con ese servidor (y no con un tercero), permitiendo entonces la autenticación de este.</p>
      </div>

      <div class="question">
        <h3>Pregunta 9</h3>
        <p>¿Cuál es el propósito de un request preflight, en el contexto de CORS?</p>
        <h4>Respuesta:</h4>
        <p>El propósito es solicitarle al servidor el envío de un request con cierto método HTTP y ciertos headers HTTP, desde un determinado <code>origin</code>. El servidor evalúa entonces si acepta o no el request desde ese <code>origin</code> y con el método y headers HTTP informados. En caso de aceptar, retorna headers HTTP específicos que el cliente interpreta para poder realizar el request original.</p>
      </div>

      <div class="question">
        <h3>Pregunta 10</h3>
        <p>Una persona promedio en su día a día, ¿accede la Web sólo desde un browser? Fundamente su respuesta.</p>
        <h4>Respuesta:</h4>
        <p>Hoy en día la Web está presente prácticamente en todas las actividades digitales que realiza una persona promedio. No sólo cuando navega directamente desde un browser, sino que también desde muchas aplicaciones móviles que consumen APIs, y también al utilizar dispositivos inteligentes como Smart TVs para ver Netflix, Youtube o en general para consumir cualquier servicio de streaming.</p>
      </div>
    </>
  );
}
