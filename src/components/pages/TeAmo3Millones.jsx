import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import { Link as ScrollLink } from "react-scroll";
import mundo from "../../img/mundo.png";
import tresmilloness from "../../img/3millones.jpg";
import todotodo from "../../img/todotodo.jpg";

import Contador from "../contador";

const TeAmo3Millones = () => {
  const fields = [];

  for (let i = 0; i <= 50; i++) {
    fields.push("mucho mucho mucho mucho mucho mucho mucho");
  }
  return (
    <Fragment>
      <Grid container spacing={3} justifyContent="center">
        <Grid item size={12}>
          <div className="App-header">
            <h1 className="display-4 mb-2">Bienvenida pandita</h1>
          </div>
        </Grid>
        <Grid size={2} />
        <Grid size={8}>
          <Typography variant="body1" gutterBottom>
            Sabes, hay muchas cosas muy lindas en esta vida y la mayor de ellas
            comenzo hace casi{" "}
            <Contador type="complete" startDate={"2017-02-04"} /> paso uno de
            los mejores momentos de mi vida porque vi por primera ves a la
            persona que no me imagine nunca que seria la persona que le da
            sentido a mi vida la persona que regreso la felicidad a mi vida y
            que me ha dado miles de millones de millones y mas muchos muchos mas
            momentos, y singue dandome mas.
          </Typography>
        </Grid>
        <Grid size={2} />
        <Grid size={2} />
        <Grid size={8}>
          <Typography variant="body1" gutterBottom>
            Sabes nunca de los nuncas alguien me habia hecho tan feliz asi como
            tu lo haces, si tu, tu eres esa hermosa pesonita si esa hermosa
            personita que desde entonces tan solo con una gran sonrisa, o con
            una mirada tierna
          </Typography>
        </Grid>
        <Grid size={2} />
        <Grid size={2} />
        <Grid size={8}>
          <Typography variant="body1" gutterBottom>
            Sabes nunca de los nuncas alguien me habia hecho tan feliz asi como
            tu lo haces, si tu, tu eres esa hermosa pesonita si esa hermosa
            personita que desde entonces tan solo con una gran sonrisa, o con
            una mirada tierna hace que este niño serio sea la persona mas feliz
            del{" "}
            <img
              style={{
                height: "2rem",
                verticalAlign: "middle",
                margin: "0 0.5rem",
              }}
              src={mundo}
              className="App-logo"
              alt="logo"
            />
          </Typography>
        </Grid>
        <Grid size={2} />
        <Grid size={2} />
        <Grid size={8}>
          <Typography variant="body1" gutterBottom>
            Pero sabes algo mas, fui mucho mas feliz desde hace casi{" "}
            <Contador type="complete" startDate={"2017-07-04"} /> porque desde
            entonces mi vida cambio mucho mucho y mas porque pude decirle al
            mundo aunque aunque muchas muchas personas ya lo sabian pude decirle
            al mundo que tenia a mi lado a la persona mas maravillosa del mundo
            si, tu para mi eres eso, eres la niña que con solo 1 sonrisa, 1
            mirada, 1 palabra, 1 mensaje, haces que mis dias sean los mejores de
            todo todo, porque llenas cada momento de alegria, de color, de
            locuras, de risas, de todo todo.
          </Typography>
        </Grid>
        <Grid size={2} />
        <Grid size={2} />
        <Grid size={8}>
          <Typography variant="body1" gutterBottom>
            Sabes que es lo mejor de todo todo que solo tu haces que sea asi
            como soy, todo cursi cursi, que quiera demostrar todo todo lo que
            siento por ti que es muchisisisisisimo, Sabes que tanto
            <div id="button-regresar" className="button-regresar">
              <ScrollLink to="te-amo-3millones" smooth={true} duration={500}>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Da clic aqui....
                </Button>
              </ScrollLink>
            </div>
            <br />
            <br />
            Hemos pasado mucho durante todo todo este tiempo pero la vida como
            tu dices es una montaña rusa montaña rusa en la que te quiero
            acompañar asi como lo he hecho en todos todos estos dias, minutos,
            segundo, momentos que a tu lado estoy viviendo
          </Typography>
        </Grid>
        <Grid size={2} />
        <Grid size={2} />
        <Grid size={8}>
          <Typography variant="body1" gutterBottom>
            Momentos, muchos momentos que quiero vivir porque yo quiero una vida
            a tu lado, una vida llena de amor, llena de alegrias, llenas de
            locuras llena de todo, llena de ti mi amor la niña mas maravillosa y
            que amo mucho
            {[...Array(fields)].map((ele) => ele)}
          </Typography>
        </Grid>
        <Grid size={2} />
        <Grid size={2} />
        <Grid size={8}>
          <Typography variant="body1" gutterBottom>
            Lo se estoy loquito loquito mi amor pero sabes algo mejor? estoy
            loco loco loco por ti mi amor la persona mas maravillosa de mi mundo
            tu mi amor eres la persona mas maravillosa de todo todo todo todo
            todo todo todo todo mi
            <br />
            <div className=" image-mundo">
              <img
                style={{ width: "15rem", height: "15rem" }}
                src={mundo}
                className="App-logo"
                alt="logo"
              />
            </div>
          </Typography>
        </Grid>
        <Grid size={2} />
        <Grid size={2} />
        <Grid size={8}>
          <Typography variant="h2" gutterBottom>
            Eres...
          </Typography>
          <Typography variant="body1" gutterBottom>
            La galleta de mi chocolate
            <br />
            El huesito de mi aguacate
            <br />
            El pan de mi nutela
            <br />
            El relleno de mi negrito
            <br />
            El sol y mi lunda de mis dias
            <img style={{ width: "100%" }} src={todotodo} alt="todotodo" />
          </Typography>
        </Grid>
        <Grid size={2} />
        <Grid size={2} />
        <Grid size={8}>
          <Typography variant="h1" gutterBottom>
            Gracias por todos estos
          </Typography>
        </Grid>
        <Grid size={2} />
        <Grid size={2} />
        <Grid size={8}>
          <Typography variant="h1" gutterBottom>
            <Contador type="complete" startDate={"2017-02-04"} />
          </Typography>
        </Grid>
        <Grid size={2} />
        <Grid size={2} />
        <Grid size={8}>
          <Typography variant="h1" gutterBottom>
            Y
          </Typography>
        </Grid>
        <Grid size={2} />

        <Grid size={2} />
        <Grid size={8}>
          <Typography variant="h1" gutterBottom>
            <Contador type="complete" startDate={"2017-07-04"} />
          </Typography>
        </Grid>
        <Grid size={2} />
      </Grid>
      <div style={{ height: "1600px" }}></div>
      <div id="te-amo-3millones">
        <div id="button-regresar-te-amo-3millones" className="button-regresar">
          <ScrollLink to="button-regresar" smooth={true} duration={500}>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Da clic aqui para regresar....
            </Button>
          </ScrollLink>
        </div>
        <br />
        <img style={{ width: "100%" }} src={tresmilloness} alt="tresmillones" />
      </div>
    </Fragment>
  );
};

export default TeAmo3Millones;
