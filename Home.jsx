import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  "./Home.css"

function Home(){
    return(
        <div className="dashboard-container text-center">
                <div>
                  <div >
                    <h1 className="text-light">Welcome </h1>
                    <div className="container text-center">
                      <div className="row">
                        
                        <div className="col">
                          dashboard
                        </div>
                        <div className="col ">
                          Fitness Nutrition 
                        </div>
                        <div className="col">
                          Mindfull and Meditation
                        </div>
                        <div className="col">
                          Mental Health
                        </div>
                        <div className="col">
                          Community Engagement
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>

    )
}
export default Home;