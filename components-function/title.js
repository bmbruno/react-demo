/*

COMPONENT: Title

PROPS

  * text (string) - text to display
  * alignment (string) - CSS 'text-align' value

ABOUT

  Renders an H1 heading tag.

*/

const Title = ({ text, alignment }) => {

    return (

        <h1 style={{ textAlign: alignment }}>{text}</h1>

    );
    
};