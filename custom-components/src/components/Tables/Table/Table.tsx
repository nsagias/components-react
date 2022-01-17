import React, { useState } from "react";
import "./Table.css";

const data = {
  tableName : "A Table",
  tableHeaderList: [ 
    {id: 1, headerName:"Company"}, 
    {id: 2, headerName:"Contact"},
    {id: 3, headerName:"Country"}
  ],
  tableCaption: "This is the caption tag!",
  contactList:
  [
    { id: 1, company: "Alfreds", contact: "Mary Mary", country: "Canada" },
    { id: 2, company: "Bergman", contact: "Chstina Tina", country: "France" },
    { id: 3, company: "Charlie", contact: "Bob Dingo", country: "Australia" },
    { id: 4, company: "Darwin", contact: "Dr. Darwin", country: "United Kingdom" },
    { id: 5, company: "Ever Fun", contact: "Fun Police", country: "United States" },
    { id: 6, company: "Form and Able", contact: "Stundent Somewhere", country: "Spain" },
    { id: 7, company: "Gregarious Social", contact: "QRCode Avatar", country: "Norway" },
    { id: 8, company: "Hip", contact: "Everyone is cool here", country: "Italy" },
    { id: 9, company: "I.O.", contact: "Any Myth", country: "Greece" }
  ]
};

export default function Table() {
  const [tableName, setTableName] = useState(data.tableName);
  const [tableCaption, setTableCaption] = useState(data.tableCaption);
  const [headerList, setHeadList] = useState(data.tableHeaderList);
  const [contactList, setContactList] = useState(data.contactList);

 
 
  // const tableName = data.tableName;
  // const tableCaption = data.tableCaption;
  // const headerList = data.tableHeaderList;
  // const contactList = data.contactList;

  const parsedHeader = Array.isArray(headerList) && headerList.map(header => (
      <th key={header.id}>{header.headerName}</th>  
  ));

  const parsedContactList = Array.isArray(contactList) && contactList.map(contact => (
    <tr key={contact.id}>
      <td>{contact.company}</td>
      <td>{contact.contact}</td>
      <td>{contact.country}</td>
    </tr>
  ));


  return (
    <div>
    <h1>{tableName}</h1>
      <table className="customers">
      <caption>{tableCaption}</caption>
        <tbody>
        <tr>
        {parsedHeader}
        </tr>
         {parsedContactList}   
        </tbody>
      </table>
    </div>
  );
}