

const CustomButton = props => {


    return (

        <button className="customButton">
            <div className="customButton__name">
                {props.name}
            </div>
        </button>

    );
}

export default CustomButton;