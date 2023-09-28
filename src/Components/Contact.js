import React,{useState} from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Contact details page
// const Contact = () => {
//     const [formStatus, setFormStatus] = React.useState('Send')

//     const onSubmit = (e) => {
//         e.preventDefault()
//         setFormStatus('Submitted')
//         const { name, email, message } = e.target.elements
//         let conFom = {
//             name: name.value,
//             email: email.value,
//             message: message.value,
//         }
//         console.log(conFom)
//         toast.success('Message send successfully', {
//             position: toast.POSITION.TOP_CENTER
//         });
//     }
//     return (

//         <div>
            
//             <div className="container mt-5">
//             <h2 className="mb-3"><i>24*7 Customer Services</i></h2>
//             <h3 className="mb-3"><i>Contact us 📞</i></h3>
//             <form onSubmit={onSubmit}>
//                 <div className="mb-3">
//                     <label className="form-label" htmlFor="name">
//                         Name
//                     </label>
//                     <input className="form-control" type="text" id="name" required />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label" htmlFor="email">
//                         Email
//                     </label>
//                     <input className="form-control" type="email" id="email" required />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label" htmlFor="message">
//                         Message
//                     </label>
//                     <textarea className="form-control" id="message" required />
//                 </div>
//                 <button className="btn btn-danger" type="submit" style={{marginLeft: "30px"}}>
//                     Submit
//                 </button>
                
//                 <NavLink to='/' className="text-decoration-none text-light mx-3">
//                 <button className="btn btn-success" type="submit" style={{marginLeft: "10px"}}>
//                     Back to Home
//                 </button>
//                 </NavLink>
//                 <ToastContainer />
//                 <div className="col-md-6">
//                     <div className="map_main">
//                         <div className="map-responsive">
//                             <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" height={360} frameBorder={0} style={{ border: 0, width: '100%' }} allowFullScreen />
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//         </div>
        
//     )
// }
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setmessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        toast.success('Message send successfully', {
            position: toast.POSITION.TOP_CENTER
        });

        setName('');
        setEmail('');
        setmessage('');
    }
    return (

        <div>
            
            <div className="container mt-5">
            <h2 className="mb-3"><i>24*7 Customer Services</i></h2>
            <h3 className="mb-3"><i>Contact us 📞</i></h3>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                        Name
                    </label>
                    <input className="form-control" type="text" id="name" required  onChange={event => setName(event.target.value)}
            value={name}/>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input className="form-control" type="email" id="email" required  onChange={event => setEmail(event.target.value)}
            value={email}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                        Message
                    </label>
                    <textarea className="form-control" id="message" required  onChange={event => setmessage(event.target.value)}
            value={message}/>
                </div>
                <button className="btn btn-danger" type="submit" style={{marginLeft: "30px"}}>
                    Submit
                </button>
                
                <NavLink to='/' className="text-decoration-none text-light mx-3">
                <button className="btn btn-success" type="submit" style={{marginLeft: "10px"}}>
                    Back to Home
                </button>
                </NavLink>
                <ToastContainer />
                <div className="col-md-6">
                    <div className="map_main">
                        <div className="map-responsive">
                            <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" height={360} frameBorder={0} style={{ border: 0, width: '100%' }} allowFullScreen />
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
        
    )
}

export default Contact
