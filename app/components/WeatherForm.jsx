var React = require('react');

var WeatherForm = React.createClass({
  weatherFormSubmit: function(e){
    console.log(e);
    e.preventDefault();
    var location = this.refs.location.value;
    if( location.length ){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return (
      <form onSubmit={this.weatherFormSubmit}>
        <input type="text" ref="location"/>
        <button type="submit">Get Weather</button>
      </form>
    );
  }
});
module.exports = WeatherForm;
