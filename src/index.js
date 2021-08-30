import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from '../store';

const ImgUpload = ({ onChange, src }) => {
  return (
    <label for="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload">
        {/* <img src={companyLogo} alt="BigCo Inc. logo"/> */}

        <img alt="Upload" src={src} />
      </div>
      <input id="photo-upload" type="file" onChange={onChange}/> 
    </label>
  );
};

const NameAndSurname = ({ onChange, value, change, val }) => {
  return (
      <form class="form-inline" action="/action_page.php">
      <span>name:</span>
      <input
        type="text"
        onChange={onChange}
        maxlength="25"
        value={value}
        placeholder="Name"
        required
      />
   <br>
   
   </br>
      <span>surname:</span>
      <input
        type="text"
        onChange={change}
        maxlength="25"
        value={val}
        placeholder="Surname"
        required
      />
    </form>
  );
  }
<br>

</br>
const AgeAndFacebook = ({ onChange, value, change, val}) => {
  return (
    <form class="form-inline" action="/action_page.php">

      <span>age:</span>
      <input
        type="numeric"
        onChange={onChange}
        maxlength="2"
        value={value}
        placeholder="age"
        required
        />
 
      <span>facebook:</span>
      <input
        type="text"
        onChange={change}
        maxlength="50"
        value={val}
        placeholder="facebook"
        required
      />
   </form>
  );
};
const CellAndAdress = ({ onChange, value, change, val }) => {
  return (
    <form class="form-inline" action="/action_page.php">

      <span>cell:</span>
      <input
        type="numeric"
        onChange={onChange}
        maxlength="10"
        value={value}
        placeholder="cellphone number"
        required
      />   
      <span>adress:</span>
      <input
        type="text"
        onChange={change}
        maxlength="35"
        value={val}
        placeholder="adress"
        required
      />
    </form>
  );
};
const ChurchAndBlock = ({ onChange, value, change, val }) => {
  return (
    <form class="form-inline" action="/action_page.php">

      <span>church:</span>
      <input
        type="text"
        onChange={onChange}
        maxlength="30"
        value={value}
        placeholder="church"
        required
      />

      <span>block:</span>
      <input
        type="text"
        onChange={change}
        maxlength="35"
        value={val}
        placeholder="block"
        required
      />
      <div>
      <span>Are you baptised in water?</span>
        <input type="radio" value="Yes" name="Yes" /> Yes
        <input type="radio" value="No" name="No" /> No
      </div>

        <br>
        </br>
        <div>
        <span>Are you baptised with the Holy Spirit?</span>
              <input type="radio" val="Yes" name="Yes" /> Yes
              <input type="radio" val="No" name="No" /> No
        </div>
   
    </form>
    
  );
};

const Reason = ({ onChange, value }) => {
  return (
    <div className="field">
      <span>Reason to serve God on the Altar:</span>
      <input
        type="text"
        onChange={onChange}
        maxlength="300"
        value={value}
        placeholder="Reason to serve on the Altar"
        required
      />
    </div>
  
  
  );
};

const Profile = ({
  onSubmit,
  src,
  nameAndSurname,
  ageAndFacebook,
  cellAndAdress,
  churchAndBlock,
  
  reason,
}) => {
  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <h1>Profile Card Of The Visionaries Of The Altar</h1>
        <label className="custom-file-upload fas">
          <div className="img-wrap">
            <img alt="Upload" src={src} />
          </div>
        </label>
        <div className="nameAndSurname">{nameAndSurname}</div>
        <div className="ageAndFacebook">{ageAndFacebook}</div> 
        <div className="cellAndAdress">{cellAndAdress}</div>
       
        <div className="churchAndBlock">{churchAndBlock}</div>

        <div className="reason">{reason}</div>
        <button type="submit" className="edit">
          Edit Profile{" "}
        </button>
      </form>
    </div>
  );
};

const Edit = ({ onSubmit, children }) => {
  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <h1>Profile Card Of The Visionaries Of The Altar</h1>
        {children}
        <button type="submit" className="save">
          Save{" "}
        </button>
      </form>
    </div>
  );
};

class CardProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl:
        "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true",
        nameAndSurname: "",
        ageAndFacebook: "",
        cellAndAdress:"",
        churchAndBlock: "",
    
      reason: "",
      active: "edit",
    };
  }
  photoUpload(e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }
  editName(e) {
    const nameAndSurname = e.target.value;
    this.setState({
      nameAndSurname,
    });
  }
  editAge(e) {
    const ageAndFacebook = e.target.value;
    this.setState({
      ageAndFacebook,
    });
  }
  editBlock(e) {
    const churchAndBlock = e.target.value;
    this.setState({
      churchAndBlock,
    });
  }
  editCell(e) {
    const cellAndAdress = e.target.value;
    this.setState({
      cellAndAdress,
    });
  }
  editReason(e) {
    const reason = e.target.value;
    this.setState({
      reason,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let activeP = this.state.active === "edit" ? "profile" : "edit";
    this.setState({
      active: activeP,
    });
  }

  render() {
    const {
      imagePreviewUrl,
      nameAndSurname,
      ageAndFacebook,
      cellAndAdress,
      churchAndBlock,
      
      reason,
      active,
    } = this.state;
    return (
      <div>
        {active === "edit" ? (
          <Edit onSubmit={(e) => this.handleSubmit(e)}>
            <ImgUpload
              onChange={(e) => this.photoUpload(e)}
              src={imagePreviewUrl}
            />
            <NameAndSurname onChange={(e) => this.editName(e)} value={nameAndSurname} />
            <AgeAndFacebook onChange={(e) => this.editAge(e)} value={ageAndFacebook} />
            <CellAndAdress onChange={(e) => this.editCell(e)} value={cellAndAdress} />
            <ChurchAndBlock onChange={(e) => this.editBlock(e)} value={churchAndBlock} />
            <Reason onChange={(e) => this.editReason(e)} value={reason} />
          </Edit>
        ) : (
          <Profile
            onSubmit={(e) => this.handleSubmit(e)}
            src={imagePreviewUrl}
            nameAndSurname={nameAndSurname}
            ageAndFacebook={ageAndFacebook}
            cellAndAdress={cellAndAdress}
            churchAndBlock={churchAndBlock}
            reason={reason}
          />
        )}
      </div>
      
    );
  }
}
<>
<CardProfile />,
</>
ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
