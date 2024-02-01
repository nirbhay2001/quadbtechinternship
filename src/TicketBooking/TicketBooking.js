// import React, { useState } from "react";


// const TicketBooking = () => {


//   const [formData, setFormData] = useState({
//     genre: '',
//     name: "",
//     address: "",
    
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleBookTicket = () => {
//     // Save data to local storage
//     const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     bookings.push(formData);
//     localStorage.setItem("bookings", JSON.stringify(bookings));

//     // Clear form data
//     setFormData({
//       genre: '',
//       name: "",
//       address: "",
//     });
//   };

//   // Display booked tickets from local storage
//   const bookedTickets = JSON.parse(localStorage.getItem("bookings")) || [];

//   return (
//     <div className="container mt-5" style={{ maxWidth: "450px" }}>
//       <h1 style={{ color: "white" }}>Ticket Booking Form</h1>
//       <form>
//       <div className="mb-3">
//   <label htmlFor="showName" className="form-label" style={{ color: "white" }}>
//     Show Name
//   </label>
//   <input
//     type="text"
//     className="form-control"
//     id="genre"
//     name="genre"
//     value={formData.genre}
//     onChange={handleChange}

//   />
// </div>

//         <div className="mb-3">
//           <label
//             htmlFor="genre"
//             className="form-label"
//             style={{ color: "white" }}
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-3">
//           <label
//             htmlFor="address"
//             className="form-label"
//             style={{ color: "white" }}
//           >
//             Address
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//         </div>

//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={handleBookTicket}
//         >
//           Book Ticket
//         </button>
//       </form>

//       {bookedTickets.length > 0 && (
//         <div className="mt-5">
//           <h2 style={{ color: "white" }}>Booked Tickets</h2>
//           <ul>
//             {bookedTickets.map((ticket, index) => (
//               <li key={index} style={{ color: "white" }}>
//                 <strong>Name:</strong> {ticket.name}, <strong>Address:</strong>{" "}
//                 {ticket.address}, <strong>Genre:</strong> {ticket.genre}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TicketBooking;









import React, { useState } from "react";

const TicketBooking = () => {
  const [formData, setFormData] = useState({
    genre: '',
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBookTicket = () => {
    // Save data to local storage
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(formData);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Clear form data
    setFormData({
      genre: '',
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  // Display booked tickets from local storage
  const bookedTickets = JSON.parse(localStorage.getItem("bookings")) || [];

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <h1 style={{ color: "white" }}>Ticket Booking Form</h1>
      <form>
        <div className="mb-3">
          <label
            htmlFor="showName"
            className="form-label"
            style={{ color: "white" }}
          >
            Show Name
          </label>
          <input
            type="text"
            className="form-control"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="name"
            className="form-label"
            style={{ color: "white" }}
          >
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
            style={{ color: "white" }}
          >
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="phone"
            className="form-label"
            style={{ color: "white" }}
          >
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="address"
            className="form-label"
            style={{ color: "white" }}
          >
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleBookTicket}
        >
          Book Ticket
        </button>
      </form>

      {bookedTickets.length > 0 && (
        <div className="mt-5">
          <h2 style={{ color: "white" }}>Booked Tickets</h2>
          <ul>
            {bookedTickets.map((ticket, index) => (
              <li key={index} style={{ color: "white" }}>
                <strong>Name:</strong> {ticket.name}, <strong>Email:</strong>{" "}
                {ticket.email}, <strong>Phone:</strong> {ticket.phone},{" "}
                <strong>Genre:</strong> {ticket.genre}, <strong>Address:</strong>{" "}
                {ticket.address}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TicketBooking;

