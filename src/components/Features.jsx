
import '../css/features.css'
import feature1 from '../assets/Image container 1.png'
import feature2 from '../assets/Image container2 1.png'
import feature3 from '../assets/Frame 63 1.png'
import '../css/featurescards.css'

export default function Features() {
    return (
        <div id='features-container'>
            <div id="features">
                <h3>Features</h3>
                <h1>Smart Features That Power Every Vault</h1>
                <p>Behind the simplicity of LunaVault lies a powerful automation - AI driven strategies, multi-chain flexibility, and real time insights designed to maximize your yields. </p>
            </div>

            <div className="flex flex-col max-w-[814px] gap-2 mx-auto">
                <div className='grid md:grid-cols-2 gap-2'>
                    <div className='border rounded-md p-[16px]'>
                        <img src={feature1} alt="" />
                        <h2>AI Reallocation</h2>
                        <p>Automatically adjusts token allocations across DeFi protocols to secure the best yields.</p>
                    </div>
                    <div className='border rounded-md p-[16px]'>
                        <img src={feature2} alt="" />
                        <h2>Multi-Chain Support</h2>
                        <p>Access top DeFi opportunities across multiple chains — all managed from one vault.</p>
                    </div>
                </div>
                <div className='border rounded-md p-[16px]'>
                    <img src={feature3} alt="" />
                    <h2>Real-Time Analytics</h2>
                    <p>Monitor performance, track yield flow, and view live compounding insights in one placeAutomatically adjusts token allocations across DeFi protocols to secure the best yields.</p>
                </div>
            </div>
        </div>
    )
}