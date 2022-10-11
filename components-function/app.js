/*

COMPONENT: App

PROPS

  none

ABOUT

  This is the core of the React application. It's responsible for things like:

    * Loading initial data from a JSON file
    * Handles a few state changes from child components (see React concept 'lifting state')
    * Renders the core structure of the application, including setup of child components (see render() method at bottom of this file)

*/

const App = () => {

    // (array of objects) Initial list of trail data
    const [trailData, setTrailData] = React.useState([]);

    // (array of objects) Filtered list of trail data
    const [filteredTrailData, setFilteredTrailData] = React.useState([]);

    // References to HTML elements that will be acesssed in code
    const refTypeAhead = React.useRef(null);
    const refRating = React.useRef(null);
    
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

        updateFilteredData(null, value);

    };

    // Resets data to initial state
    const resetData = () => {

        setFilteredTrailData(trailData);

    };

    // TODO: move filter values to state in App and pass value down as a property
    // TODO: rewrite reset functions to alter state here

    // Reset filters and data
    const resetFilters = () => {

        console.log(`refRating.current: ${refRating.current}`);
        console.log(`refTypeAhead.current: ${refTypeAhead.current}`);

        refRating.current.resetFilter();
        refTypeAhead.current.resetFilter();
        //resetData();

    };

    // Updates trail data based on filters and sets new state
    const updateFilteredData = (trailName, rating) => {

        console.log(`refRating.current: ${refRating.current}`);
        console.log(`refTypeAhead.current: ${refTypeAhead.current}`);

        let output = [];

        if (trailName) {          
            refRating.current.resetFilter();
            output = trailData.filter(trail => trail.name.includes(trailName) );
        }

        if (rating) {
            refTypeAhead.current.resetFilter();
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
                    id="TypeHeadFilter"
                    label="Filter by Name"
                    onTypeAheadChange={typeAheadChange} 
                    ref={refTypeAhead} />

                <Rating 
                    id="RatingFilter"
                    label="Rating (difficulty)"
                    onRatingChange={ratingChange} 
                    ref={refRating} />

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
