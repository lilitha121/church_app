const React = require('react')
class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div>
        <input type="file"  onChange={this.handleChange}
          withIcon={true}
          buttonText='Choose images'
          
         
      />
        
        <img alt="" 
        src={this.state.file}
         imgExtension={['.jpg', '.gif', '.png', '.gif']}
         maxFileSize={5242880}
        />
      </div>
    );
  }
}
export default Upload