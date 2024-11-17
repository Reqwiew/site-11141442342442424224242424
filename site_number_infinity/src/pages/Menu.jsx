import "./styless/MenuStyle.css"
import menupic from "./pic/menupic.png"
import poz1 from "./pic/poz1.png"
import poz2 from "./pic/poz2.png"
import poz3 from "./pic/poz3.png"
import poz4 from "./pic/poz4.png"
import poz5 from "./pic/poz5.png"
import poz6 from "./pic/poz6.png"
import poz7 from "./pic/poz7.png"
import poz8 from "./pic/poz8.png"
import poz9 from "./pic/poz9.png"
import poz10 from "./pic/poz10.png"


function Menu() {
    return (
        <div className="menu">
            <div className="menu_left">
                <h1>MENU</h1>
                <div className="menu_left_bot">
                    <h2>Try Our Special dishes</h2>
                    <p>Every time you perfectly dine with us, it should 
                        happy for great inspired food in an environment designed 
                        with individual touches unique to the local area.
                    </p>
                    <img src={menupic} alt=""/>
                    <button>
                        See all dishes
                    </button>
                </div>
            </div>
            <div className="menu_right">
                <div className="menu_list_position">
                    <h1>Starters</h1>
                    <div className="lists">
                        <div className="posit">
                            <img src={poz1} alt=""/>
                            <div className="posit_content">
                                <h1>Raw Scallops from Erquy</h1>
                                <p>Shuck the scallop to that used for oysters</p>
                            </div>
                            <div className="bord_div"></div>
                            <h3>$40</h3>
                        </div>


                        <div className="posit">
                            <img src={poz2} alt=""/>
                            <div className="posit_content">
                                <h1>Spring Roll</h1>
                                <p>Add oil to a hot pan spring onion whites</p>
                            </div>
                            <div className="bord_div"></div>
                            <h3>$20</h3>
                        </div>


                        <div className="posit">
                            <img src={poz3} alt=""/>
                            <div className="posit_content">
                                <h1>French Onion Soup</h1>
                                <p>Wheat flour, apple cider vinegar, bread</p>
                            </div>
                            <div className="bord_div"></div>
                            <h3>$25</h3>
                        </div>


                        <div className="posit">
                            <img src={poz4} alt=""/>
                            <div className="posit_content">
                                <h1>Tomato Bruschetta</h1>
                                <p>Bread, olive oil, garlic, black pepper</p>
                            </div>
                            <div className="bord_div"></div>
                            <h3>$30</h3>
                        </div>

                    </div>
                </div>


                <div className="menu_list_position">
                    <h1>Main Dish</h1>
                    <div className="lists">
                        <div className="posit">
                            <img src={poz5} alt=""/>
                            <div className="posit_content">
                                <h1>Raw Scallops from Erquy</h1>
                                <p>Shuck the scallop to that used for oysters</p>
                            </div>
                            <div className="bord_div"></div>
                            <h3>$40</h3>
                        </div>


                        <div className="posit">
                            <img src={poz6} alt=""/>
                            <div className="posit_content">
                                <h1>Spring Roll</h1>
                                <p>Add oil to a hot pan spring onion whites</p>
                            </div>
                            <div className="bord_div"></div>
                            <h3>$20</h3>
                        </div>


                        <div className="posit">
                            <img src={poz7} alt=""/>
                            <div className="posit_content">
                                <h1>French Onion Soup</h1>
                                <p>Wheat flour, apple cider vinegar, bread</p>
                            </div>
                            <div className="bord_div"></div>
                            <h3>$25</h3>
                        </div>


                        <div className="posit">
                            <img src={poz8} alt=""/>
                            <div className="posit_content">
                                <h1>Tomato Bruschetta</h1>
                                <p>Bread, olive oil, garlic, black pepper</p>
                            </div>
                            <div className="bord_div"></div>
                            <h3>$35</h3>
                        </div>

                    </div>
                </div>


                <div className="menu_list_position">
                    <h1>Dessert</h1>
                    <div className="lists">
                        <div className="posit">
                            <img src={poz9} alt=""/>
                            <div className="posit_content">
                                <h1>Raw Scallops from Erquy</h1>
                                <p>Shuck the scallop to that used for oysters</p>
                            </div>
                            <div className="bord_div"></div>
                            <h3>$15</h3>
                        </div>


                        <div className="posit">
                            <img src={poz10} alt=""/>
                            <div className="posit_content">
                                <h1>Spring Roll</h1>
                                <p>Add oil to a hot pan spring onion whites</p>
                            </div>
                            <div className="bord_div"></div>
                            <h3>$30</h3>
                        </div>




                    </div>
                </div>

            </div>
        </div>
    )
}

export default Menu