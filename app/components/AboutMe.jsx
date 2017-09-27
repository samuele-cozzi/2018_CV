//import React from 'react';

class AboutMe extends React.Component {

    componentDidMount() {
        console.log("AboutMe: componentDidMount");
    }

    render() {
        return (
            <div>
                <h2 className="h2-responsive">About me</h2>
                <p>
                Sono un Ingegnere Full Stack con più di 10 anni di esperienza nel costruire architetture Enterprise con lo lo stack tecnologico Microsoft ASP.NET.
                Sono appassionato di standard web e di imparare nuove tecnologie.
                In particolare mi sono focalizzato sui microservizi e implementazione delle web api, integrazione di sistemi complessi, sviluppo di applicazioni web per il mobile, design delle basi dati e design pattern.
                In questo periodo mi sto focalizzando su algoritmi di machine learning, Intelligenza Artificiale e deep learning
                </p>
            </div>
        );
    }
}

ReactDOM.render(
  <window.AboutMe />,
  document.getElementById('about-me') 
);