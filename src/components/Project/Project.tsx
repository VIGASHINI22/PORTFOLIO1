import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/VIGASHINI22/Sales-Forecasting-and-Visualization--Python" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Sales Forecasting and Visualization Site</h3>
              <p>
              This project leverages the Prophet algorithm in Python for sales forecasting and visualization. Prophet is a robust time-series forecasting tool developed by Facebook that can handle daily observations that display patterns on different time scales. The goal is to provide accurate sales forecasts along with interactive visualizations for better insights into sales trends.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Machine Learning</li>
                <li> Power Bi</li>
                <li> React Js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/VIGASHINI22/zomatoapp" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Zomato Clone</h3>
              <p>
              A ReactJS-based Zomato app clone showcasing the delivery, dining out, and nightlife experiences. Explore restaurants, order food for delivery, discover dining options, and find exciting nightlife venues. This project is designed to demonstrate ReactJS proficiency and replicate key features of the popular Zomato app.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React JS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/VIGASHINI22/online_translator_app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Online Translator App</h3>
              <p>
                Translate Arabic documents to English effortlessly with this Streamlit web application. The app supports PDF, text (TXT), and Word document (DOCX) formats. Simply upload your file, and the app will display the original text alongside its English translation. Powered by the MBart model from Hugging Face Transformers.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Huggingface transformer</li>
                <li>pytorch</li>
                <li>Streamlit</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/VIGASHINI22/Reactjs-QuizAPP" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Quiz App</h3>
              <p>
              This ReactJS Quiz App is an interactive trivia game that fetches questions from a Trivia API, providing users with a challenging and entertaining quiz experience.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React JS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/VIGASHINI22/END-TO-END-DIABETES-PREDICTION-APPLICATION" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Diabetes Prediction Machine Learning Model</h3>
              <p>
              This project implements a machine learning model to predict diabetes based on the PIMA Diabetes dataset. The model utilizes a Support Vector Machine (SVM) classifier with a linear kernel.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>python</li>
                <li>Machine Learning</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/VIGASHINI22/Sales-Insights-Analysis_E-Commerce" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>E-Commerce Sales Insights Analysis By POWERBI</h3>
              <p>
              This project offers an in-depth analysis of an e-commerce enterprise leveraging Power BI tools. Key business metrics and trends are visualized through a comprehensive dashboard. The insights derived facilitate data-driven decision-making, aiding business growth. The project incorporates forecasting techniques for predictive analysis.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>sql</li>
                <li>power bi</li>
                <li>DAX</li>
                <li>python</li>              
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
       

      </div>
    </Container>
  );
}