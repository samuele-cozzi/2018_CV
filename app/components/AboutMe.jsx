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
                {/* Sono un Ingegnere Full Stack con più di 10 anni di esperienza nel costruire architetture Enterprise con lo lo stack tecnologico Microsoft ASP.NET.
                Sono appassionato di standard web e di imparare nuove tecnologie.
                In particolare mi sono focalizzato sui microservizi e implementazione delle web api, integrazione di sistemi complessi, sviluppo di applicazioni web per il mobile, design delle basi dati e design pattern.
                In questo periodo mi sto focalizzando su algoritmi di machine learning, Intelligenza Artificiale e deep learning */}
                I am a Full stack engineer with more than 10 years of experience in building Enterprise applications and architectures with the Microsoft technology Stack.
                I'm passionate about process automation and learning new technologies.
                In particular I focused on microservices and implementation of Web APIs, integration of complex systems, devops, development of Web applications (desktop and mobile), design of databases and design patterns.
                During this time I'm focusing on machine learning, artificial intelligence and deep learning algorithms
                </p>
            </div>
        );
    }
}

ReactDOM.render(
  <window.AboutMe />,
  document.getElementById('about-me') 
);