import React from 'react';

// export default class Weather extends Component{
//   render(){
//     return(
//       <div>
//         {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
//         {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
//         {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
//         {this.props.description && <p>Description: {this.props.description}</p>}
//         {this.props.error && <p>{this.props.error}</p>}
//       </div>
//     )
//   }
// }

const Weather = props => (
    <div>
      {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Description: {props.description}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  );


export default  Weather;