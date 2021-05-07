import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import CardPrint from "../print/ComponentPrint";
import Upload from "../Upload"
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { submitAction } from "../action";
import { connect } from "react-redux";
import "../App/App.css";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    const {
      addPhoto,
      nameAndSurname,
      age,
      phoneno,
      address,
      postalCode,
      facebook,
      church,
      block,
      submitAction,
      
     
      
    } = this.props;

    return (
      <div>

        {/* <Upload/> */}
        
        <div style={{ display: "none" }}>
          <CardPrint
          
            addPhoto={addPhoto}
            nameAndSurname={nameAndSurname}
            age={age}
            phoneno={phoneno}
            address={address}
            postalCode={postalCode}
            facebook={facebook}
            church={church}
            block={block}
           
           
            ref={(el) => (this.componentRef = el)}
          />
        </div>
        <div>
          <Formik
            initialValues={{
              addPhoto: "",
              nameAndSurname:"",
              age:"",
              phoneno: "",
              address: "",
              postalCode: "",
              church:"",
              block:"",
              
            
            }}
            validationSchema={Yup.object().shape({
              addPhoto: Yup.string()
                .required("VALIDATION_FIELD_REQUIRED"),

                nameAndSurname: Yup.string()
                .required("VALIDATION_FIELD_REQUIRED"),

                age: Yup.string()
                .required("VALIDATION_FIELD_REQUIRED"),

                phoneno: Yup.string()
                .matches(/^[0-9]{10}$/, "Should be a number of length 10")
                .required("Contact Number is required"),

                address: Yup.string()
                .required("Address is Required"),

              block: Yup.string()
              .required("Address is Required"),
            })}

            onSubmit={(fields) => {
              submitAction(fields);
            }}

            render={({ errors, status, touched }) => (
              <Form >
                <label className="header">Visionaries Of The ALTAR </label>
               
                <div>
                  <label for="addPhoto">Add Photo</label>

                  <Upload
                    name="addPhoto"
                    type="file"
                    className={
                      "" +
                      (errors.addPhoto && touched.addPhoto ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="addPhoto"
                    component="div"
                    className="invalid-feedback"
                  />
                  
                </div>
                <div >
                  <label className="Text-inputs label" for="nameAndSurname">Name & Surname:  </label>

                  <Field
                
                    name="nameAndSurname"
                    type="text"
                    placeholder="Your name and surname please"
                    className={
                      "Text-inputs" +
                      (errors.pincode && touched.pincode ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="nameAndSurname"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div >
                  <label className="Text-inputs label" for="facebook">Facebook Name:  </label>
                  <Field
                    name="facebook"
                    type="text"
                    placeholder="Your facebook username please"
                    className={
                      "Text-inputs" +
                      (errors.facebook && touched.facebook ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="facebook"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              
                <div >
                  <label className="Text-inputs label" for="age">Age:  </label>
                  <Field
                    name="age"
                    type="text"
                    placeholder="Your age please"
                    className={
                      "Text-inputs"+
                      (errors.pincode && touched.pincode ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="age"
                    component="div"
                    className="invalid-feedback"
              />
                </div>
                <div >
                  <label className="Text-inputs label" for="phoneno">Contact Number: </label>
                  <Field
                    name="phoneno"
                    type="phoneno"
                    placeholder="Your contact number please"
                    className={
                      "Text-inputs" +
                      (errors.phoneno && touched.phoneno ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="phoneno"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div >
                  <label className="Text-inputs label" for="address">Address: </label>
                  <Field
                    name="address"
                    type="address"
                    placeholder="Your current home adress please"
                    className={
                      "Text-inputs"+
                      (errors.address && touched.address ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="invalid-feedback"
                  />
                 </div>
                <div >
                  <label className="Text-inputs label" for="postalCode">Postal Code: </label>
                  <Field
                    name="pincode"
                    type="pincode"
                    placeholder="Your Postal number please"
                    className={
                      "Text-inputs" +
                      (errors.pincode && touched.pincode ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="pincode"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div >
                  <label className="Text-inputs label" for="block">Block:  </label>
                  <Field
                    name="block"
                    type="text"
                    placeholder="Your church block please"
                    className={
                      "Text-inputs" +
                      (errors.block && touched.block? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="block"
                    component="div"
                    className="invalid-feedback"
                  />
                 </div>
                <div >
                  <label className="Text-inputs label" for="church">Church:  </label>
                  <Field
                    name="church"
                    type="text"
                    placeholder="Your church name please"
                    className={
                      "Text-inputs"+
                      (errors.block && touched.block ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="church"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div >
                  <button className="Input-button">
                    Register
                  </button>
                
                </div>
                <ReactToPrint
          trigger={() => (

            <button
              style={{
                textAlign: "center",
                marginLeft: "50%",
                backgroundColor: "lemonchiffon",
                width: "62px",
              }}
            >
              Print
            </button>
          )}
          content={() => this.componentRef}
        />
              </Form>
            )}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  addPhoto: state.addPhoto,
  nameAndSurname: state.nameAndSurname,
  age: state.age,
  facebook: state.facebook,
  phoneno: state.phoneno,
  address: state.address,
  pincode: state.postalCode,
  block: state.block,
  church: state.church,

});

const mapDispatchToProps = (dispatch) => ({
  submitAction: (data) => dispatch(submitAction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Card);
