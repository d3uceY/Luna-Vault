import NextSectionCards from "./NextSectionCards"
import {NEXTSECTIONDATA} from '../data'
import '../css/nextsection.css'

export default function NextSection() {
    return(
        <div>
            <div id="nextsection">
                <h2>How it works</h2>
                <h1>Three Simple Steps to Smarter Yields</h1>
                <p>LunaVault makes earning Defi yields effortless - just connect, deposit, and let automation handle the rest.</p>

            </div>
            <div id="cardcontainer">
                {NEXTSECTIONDATA.map((items) => <NextSectionCards key={items.title} {...items} /> )}
            </div>
        </div>            
    )
}