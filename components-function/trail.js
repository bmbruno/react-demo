/*

COMPONENT: Trail

PROPS

  * trailName (string) - name of the trail
  * image (string) - URL of the trail image
  * type (string) - type label of the trail
  * length (number) - length of trail in miles
  * rating (number) - difficulty rating

ABOUT

  Renders a trail card (title, image, info, etc.).

*/

const Trail = ({ trailName, image, type, length, rating }) => {

    const convertMilesToKM = (miles) => {

        return (miles * 1.609344).toFixed(2);

    };

    return (

        <div className="trail-detail">
            <h3>{trailName}</h3>
            <div>
                <img src={image} alt={`Image of ${trailName} hike.`} />

                <div className="stats">
                    <div className="stat">
                        <h4>Type</h4>
                        <span>{type}</span>
                    </div>
                    <div className="stat">
                        <h4>Length</h4>
                        <span>{length} mi / {convertMilesToKM(length)} km</span>
                    </div>
                    <div className="stat">
                        <h4>Rating</h4>
                        <span className={`${rating} rating`}>{rating}</span>
                    </div>
                </div>
            </div>
        </div>

    );

};