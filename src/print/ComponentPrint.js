import React, { Component } from 'react'
// import { connect } from 'react-redux';
export default class CardPrint extends Component {
    render() {
        const {addPhoto,nameAndSurname,facebook,age,phoneno,address,postalCode,church,block}=this.props
        return (
            <div>
                <div style={{textAlign:'center',paddingLeft:'30px',fontSize:'30px',color:'green'}}>The visionaries of the altar</div>
                
                <div style={{display:'flex' ,padding:'20px 20px 20px 50px '}}>
                <div style={{color:'Black',paddingRight:'10px',fontSize:'22px'}}>addPhoto:</div>
                <div style={{fontSize:'22px'}}>{addPhoto}</div>
                </div >
                <div style={{display:'flex',padding:'20px 20px 20px 50px '}}>
                 <div style={{color:'Black',paddingRight:'10px',fontSize:'22px'}}>Name and Surname:</div>
                 <div style={{fontSize:'22px'}}>{nameAndSurname}</div>
                </div>
                <div style={{display:'flex',padding:'20px 20px 20px 50px '}}>
                 <div style={{color:'Black',paddingRight:'10px',fontSize:'22px'}}>Facebook Name:</div>
                 <div style={{fontSize:'22px'}}>{facebook}</div>
                </div>
                <div style={{display:'flex',padding:'20px 20px 20px 50px '}}>
                 <div style={{color:'Black',paddingRight:'10px',fontSize:'22px'}}>Age:</div>
                 <div style={{fontSize:'22px'}}>{age}</div>
                </div>
                <div style={{display:'flex' ,padding:'20px 20px 20px 50px '}}>
                   <div style={{color:'Black',paddingRight:'10px',fontSize:'22px'}}>PhoneNo:</div>
                   <div style={{fontSize:'22px'}}>{phoneno}</div> 
                </div>
                <div style={{display:'flex' ,padding:'20px 20px 20px 50px '}}>
                 <div style={{color:'Black',paddingRight:'10px',fontSize:'22px'}}>Address:</div>
                 <div style={{fontSize:'22px'}}>{address}</div> 
                </div>
                <div style={{display:'flex',padding:'20px 20px 20px 50px '}}>
                 <div style={{color:'Black',paddingRight:'10px',fontSize:'22px'}}>postalCode:</div>
                 <div style={{fontSize:'22px'}}>{postalCode}</div>
                </div>
                <div style={{display:'flex' ,padding:'20px 20px 20px 50px '}}>
                 <div style={{color:'Black',paddingRight:'10px',fontSize:'22px'}}>Church:</div>
                 <div style={{fontSize:'22px'}}>{church}</div> 
                </div>
                <div style={{display:'flex' ,padding:'20px 20px 20px 50px '}}>
                 <div style={{color:'Black',paddingRight:'10px',fontSize:'22px'}}>Block:</div>
                 <div style={{fontSize:'22px'}}>{block}</div> 
                </div>
            </div>
        )
    }
}

 
 