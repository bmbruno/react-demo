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

class App extends React.Component
{
    
    constructor(props) {

        super(props);

        this.state = {

            // Initial list of trail data (array of objects)
            trailData: [],

            // Filtered list of trail data (array of objects)
            filteredTrailData: [],

            // Value of TypeAhead filter control (string)
            valueTypeAhead: '',

            // Value of Rating filter control (string)
            valueRating: ''
          
        };

        // Initial bindings for interactive elements (boilerplate code required for class-based components)
        this.typeAheadChange = this.typeAheadChange.bind(this);
        this.ratingChange = this.ratingChange.bind(this);
        this.resetFilters = this.resetFilters.bind(this);
        this.updateFilteredData = this.updateFilteredData.bind(this);
        this.resetTypeAhead = this.resetTypeAhead.bind(this);
        this.resetRating = this.resetRating.bind(this);
        this.resetData = this.resetData.bind(this);

    }

    // React lifecycle method (called after the component instantiates but before it renders)
    // For this application, this function loads the initial data from a JSON file using window.fetch()
    async componentDidMount () {

        try 
        {
            let result = await fetch("https://www.brandonbruno.com/sites/code/reactdemo/trails.json", { mode: 'cors' });
            let jsonData = await result.json();
            
            this.setState({ 
                trailData: jsonData, 
                filteredTrailData: jsonData,
            });
        }
        catch (exc)
        {
            console.log(`EXCEPTION fetching trail data: ${exc}`);
        }

    }

    // Handles the type-ahead input change event
    typeAheadChange (value) {

        if (value.length > 2) {
            this.setState({ valueTypeAhead: value });
            this.updateFilteredData(value, null);
        } else {
            this.resetData();
        }
    }

    // Update data when rating filter changes
    ratingChange (value) {

        this.setState({ valueRating: value });
        this.updateFilteredData(null, value);

    }

    // Updates trail data based on filters and sets new state
    updateFilteredData (trailName, rating) {

        let output = [];

        if (trailName) {
            this.resetRating();
            output = this.state.trailData.filter(trail => trail.name.includes(trailName) );
        }

        if (rating) {
            this.resetTypeAhead();
            output = this.state.trailData.filter(trail => trail.rating == rating);
        }

        this.setState({ filteredTrailData: output });

    }

    // Resets data to initial state
    resetData () {

        this.setState({ filteredTrailData: this.state.trailData });

    }

    // Resets the TypeAhead component value
    resetTypeAhead () {

        this.setState({
            valueTypeAhead: ''
        });

        // This is kind of hacky; clearing this input here to simpliy the TypeAhead component
        document.getElementById("TypeAheadFilter").value = "";

    }

    // Resets the Rating component value
    resetRating () {

        this.setState({
            valueRating: ''
        });

    }

    // Reset filters and data
    resetFilters () {

        this.resetTypeAhead();
        this.resetRating();
        this.resetData();

    }

    // Render's the application structure and child components
    render () {

        return (

            <>

                <Title
                    text="Hiking Trails of North Georgia" 
                    alignment="center" />

                <div className="filters">

                    <TypeAhead
                        id="TypeAheadFilter"
                        label="Filter by Name"
                        value={this.state.valueTypeAhead}
                        onTypeAheadChange={this.typeAheadChange} />

                    <Rating 
                        id="RatingFilter"
                        label="Rating (difficulty)"
                        value={this.state.valueRating}
                        onRatingChange={this.ratingChange} />

                </div>

                <div style={{ textAlign: "center" }}>
                    <button className="btn" onClick={this.resetFilters}>Clear Filters</button>
                </div>

                <ul className="trail-list">
                  
                    {this.state.filteredTrailData.map(element => (

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
    }
}