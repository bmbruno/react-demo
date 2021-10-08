/*

PROPS

id (string)
label (string)

*/

class Rating extends React.Component {

    constructor(props) {
        super(props);

        this.onRadioChange = this.onRadioChange.bind(this);
        this.refEasy = React.createRef();
        this.refModerate = React.createRef();
        this.refDifficult = React.createRef();

        this.state = {
            selectedOption: ''
        }
    }

    onRadioChange(event) {

        this.setState({
            selectedOption: event.target.value
        });

        this.props.onRatingChange(event.target.value);

    }

    resetFilter() {

        this.setState({
            selectedOption: ''
        });

    }

    render() {
        return (

            <div className="filter rating">
                <label htmlFor={this.props.id} className="title">{this.props.label}</label>
                
                <input type="radio" id={`${this.props.id}_easy`} name={`${this.props.id}`} value="easy" onChange={this.onRadioChange} ref={this.refEasy} checked={this.state.selectedOption === 'easy'} /> <label htmlFor={`${this.props.id}_easy`}>Easy</label> &nbsp;&nbsp;
                <input type="radio" id={`${this.props.id}_moderate`} name={`${this.props.id}`} value="moderate" onChange={this.onRadioChange} ref={this.refModerate} checked={this.state.selectedOption === 'moderate'} /> <label htmlFor={`${this.props.id}_moderate`}>Moderate</label> &nbsp;&nbsp;
                <input type="radio" id={`${this.props.id}_difficult`} name={`${this.props.id}`} value="difficult" onChange={this.onRadioChange} ref={this.refDifficult} checked={this.state.selectedOption === 'difficult'} /> <label htmlFor={`${this.props.id}_difficult`}>Difficult</label>

            </div>

        );
    }
}