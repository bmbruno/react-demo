/*

COMPONENT: Title

PROPS

  * text (string) - text to display
  * alignment (string) - CSS 'text-align' value

ABOUT

  Renders an H1 heading tag.

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