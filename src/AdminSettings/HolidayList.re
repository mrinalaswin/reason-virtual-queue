[@react.component]
let make = () =>
  <>
    <table>
      <thead>
        <tr>
          <th> {React.string("id")} </th>
          <th> {React.string("Date")} </th>
          <th> {React.string("Description")} </th>
          <th> {React.string("Action")} </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> {React.string("1")} </td>
          <td> {React.string("12-10-2020")} </td>
          <td> {React.string("test")} </td>
          <td>
            <a href="#"> {React.string("Edit")} </a>
            <a href="#"> {React.string("Delete")} </a>
          </td>
        </tr>
        <tr>
          <td> <input type_="text" disabled=true /> </td>
          <td> <input type_="date" /> </td>
          <td> <input type_="text" /> </td>
          <td> <a href="#"> {React.string("Add")} </a> </td>
        </tr>
      </tbody>
    </table>
  </>;