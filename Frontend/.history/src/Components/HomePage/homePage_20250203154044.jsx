import React from "react";
import "./homePage.css";

function HomePage(){

    const options = ["All"]


    return(
        <div className="homePage">
            <div className="homePage-options">
                <div className="homePage-optionList">
                    All
                </div>
            </div>
        </div>
    )
}

export default HomePage;