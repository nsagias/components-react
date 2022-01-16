import React from "react";
import "./Table.css";

export default function Table() {

  const tableHeaderNames = ["Company", "Contact", "Country"];
  const tableRowOne = ["Alfreds",  "Maria Anders", "Germany"];
  const tableRowTwo = ["Berglunds", "Christina Berglund", "Sweden"];

  const exampleTableStructure1 = {
    tableName : "A table",
    tableHeaderInfo: [
      "Company", "Contact", "Country"
    ],
    tableCaption: "This is the caption tag",
    contactInfo:
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


  return (
    <>
    <h1>A Table</h1>
    
   
      <table className="customers">
      
      <caption>This is the caption tag</caption>
        <tbody>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
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
    </>
  );
}