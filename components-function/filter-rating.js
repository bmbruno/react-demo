/*

COMPONENT: Rating

PROPS

  * id (string) - ID to use for this component's input/label elements
  * label (string) - HTML <label> value to display
  * onRatingChange (function) - function used to lift state to the <App> parent component

ABOUT

  Renders the rating component, consisting of a radio button group.
  This component lifts state (the value of the radio buttons) to its parent <App> component via the 'onRatingChange(event)' function. Filter logic is handled by that parent.

*/

const Rating = React.forwardRef(({ id, label, onRatingChange }, ref) => {

    // Ref Hooks: stores a reference to HTML elements that code will need
    const refEasy = React.useRef();
    const refModerate = React.useRef();
    const refDifficult = React.useRef();

    // State Hook: 'selectedOption' stores a value; 'setSelectedOption' is the function used to update the value
    const [selectedOption, setSelectedOption] = React.useState();

    const onRadioChange = (event) => {

        // Update state of 'selectedOption' variable
        setSelectedOption(event.target.value);

        // Lift state to parent component via a prop
        onRatingChange(event.target.value);

    };

    // Used by the parent component
    React.useImperativeHandle(ref, () => {

        const resetFilter = () => {
            setSelectedOption('');
        };

    });


    return (

        <div className="filter rating">
            <label htmlFor={id} className="title">{label}</label>
            
            <input type="radio" id={`${id}_easy`} name={`${id}`} value="easy" onChange={onRadioChange} ref={refEasy} checked={selectedOption === 'easy'} /> <label htmlFor={`${id}_easy`}>Easy</label> &nbsp;&nbsp;
            <input type="radio" id={`${id}_moderate`} name={`${id}`} value="moderate" onChange={onRadioChange} ref={refModerate} checked={selectedOption === 'moderate'} /> <label htmlFor={`${id}_moderate`}>Moderate</label> &nbsp;&nbsp;
            <input type="radio" id={`${id}_difficult`} name={`${id}`} value="difficult" onChange={onRadioChange} ref={refDifficult} checked={selectedOption === 'difficult'} /> <label htmlFor={`${id}_difficult`}>Difficult</label>

        </div>

    );

});