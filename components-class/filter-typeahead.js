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

class TypeAhead extends React.Component {

    constructor(props) {

        super(props);

        this.typeAheadKeyUp = this.typeAheadKeyUp.bind(this);
        this.refInput = React.createRef();

    }

    typeAheadKeyUp(event) {

        this.props.onTypeAheadChange(event.target.value);

    }

    // Used by the parent component
    resetFilter() {

        // This should really be done through state, not direct manipulation of components
        this.refInput.current.value = "";

    }

    render() {

        return (

            <div className="filter typeahead">
                <label htmlFor={this.props.id} className="title">{this.props.label}</label>
                <input
                    type="text"
                    ref={this.refInput}
                    className="text typeahead"
                    onKeyUp={this.typeAheadKeyUp}
                    id={this.props.id} />
            </div>

        );

    }
}