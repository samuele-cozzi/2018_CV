//import React from 'react';

class AboutMe extends React.Component {

    componentDidMount() {
        console.log("AboutMe: componentDidMount");
    }

    render() {
        return (
            <div>
                <h2 className="h2-responsive">About me</h2>
                <p>vamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus,
                        nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur
                        ac, vestibulum at eros.</p>
            </div>
        );
    }
}

ReactDOM.render(
  <window.AboutMe />,
  document.getElementById('about-me') 
);