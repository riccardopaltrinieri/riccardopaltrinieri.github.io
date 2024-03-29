import {Component} from "react";
import Typewriter from "typewriter-effect";

class HomeCaption extends Component {
    render() {
        return <Typewriter
            options={{delay: 20}}
            onInit={(typewriter) => {
                typewriter.typeString('Hi there! Welcome to my portfolio website!')
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString('I\'m an Amsterdam based software engineer with experience in web-app development, ' +
                        'from the backend to the frontend.')
                    .pauseFor(3500)
                    .deleteAll(15)
                    .typeString('Please, make yourself at home, have a look around and feel free to contact me :)')
                    .pauseFor(4500)
                    .deleteAll(70)
                    .pauseFor(2500)
                    .typeString('Ahem..')
                    .pauseFor(1500)
                    .deleteAll(500)
                    .pauseFor(3500)
                    .typeString('This is getting awkward..')
                    .pauseFor(2500)
                    .deleteAll()
                    .pauseFor(1500)
                    .typeString('Why are you still reading here?')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('You are waiting for some easter egg, aren\'t you?')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Well..')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Here's your <a href=\"/easter-egg\">Egg</a>, now open it, be quick!.")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Hi there! Welcome to my portfolio website!')
                    .start();
            }}
        />;
    }
}

export {HomeCaption}