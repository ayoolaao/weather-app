import React from 'react';

// export default class Form extends Component{
//   render(){
//     return(
//       <form onSubmit={this.props.getWeather}>
//         <input type="text" name={"city"} placeholder={"City..."}/>
//         <input type="text" name={"country"} placeholder={"Country..."}/>
//         <button>Get Weather</button>
//       </form>
//     )
//   }
// }

const Form = props => (
      <form onSubmit={props.getWeather}>
        <input type="text" name={"city"} placeholder={"City..."}/>
        <input type="text" name={"country"} placeholder={"Country..."}/>
        <button>Get Weather</button>
      </form>
    );

export default Form