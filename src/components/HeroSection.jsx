
import '../css/herosection.css'
import heroImg from '../assets/Frame 38 1.png'
import Button from './Button'

export default function HeroSection() {
    return(
        <section id='hero-section'>
            <img src={heroImg} alt="" />

            <h2>
                Smarter Yeilds Simplified.
            </h2>
            <h1>
                Automated Yield Vault Built for the future of Defi.
            </h1>
            <p>
                Earn optimized returns from multiple Defi protocols - all managed securely through one intelligent vault.
            </p>
            <div id='hero-btn-container'>
                <button className='btn1'>Join Beta</button>
                <button className='btn2'>Connect Wallet</button>
            </div>
        </section>
    )
}