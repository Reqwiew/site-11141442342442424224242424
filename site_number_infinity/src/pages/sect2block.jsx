import "./styless/sect2blockstyle.css"
import locat from "./pic/locat.png"
import hours from "./pic/hourss.png"
import reserve from "./pic/resercwe.png"
import block2img from "./pic/sect2img.png"
import rosp from "./pic/rospis.png"

function Sect2block() {
    return (
        <div className="sect2">
            <div className="sect2_top">
                <div className="minis">
                    <img src={locat} alt=""/>
                    <div className="minis_content">
                        <h1>Locate Us</h1>
                        <p>Riverside 25, San Diego, California</p>
                    </div>
                </div>
                <div className="minis">
                    <img src={hours} alt=""/>
                    <div className="minis_content">
                        <h1>Open Hours</h1>
                        <p>Mon To Fri 9:00 AM - 9:00 PM</p>
                    </div>
                </div>
                <div className="minis">
                    <img src={reserve} alt=""/>
                    <div className="minis_content">
                        <h1>Reservation</h1>
                        <p>restaurantate@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="sect2_bot">
                <div className="sect2_bot_img">
                    <img src={block2img} alt=""/>
                </div>
                <div className="sect2_bot_content">
                    <div className="top_cont">
                        <h1>The Delicious Story</h1>
                        <p>The people, food and the prime locations
                            make the perfect place for the
                            friends & family to come together and have great time.
                        </p>

                    </div>
                    <div className="mid_cont">
                        <div className="mid_cont_1">
                            <h1>2018</h1>
                            <p>Plan for this restaurant to deliver healthy food.</p>
                        </div>
                        <div className="mid_cont_1">
                            <h1>2022</h1>
                            <p>Happily in the fourth year by fulfill the motto.</p>
                        </div>
                    </div>
                    <div className="bot_cont">
                        <p>JOSEFINE</p>
                        <img src={rosp} alt=""/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sect2block