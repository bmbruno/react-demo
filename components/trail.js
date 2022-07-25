/*

COMPONENT: Trail

PROPS

  * trailName (string) - name of the trail
  * image (string) - URL of the trail image
  * type (string) - type label of the trail
  * length (number) - length of trail in miles
  * rating ()

ABOUT

  Renders a trail card (title, image, info, etc.).

*/

class Trail extends React.Component {

    constructor(props) {
        super(props);
    }

    convertMilesToKM(miles)
    {
        return (miles * 1.609344).toFixed(2);
    }

    render() {
        return (

            <div className="trail-detail">
                <h3>{this.props.trailName}</h3>
                <div>
                    <img src={this.props.image} alt={`Image of ${this.props.trailName} hike.`} />

                    <div className="stats">
                        <div className="stat">
                            <h4>Type</h4>
                            <span>{this.props.type}</span>
                        </div>
                        <div className="stat">
                            <h4>Length</h4>
                            <span>{this.props.length} mi / {this.convertMilesToKM(this.props.length)} km</span>
                        </div>
                        <div className="stat">
                            <h4>Rating</h4>
                            <span className={`${this.props.rating} rating`}>{this.props.rating}</span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}