import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="profile-container">
          <div className="photo-container">
            <img 
              src="./foto.jpg" 
              alt="Tu Foto" 
              className="photo" 
            />
          </div>
          <div className="profile-text">
            <h2>¡Hola, soy Rodrigo Lovon!</h2>
            <p>
              Estoy en el último ciclo de la carrera de <strong>Diseño y Desarrollo de Software</strong> en Tecsup.
              Cuento con experiencia en desarrollo de aplicaciones web, proyectos IoT con Arduino y soluciones backend con Python y Node.js. 
              Soy apasionado por aprender nuevas tecnologías y resolver problemas complejos mediante herramientas innovadoras.
            </p>
            <p>
              Mis habilidades incluyen trabajar con bases de datos como PostgreSQL y MySQL, desarrollo frontend con React, y colaboración en proyectos con control de versiones en GitHub.
            </p>
            <p>
              Estoy buscando oportunidades para aplicar mis conocimientos en entornos profesionales y contribuir al éxito de los proyectos con los que me involucro.
            </p>
          </div>
        </div>
      </header>
      <main className="content">
        <div className="buttons">
          <a 
            href="https://linkedin.com/in/rodrigo-lovonahumada" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn linkedin"
          >
            <img 
              src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" 
              alt="LinkedIn" 
              className="button-icon" 
            />
            LinkedIn
          </a>
          <a 
            href="https://api.whatsapp.com/send?phone=51951398348&text=Hola%20Rodrigo%2C%20quisiera%20conversar%20sobre%20un%20tema%20de%20desarrollo%20Back-End.%20%F0%9F%91%8D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn whatsapp"
          >
            <img 
              src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" 
              alt="WhatsApp" 
              className="button-icon" 
            />
            WhatsApp
          </a>
          <a 
            href="mailto:rodrigo.lovon@tecsup.edu.pe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn gmail"
          >
            <img 
              src="https://img.icons8.com/?size=100&id=ho8QlOYvMuG3&format=png&color=000000" 
              alt="Gmail" 
              className="button-icon" 
            />
            Gmail
          </a>
          <a 
            href="./cv-rodrigo-lovon.pdf" 
            download 
            className="btn download"
          >
            <img 
              src="https://img.icons8.com/?size=100&id=20471&format=png&color=000000" 
              alt="CV" 
              className="button-icon" 
            />
            Descargar CV
          </a>
        </div>
        <section className="skills">
          <h2>Habilidades</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <img src="https://img.icons8.com/?size=100&id=118557&format=png&color=000000" alt="GitHub" className="skill-icon" />
              <p>GitHub</p>
            </div>
            <div className="skill-item">
              <img src="https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000" alt="Python" className="skill-icon" />
              <p>Python</p>
            </div>
            <div className="skill-item">
              <img src="https://img.icons8.com/?size=100&id=bQNDZ3K3MrLb&format=png&color=000000" alt="Arduino" className="skill-icon" />
              <p>Arduino</p>
            </div>
            <div className="skill-item">
              <img src="https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000" alt="PHP" className="skill-icon" />
              <p>PHP</p>
            </div>
            <div className="skill-item">
              <img src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000" alt="Node.js" className="skill-icon" />
              <p>Node.js</p>
            </div>
            <div className="skill-item">
              <img src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" alt="React" className="skill-icon" />
              <p>React</p>
            </div>
            <div className="skill-item">
              <img src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000" alt="PostgreSQL" className="skill-icon" />
              <p>PostgreSQL</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Rodrigo Lovon. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
