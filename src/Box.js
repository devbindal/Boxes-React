
function Box(props){

    const styles={
        backgroundColor : props.on ? "#222222" : "#cccccc"
    } 
    return(
        <div className="Box" style={styles} onClick={props.toggle}></div>
    )

}

export default Box;