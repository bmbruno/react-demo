class App extends React.Component
{
  constructor(props) {

    super(props);

    this.state = {
      trailData: [],
      filteredTrailData: []
    }

    this.typeAheadChange = this.typeAheadChange.bind(this);
    this.ratingChange = this.ratingChange.bind(this);
    this.resetFilters = this.resetFilters.bind(this);

    this.refTypeAhead = React.createRef();
    this.refRating = React.createRef();

  }

  async componentDidMount() {

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

  // Update data when type-ahead input changes
  typeAheadChange(value) {

    if (value.length > 2) {
      this.updateFilteredData(value, null);
    } else {
      this.resetData();
    }
  }

  // Update data when rating filter changes
  ratingChange(value) {

    this.updateFilteredData(null, value);

  }

  // Updates data based on filters and sets new state
  updateFilteredData(trailName, rating) {

    let output = [];

    if (trailName) {
      this.refRating.current.resetFilter();
      output = this.state.trailData.filter(trail => trail.name.includes(trailName) );
    }

    if (rating) {
      this.refTypeAhead.current.resetFilter();
      output = this.state.trailData.filter(trail => trail.rating == rating);
    }

    this.setState({ filteredTrailData: output });

  }

  // Resets data to initial state
  resetData() {

    this.setState({ filteredTrailData: this.state.trailData });

  }

  // Reset filters and data
  resetFilters() {

    this.refRating.current.resetFilter();
    this.refTypeAhead.current.resetFilter();
    this.resetData();

  }

  render() {
    return (

      <>

        <Title
          text="Hiking Trails of North Georgia" 
          alignment="center" />

        <div className="filters">

          <TypeAhead
            id="typeahead123"
            label="Filter by Name"
            onTypeAheadChange={this.typeAheadChange} 
            ref={this.refTypeAhead} />

          <Rating 
            id="RatingFilter"
            label="Rating (difficulty)"
            onRatingChange={this.ratingChange} 
            ref={this.refRating} />

        </div>

        <div style={{ textAlign: "center" }}>
          <button className="btn" onClick={this.resetFilters}>Clear Filters</button>
        </div>

        <ul className="trail-list">
          
          {this.state.filteredTrailData.map(data => (

            <li key={data.name}>

              <Trail
                trailName={data.name}
                type={data.type} 
                length={data.length}
                rating={data.rating}
                image={data.image} />

            </li>

          ))}

        </ul>

      </>
    );
  }
}