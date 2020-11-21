import React from 'react';

const About = () => {
    return (
        <div className="w3-container" id="about">
            <div className="w3-content" style={{maxWidth: "700px"}}>
                <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">ABOUT SHAMR</span></h5>
                <p>
                    SHAMR is meant to be an exercise in 'bad tech' in that this is not expected to be taken entirely seriously.
                    While watching a PBS broadcast, the topic of the 'Chinese Social Credit System' was covered. You can read more about it <a href="https://en.wikipedia.org/wiki/Social_Credit_System">here</a>. 
                    I undertook this project to explore how tech can be used against us and ways in which it might go wrong.
                </p>
                <p>
                    All of that said, now comes the fun. Vilify your enemies! Shame all that associate with them! Let it all burn! 
                    You can add twitter handles to the lists of offending peoples and tag them with specific offenses. Add an offense if you do 
                    not see a suitable one provided. 
                </p>
                <p>
                    You can also enter the twitter handles of your friends (or anyone) to determine who has been fraternizing with the enemy 
                    and should be ostrocized accordingly. Beware that some individuals have been deemed 'beyond reproach' and cannot be added 
                    to the offenders registry. Likewise, others have been deemed 'known offenders' and cannot be removed.
                </p>
            </div>
        </div>
    );
};

export default About;