import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <header style="cursor:pointer;">
          <h1>My Quizz</h1>
          <a href="about/" aria-label="Accéder à la page à propos">À propos</a>
        </header>

        <nav class="topnav" aria-label="Réseaux sociaux">
          <a href="#" class="fa fa-facebook" aria-label="Facebook" tabindex="-1"></a>
          <a href="#" class="fa fa-twitter" aria-label="Twitter" tabindex="-1"></a>
          <a href="#" class="fa fa-google" aria-label="Google" tabindex="-1"></a>
          <a href="#" class="fa fa-linkedin" aria-label="LinkedIn" tabindex="-1"></a>
          <a href="#" class="fa fa-youtube" aria-label="YouTube" tabindex="-1"></a>
          <a href="#" class="fa fa-instagram" aria-label="Instagram" tabindex="-1"></a>
          <a href="#" class="fa fa-pinterest" aria-label="Pinterest" tabindex="-1"></a>
          <a href="#" class="fa fa-snapchat-ghost" aria-label="Snapchat" tabindex="-1"></a>
          <a href="#" class="fa fa-skype" aria-label="Skype" tabindex="-1"></a>
          <a href="#" class="fa fa-android" aria-label="Android" tabindex="-1"></a>
          <a href="#" class="fa fa-dribbble" aria-label="Dribbble" tabindex="-1"></a>
          <a href="#" class="fa fa-vimeo" aria-label="Vimeo" tabindex="-1"></a>
          <a href="#" class="fa fa-tumblr" aria-label="Tumblr" tabindex="-1"></a>
          <a href="#" class="fa fa-vine" aria-label="Vine" tabindex="-1"></a>
          <a href="#" class="fa fa-foursquare" aria-label="Foursquare" tabindex="-1"></a>
          <a href="#" class="fa fa-stumbleupon" aria-label="StumbleUpon" tabindex="-1"></a>
          <a href="#" class="fa fa-flickr" aria-label="Flickr" tabindex="-1"></a>
          <a href="#" class="fa fa-yahoo" aria-label="Yahoo" tabindex="-1"></a>
          <a href="#" class="fa fa-reddit" aria-label="Reddit" tabindex="-1"></a>
          <a href="#" class="fa fa-rss" aria-label="Flux RSS" tabindex="-1"></a>
        </nav>

        <div class="row">
          <div class="leftcolumn">
            <section class="card">
              <h1>Nom étudiant</h1>
              <h5>description</h5>
              <section id="quiz" aria-labelledby="quiz-title">
                <h2 id="quiz-title">A TOI DE JOUER</h2>
                <div id="question" aria-live="assertive"></div>
                <div id="proposals" role="group" aria-label="Propositions de réponse"></div>
              </section>
            </section>
          </div>
          <div class="rightcolumn">
            <section class="card">
              <img src="/question.png" width="500" height="600" alt="Illustration de la question du quizz">
            </section>
          </div>
        </div>

        <footer>
          <h2>@2024</h2>
        </footer>
`

initQuizz();