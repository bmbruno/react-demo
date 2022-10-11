/*

COMPONENT: TypeAhead

PROPS

  * id (string) - ID to use for this component's input/label elements
  * label (string) - HTML <label> value to display
  * onTypeAheadChange (function) - function used to lift state to the <App> parent component

ABOUT

  Renders input/label elements that provide basic type-ahead filter fuctionality. 
  This component lifts state (the value in the textbox) to its parent <App> component via the 'typeAheadKeyUp(event)' function. Filter logic is handled by that parent.

*/

const TypeAhead = React.forwardRef(({ id, label, onTypeAheadChange }, ref) => {

    const refInput = React.createRef();

    const typeAheadKeyUp = (event) => {

        onTypeAheadChange(event.target.value);

    };

    // Used by the parent component
    React.useImperativeHandle(ref, () => {

        const resetFilter = () => {
            // This should really be done through state, not direct manipulation of components
            refInput.current.value = "";
        };

    });

    return (

        <div className="filter typeahead">
            <label htmlFor={id} className="title">{label}</label>
            <input
                type="text"
                className="text typeahead"
                onKeyUp={typeAheadKeyUp}
                id={id}
                ref={refInput} />
        </div>

    );

});