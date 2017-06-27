// this needs some work
import axios from 'axios';

export function loadPrefsFromServer(){
  axios.get(this.props.url)
    .then(res => {
      if(res.data.preferences) {
        this.setState({
          prefsList: res.data.preferences
        })
      }
    }).catch(err => {
      console.error(err);
    });
}
