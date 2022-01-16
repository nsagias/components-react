import React from "react";
import "./Table.css";

export default function Table() {
  return (
    <>
    <h1>A Table</h1>
    
   
      <table className="customers">
      
      <caption>This is the caption tag</caption>
        <tbody>

          <tr>
            <th scope="col">Company</th>
            <th scope="col">Contact</th>
            <th scope="col">Country</th>
          </tr>
     
          <tr>
            <th scope="row">Alfreds Futterkiste</th>
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
        <tfoot>
          <tr>
              <th scope="row">th</th>
              <td> Footer td 1</td>
              <td>Footer td 2</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}