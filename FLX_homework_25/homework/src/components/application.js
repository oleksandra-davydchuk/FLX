import React from "react";
import SearchInput from "./SearchInput";
import UsersTable from "./UsersTable";
import UsersMore from "./UsersMore";

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchInput />
        <UsersTable />
        <UsersMore />
      </div>
    );
  }
}

export default App;
