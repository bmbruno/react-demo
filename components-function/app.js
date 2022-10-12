/*

COMPONENT: App

PROPS

  none

ABOUT

  This is the core of the React application. It's responsible for things like:

    * Loading initial data from a JSON file
    * Handles a few state changes from child components (see React concept 'lifting state')
    * Renders the core structure of the application, including setup of child components (see return() block at bottom of this file)

*/

const App = () => {

    // Initial list of trail data (array of objects)
    const [trailData, setTrailData] = React.useState([]);

    // Filtered list of trail data (array of objects)
    const [filteredTrailData, setFilteredTrailData] = React.useState([]);

    // Value of TypeAhead filter control (string)
    const [valueTypeAhead, setTypeAhead] = React.useState('');

    // Value of Rating filter control (string)
    const [valueRating, setRating] = React.useState('');
    
    // React Hook: in this case, useEffect fires once when the component is loaded to handle the same logic as 'componentDidMount' in the class version of this component
    // For this application, this function loads the initial data from a JSON file using window.fetch()
    React.useEffect(async () => {

        try 
        {
            let result = await fetch("https://www.brandonbruno.com/sites/code/reactdemo/trails.json", { mode: 'cors' });
            let jsonData = await result.json();
            
            setTrailData(jsonData);
            setFilteredTrailData(jsonData);
        }
        catch (exc)
        {
            console.log(`EXCEPTION fetching trail data: ${exc}`);
        }

    }, []);

    // Handles the type-ahead input change event
    const typeAheadChange = (value) => {

        if (value.length > 2) {
            updateFilteredData(value, null);
        } else {
            resetData();
        }

    };

    // Update data when rating filter changes
    const ratingChange = (value) => {

        setRating(value);
        updateFilteredData(null, value);

    };

    // Resets data to initial state
    const resetData = () => {

        setFilteredTrailData(trailData);

    };

    // Resets the TypeAhead component value
    const resetTypeAhead = () => {

        setTypeAhead('');
        
        // This is kind of hacky; clearing this input here to simpliy the TypeAhead component
        document.getElementById("TypeAheadFilter").value = "";

    };

    // Resets the Rating component value
    const resetRating = () => {

        setRating('');

    };

    // Reset filters and data
    const resetFilters = () => {

        resetTypeAhead();
        resetRating();
        resetData();

    };

    // Updates trail data based on filters and sets new state
    const updateFilteredData = (trailName, rating) => {

        let output = [];

        if (trailName) {          
            resetRating();
            output = trailData.filter(trail => trail.name.includes(trailName) );
        }

        if (rating) {
            resetTypeAhead();
            output = trailData.filter(trail => trail.rating == rating);
        }

        setFilteredTrailData([...output]);

    }

    return (

        <>

            <Title
                text="Hiking Trails of North Georgia" 
                alignment="center" />

            <div className="filters">

                <TypeAhead
                    id="TypeAheadFilter"
                    label="Filter by Name"
                    onTypeAheadChange={typeAheadChange} 
                    value={valueTypeAhead} />

                <Rating 
                    id="RatingFilter"
                    label="Rating (difficulty)"
                    onRatingChange={ratingChange} 
                    value={valueRating} />

            </div>

            <div style={{ textAlign: "center" }}>
                <button className="btn" onClick={resetFilters}>Clear Filters</button>
            </div>

            <ul className="trail-list">
              
                {filteredTrailData.map(element => (

                    <li key={element.name}>

                        <Trail
                            trailName={element.name}
                            type={element.type} 
                            length={element.length}
                            rating={element.rating}
                            image={element.image} />

                    </li>

                ))}

            </ul>

        </>

    );
  
};
