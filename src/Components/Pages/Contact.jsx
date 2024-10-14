import React, { useState } from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './Contact.css'; // Create a Contact.css file for custom styling

function Contact() {
  const [showDialog, setShowDialog] = useState(false);

  const handleToggleDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-80 bg-black">
      <div className="poster">
        <img src="https://www.mentalup.co/img/blog/the-importance-of-education.jpg" alt="" />
      </div>

      {showDialog && (
        <div className="dialog">
          <div className="dialog-content">
            <div className="text-right">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleToggleDialog}
              ></button>
            </div>
            <form
              id="form"
              className="text-center bg-gray-900 border-gray-200 dark:bg-gray-900 p-4 rounded"
              style={{ width: '100%', maxWidth: '300px', marginTop: 'px' }}
            >
              <h2 className="text-white">Contact us</h2>

              <MDBInput label="Name" v-model="name" wrapperClass="mb-4" />

              <MDBInput
                type="email"
                label="Email address"
                v-model="email"
                wrapperClass="mb-4"
              />

              <MDBInput label="Subject" v-model="subject" wrapperClass="mb-4" />

              <MDBTextArea wrapperClass="mb-4" label="Message" />

              <MDBCheckbox
                wrapperClass="d-flex justify-content-center"
                label="Send me a copy"
              />

              <MDBBtn color="primary" block className="my-4">
                Send
              </MDBBtn>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        className="open-dialog-btn"
        onClick={handleToggleDialog}
      >
        Open Contact Form
      </button>
    </div>
  );
}

export default Contact;
