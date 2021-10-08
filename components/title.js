/*

PROPS

text
alignment - left, center, right

*/

class Title extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (

            <h1 style={{ textAlign: this.props.alignment }}>{this.props.text}</h1>

        );
    }
}