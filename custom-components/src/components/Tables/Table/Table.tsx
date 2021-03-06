import React, { useEffect, useState } from "react";
import "./Table.css";

const data: IData  = {
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


interface IHeaderitem {
  id: number;
  headerName: string;
}

interface IHeaderList {
  [index: number]: IHeaderitem;
}

interface IContactItem {
  id: number; 
  company: string; 
  contact: string; 
  country: string;
}

interface IContactList {
  [index: number]: IContactItem;
}

interface IData {
  tableName: string;
  tableHeaderList: IHeaderList;
  tableCaption: string;
  contactList: IContactList;
}

export default function Table() {
  const [tableName, setTableName] = useState<string>("");
  const [tableCaption, setTableCaption] = useState<string>("");
  const [headerList, setHeadList] = useState<IHeaderList>([]);
  const [contactList, setContactList] = useState<IContactList>([]);

  useEffect( () => {
    setTableName(data.tableName);
    setTableCaption(data.tableCaption);
    setHeadList(data.tableHeaderList);
    setContactList(data.contactList);
  }, []);

  const parsedHeader: false | JSX.Element[] = Array.isArray(headerList) && headerList.map(header => (
      <th key={header.id}>{header.headerName}</th>  
  ));

  const parsedContactList: false | JSX.Element[] = Array.isArray(contactList) && contactList.map(contact => (
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