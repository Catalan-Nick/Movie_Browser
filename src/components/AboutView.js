import Hero from './Hero'
const AboutView = () => {
    return (
      <div>
        <Hero text="About Us"/>
        <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Made by Nicholas Catalan, June 2022.
            </p>
          </div>
        </div>
      </div>
      </div>  
    )
  }
  export default AboutView