/*

COMPONENT: Rating

PROPS

  * id (string) - ID to use for this component's input/label elements
  * label (string) - HTML <label> value to display
  * value (string) - value of this control
  * onRatingChange (function) - function used to lift state to the <App> parent component

ABOUT

  Renders the rating component, consisting of a radio button group.
  This component lifts state (the value of the radio buttons) to its parent <App> component via the 'onRatingChange(event)' function. Filter logic is handled by that parent.

*/

const Rating = ({ id, label, value, onRatingChange }) => {

    // Ref Hooks: stores a reference to HTML elements that code will need
    const refEasy = React.useRef();
    const refModerate = React.useRef();
    const refDifficult = React.useRef();

    const onRadioChange = (event) => {

        // Lift state to parent component via a prop
        onRatingChange(event.target.value);

    };


    return (

        <div className="filter rating">
            <label htmlFor={id} className="title">{label}</label>
            
            <input type="radio" id={`${id}_easy`} name={`${id}`} value="easy" onChange={onRadioChange} ref={refEasy} checked={value === 'easy'} /> <label htmlFor={`${id}_easy`}>Easy</label> &nbsp;&nbsp;
            <input type="radio" id={`${id}_moderate`} name={`${id}`} value="moderate" onChange={onRadioChange} ref={refModerate} checked={value === 'moderate'} /> <label htmlFor={`${id}_moderate`}>Moderate</label> &nbsp;&nbsp;
            <input type="radio" id={`${id}_difficult`} name={`${id}`} value="difficult" onChange={onRadioChange} ref={refDifficult} checked={value === 'difficult'} /> <label htmlFor={`${id}_difficult`}>Difficult</label>

        </div>

    );

};