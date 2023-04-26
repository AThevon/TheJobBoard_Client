import './index.css';

const Button = ({content, onClick, className, disabled }) => {
    return (
        <button onClick={onClick} className={className} disabled={disabled}>{content}</button>
    )
}

export default Button