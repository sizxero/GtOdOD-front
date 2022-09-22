const CtgPalette = (props) => {
    return (
        <div className="CtgPalette">
            <div className="Colors" id="$GtOdOD_red" onClick={props.selectColor}></div>
            <div className="Colors" id="$GtOdOD_pink" onClick={props.selectColor}></div>
            <div className="Colors" id="$GtOdOD_orange" onClick={props.selectColor}></div>
            <div className="Colors" id="$GtOdOD_yellow" onClick={props.selectColor}></div>
            <div className="Colors" id="$GtOdOD_lime" onClick={props.selectColor}></div>
            <div className="Colors" id="$GtOdOD_green" onClick={props.selectColor}></div>
            <div className="Colors" id="$GtOdOD_skyblue" onClick={props.selectColor}></div>
            <div className="Colors" id="$GtOdOD_blue" onClick={props.selectColor}></div>
            <div className="Colors" id="$GtOdOD_purple" onClick={props.selectColor}></div>
            <div className="Colors" id="$GtOdOD_lightpurple" onClick={props.selectColor}></div>
            <div className="Colors" id="$GtOdOD_gray" onClick={props.selectColor}></div>
            <div className="Colors" id="$GtOdOD_black" onClick={props.selectColor}></div>
        </div>
    );
}

export default CtgPalette;