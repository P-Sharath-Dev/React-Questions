// Stores all customer records
let customers = [];

// Restaurant capacity details
const capacity = 25;
let seatsLeft = 25;

// Refs for accessing form input values
let customerCountRef = React.createRef();
let customerNameRef = React.createRef();
let customerPhoneRef = React.createRef();

// Handles adding a new customer entry
const SubmitHandler = (event) => {
  event.preventDefault();

  // Create customer object with check-in time
  let customer = {
    count: customerCountRef.current.value,
    name: customerNameRef.current.value,
    phone: customerPhoneRef.current.value,
    checkIn: new Date().toLocaleTimeString("en-US", {
      hour12: true,
    }),
    checkOut: "",
    status: "Click to Checkout",
  };

  const count = Number(customerCountRef.current.value);

  // Prevent booking if seats are not available
  if (count > seatsLeft) {
    alert("Guest count exceeds capacity.");
    return;
  }

  // Add latest customer at the top of the table
  customers.unshift(customer);

  // Update available seats
  seatsLeft -= Number(customer.count);

  // Clear form fields after successful submission
  customerCountRef.current.value = "";
  customerNameRef.current.value = "";
  customerPhoneRef.current.value = "";

  // Re-render UI with updated data
  rootElement.render(<App />);
};

// Marks customer as checked out and frees seats
function checkOut(index) {
  // Prevent multiple checkouts for the same customer
  if (customers[index].checkOut === "") {
    // Store checkout time
    customers[index].checkOut = new Date().toLocaleTimeString("en-US", {
      hour12: true,
    });

    // Update customer status
    customers[index].status = "Checked Out";

    // Return occupied seats back to available seats
    seatsLeft += Number(customers[index].count);

    // Re-render UI with updated data
    rootElement.render(<App />);
  }
}

// Deletes a customer record
function deleteCustomer(index) {
  // Return seats only if customer hasn't checked out
  if (customers[index].checkOut === "") {
    seatsLeft += Number(customers[index].count);
  }

  // Remove customer from records
  customers.splice(index, 1);

  // Re-render UI with updated data
  rootElement.render(<App />);
}

const App = () => (
  <div className="App" style={{ textAlign: "center" }}>
    <div>
      <h2>Total Capacity: {capacity}</h2>
      <h2>Seats Left: {seatsLeft}</h2>
    </div>

    {/* Customer entry form */}
    <form action="" onSubmit={SubmitHandler}>
      <input type="number" placeholder="Guests Count" ref={customerCountRef} />
      <br />

      <input
        type="text"
        placeholder="Primary Guest Name"
        ref={customerNameRef}
      />
      <br />

      <input type="number" placeholder="Phone Number" ref={customerPhoneRef} />
      <br />
      <br />

      <button>Add Entry</button>
    </form>

    <br />

    {/* Table showing all customer records */}
    <table border="1px" style={{ margin: "auto" }}>
      <thead>
        <tr>
          <th>Count</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Status</th>
          <th>Remove Entry</th>
        </tr>
      </thead>

      <tbody>
        {customers.map((customer, index) => {
          return (
            <tr key={index}>
              <td>{customer.count}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.checkIn}</td>
              <td>{customer.checkOut}</td>

              {/* Click status to checkout customer */}
              <td
                onClick={() => {
                  checkOut(index);
                }}
              >
                {customer.status}
              </td>

              {/* Remove customer entry */}
              <td
                onClick={() => {
                  deleteCustomer(index);
                }}
              >
                Delete
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
