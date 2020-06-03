[@react.component]
let make = () =>
  <>
    <p>
      <label>
        {React.string("What is the start time of the delivery?")}
        <p> <input type_="time" /> </p>
      </label>
    </p>
    <p>
      <label>
        {React.string("What is the end time of the delivery?")}
        <p> <input type_="time" /> </p>
      </label>
    </p>
    <p>
      <label>
        {React.string("When are the holidays?")}
        <HolidayList />
      </label>
    </p>
    <p>
      {React.string("Do you want to stop the service temporarily?")}
      <p> <button> {React.string("Stop Temporarily")} </button> </p>
    </p>
    <p>
      <label> {React.string("Where are the stores?")} <StoreList /> </label>
    </p>
    <p>
      <label>
        {React.string("What is the slot duration?")}
        <p>
          <select>
            <option> {React.string("15 minutes")} </option>
            <option> {React.string("30 minutes")} </option>
          </select>
        </p>
      </label>
    </p>
    <p>
      <label>
        {React.string("How many users are allowed during a slot per store?")}
        <p>
          <select>
            <option> {React.string("20")} </option>
            <option> {React.string("30")} </option>
            <option> {React.string("50")} </option>
          </select>
        </p>
      </label>
    </p>
    <p>
      <label>
        {React.string(
           "What is the penalty duration for a user failing to be present?",
         )}
        <p>
          <select>
            <option> {React.string("2 days")} </option>
            <option> {React.string("3 days")} </option>
            <option> {React.string("5 days")} </option>
          </select>
        </p>
      </label>
    </p>
  </>;