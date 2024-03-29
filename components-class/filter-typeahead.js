/*

COMPONENT: TypeAhead

PROPS

  * id (string) - ID to use for this component's input/label elements
  * label (string) - HTML <label> value to display
  * value (string) - value of this control
  * onTypeAheadChange (function) - function used to lift state to the <App> parent component

ABOUT

  Renders input/label elements that provide basic type-ahead filter fuctionality. 
  This component lifts state (the value in the textbox) to its parent <App> component via the 'typeAheadKeyUp(event)' function. Filter logic is handled by that parent.

*/

class TypeAhead extends React.Component {

    constructor(props) {

        super(props);

        this.typeAheadKeyUp = this.typeAheadKeyUp.bind(this);

    }

    typeAheadKeyUp(event) {

        this.props.onTypeAheadChange(event.target.value);

    }

    render() {

        return (

            <div className="filter typeahead">
                <label htmlFor={this.props.id} className="title">{this.props.label}</label>
                <input
                    type="text"
                    className="text typeahead"
                    onKeyUp={this.typeAheadKeyUp}
                    id={this.props.id}
                    defaultValue={this.props.value} />
            </div>

        );

    }
}