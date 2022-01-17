import React from "react";
import "./Table.css";

export default function Table() {



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

  
  const tableName = data.tableName;
  const tableCaption = data.tableCaption;
  const headerList = data.tableHeaderList;
  const contactList = data.contactList;
  // console.log(headerList)
  const parsedHeader = Array.isArray(headerList) && headerList.map(header => {
  
      <th key={header.id}>{header.headerName}</th>  
  });

  const parsedContactList = Array.isArray(contactList) && contactList.map(contact => {
    <tr>
      <td>{}</td>
      <td>{}</td>
      <td>{}</td>
    </tr>
});


  return (
    <div>
    <h1>{tableName}</h1>
    
   
      <table className="customers">
      
      <caption>{tableCaption}</caption>
        <tbody>
       
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Berglunds snabbköp</td>
            <td>Christina Berglund</td>
            <td>Sweden</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Königlich Essen</td>
            <td>Philip Cramer</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
          <tr>
            <td>North/South</td>
            <td>Simon Crowther</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Paris spécialités</td>
            <td>Marie Bertrand</td>
            <td>France</td>
          </tr>
        </tbody>

      </table>
    </div>
  );
}