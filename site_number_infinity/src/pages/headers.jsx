
import "./styless/headersstyles.css"
import logo from "./pic/logo.png"
import inst  from "./pic/insta.png"
import faceb from "./pic/faceb.png"
import twiw from "./pic/twit.png"
import pint from "./pic/pinter.png"
import leftmain from "./pic/miniheadimg.png"

function headers(){
    return (
        <header>
            <div className="head_main_div">
                <button className="call">
                    Call - 123 456 789
                </button>
                <img src={logo} alt=""/>
                <button className="reserve">
                    Reservetion
                </button>

            </div>
            <div className="head_bot_main_div">
                <div className="routes">
                    <a href="">Home</a>
                    <a href="">About us</a>
                    <a href="">Our Menu</a>
                    <a href="">Pages</a>
                    <a href="">Blog</a>
                    <a href="">Contact Us</a>
                </div>
                <div className="social">
                    <img src={inst} alt=""/>
                    <img src={faceb} alt=""/>
                    <img src={twiw} alt=""/>
                    <img src={pint} alt=""/>
                </div>
            </div>
            <div className="Welcome_div">
                <div className="Welcome_left">
                    <h1>Welcome to Restaurant</h1>
                    <p>The people, food and the prime
                        locations make the perfect place good friends
                        & family to come together and have great time.</p>
                    <button>View Menu</button>

                </div>
                <div className="Welcome_img">
                    <img src={leftmain} alt=""/>
                </div>
            </div>

        </header>
    )
}
export default headers;