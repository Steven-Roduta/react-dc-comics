import ComicData from "./comicdata"

export default function Main() {
    return (
        <main>

        <ComicData/>
        
        <div className="content">
            <h3>➡️ Content Goes Here⬅️</h3>
        </div>

        <div className="dc">
            
            <nav>
                <ul>
                    <li>
                        
                        <div className="buy">
                        < p>DIGITAL COMICS</p> 
                            <img src="./img/buy-comics-digital-comics.png" alt="buy"/>

                        </div>
                      
                    </li>
                    <li>
                        <div className="buy">
                            <img src="./img/buy-comics-merchandise.png" alt="buy"/>
                            <p>DC MECHANDICE</p>  
                        </div>
                       
                    </li>
                    <li>
                        <div className="buy">
                            <img src="./img/buy-comics-subscriptions.png" alt="buy"/>
                            <p>SUBSCRIPTION</p> 
                        </div>
                       
                    </li>
                    <li>
                        <div className="buy">
                            <img src="./img/buy-comics-shop-locator.png" alt="buy"/>
                            <p>COMIC SHOP LOCATOR</p>  
                        </div>
                       
                    </li>
                    <li>
                        <div className="buy">
                            <img src="./img/buy-dc-power-visa.svg" alt="buy"/>
                            <p>DC POWER VISA</p> 
                        </div>
                      
                    </li>
                </ul>
            </nav>
        </div>
    </main>
    )
}