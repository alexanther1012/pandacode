import React from 'react';
import logo from '../../img/panda.png';
import mundo from '../../img/mundo.png';
import tresmilloness from '../../img/3millones.jpg';
import todotodo from '../../img/todotodo.jpg';

import Contador from '../contador';

const Home = (props) => {
  const fields = [];

  for (let i = 0; i <= 25; i++) {
    fields.push(<p>mucho mucho mucho mucho mucho mucho mucho</p>);
  }
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Bienvenida pandita</h2>
      </div>
      <div className="App-intro">
        <p>Sabes, hay muchas cosas muy lindas en esta vida</p>
        <p>y la mayor de ellas comenzo hace casi</p>
        <Contador tipo={1}/>
        <p>paso uno de los mejores momentos de mi vida</p>
        <p>porque vi por primera ves a la persona que no me imagine</p>
        <p>nunca que seria la persona que le da sentido a mi vida</p>
        <p>la persona que regreso la felicidad a mi vida</p>
        <p>y que me ha dado miles de millones de millones y mas</p>
        <p>muchos muchos mas momentos, y singue dandome mas.</p>
        <br/>
        <p>Sabes nunca de los nuncas alguien me habia hecho tan feliz</p>
        <p>asi como tu lo haces, si tu, tu eres esa hermosa pesonita</p>
        <p>si esa hermosa personita que desde entonces tan solo</p>
        <p> con una gran sonrisa, o con una mirada tierna</p>
        
        <p>hace que este niño serio sea la persona mas feliz del <img style={{height: "2rem"}}src={mundo} className="App-logo" alt="logo" /></p>
        <br/>
        <p>Pero sabes algo mas, fui mucho mas feliz desde hace casi</p>
        <Contador tipo={2}/>
        <p>porque desde entonces mi vida cambio mucho mucho</p>
        <p>y mas porque pude decirle al mundo aunque aunque muchas</p>
        <p>muchas personas ya lo sabian pude decirle al mundo que</p>
        <p>tenia a mi lado a la persona mas maravillosa del mundo</p>
        <p>si, tu para mi eres eso, eres la niña que con solo</p>
        <p>1 sonrisa, 1 mirada, 1 palabra, 1 mensaje, haces que mis dias</p>
        <p>sean los mejores de todo todo, porque llenas cada momento</p>
        <p>de alegria, de color, de locuras, de risas, de todo todo.</p>
        <br/>
        <p>Sabes que es lo mejor de todo todo que solo tu haces que sea</p>
        <p>asi como soy, todo cursi cursi, que quiera demostrar todo todo</p>
        <p>lo que siento por ti que es muchisisisisisimo, Sabes que tanto</p>
        <p id="regresar">
          <a href="#te-amo-3millones">Da clic aqui....</a>
        </p>
        <p>Hemos pasado mucho durante todo todo este tiempo</p>
        <p>pero la vida como tu dices es una montaña rusa</p>
        <p>montaña rusa en la que te quiero acompañar</p>
        <p>asi como lo he hecho en todos todos estos</p>
        <p>dias, minutos, segundo, momentos que a tu lado estoy viviendo</p>
        <br/>
        <p>Momentos, muchos momentos que quiero vivir</p>
        <p>porque yo quiero una vida a tu lado, una vida</p>
        <p>llena de amor, llena de alegrias, llenas de locuras</p>
        <p>llena de todo, llena de ti mi amor</p>
        <p>la niña mas maravillosa y que amo mucho</p>
        {[...Array(fields)].map(ele => ele)}
        <br/>
        <p>Lo se estoy loquito loquito mi amor pero sabes algo mejor?</p>
        <p>estoy loco loco loco por ti mi amor</p>
        <p>la persona mas maravillosa de mi mundo</p>
        <p>tu mi amor eres la persona mas maravillosa</p>
        <p>de todo todo todo todo todo todo todo todo mi</p>
        <p><img style={{width: "10rem" ,height: "10rem"}}src={mundo} className="App-logo" alt="logo" /></p>
        <h2>Eres...</h2>
        <p>La galleta de mi chocolate</p>
        <p>El huesito de mi aguacate</p>
        <p>El pan de mi nutela</p>
        <p>El relleno de mi negrito</p>
        <p>El sol y mi lunda de mis dias</p>
        <img style={{width: "100%"}} src={todotodo} alt="todotodo"/>
        <br/>
        <h1>
          Gracias por todos estos 
        </h1>
        <h1>
          <Contador tipo={1} />
        </h1>
        <h1>
          y
        </h1>
        <h1>
          <Contador tipo={2} />
        </h1>
      </div>
      <div style={{height: "1600px"}}>

      </div>
      <div id="te-amo-3millones">
        <a href="#regresar">Da clic aqui para regresar....</a>
        <img style={{width: "100%"}} src={tresmilloness} alt="tresmillones"/>
      </div>
    </div>
  );
}

export default Home;
