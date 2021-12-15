import PropTypes from "prop-types"

function Card({children, reverse}) {
    return (
    //    <div className={"card ${ everse && "reverse"}"}> \\ Conditional Class 
    //      {children}</div>
    <div className="card"
    stlye={{
    backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",      //Conditonal Styling in React.jsx - Determines if reverse is TRUE reverse color text/background
    color: reverse ? "#fff" : "#000"}}
    
    >
        {children}
    </div>
    )
}

Card.defaultProps = {
    reverse: false,

}

Card.propTypes = {
    chidlren: PropTypes.node.isRequired,
    reverse: PropTypes.bool, 
}
export default Card
