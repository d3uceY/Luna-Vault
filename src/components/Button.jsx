
import '../css/button.css'

export default function Button({children, ...props}) {
    return(
        <button id="custom-btn" {...props}>
            {children}
        </button>
    )
}