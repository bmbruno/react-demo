/*

PROPS

id (string)
label (string)

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