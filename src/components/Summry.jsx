import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function Summry() {
  const mystyle = {
    align: "center"
  };
  return (
    <div>
      <Header />
      <h1> Match Summry </h1>
      <br /> <br />
      <div style={mystyle}>
        <table class="table table">
          <thead>
            <tr>
              <th bgcolor="#1854b5" scope="col">
                CDK
              </th>
              <th bgcolor="#1854b5" scope="col">
                20 OVERS
              </th>
              <th bgcolor="#1854b5" scope="col">
                179-4
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                Pollard &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 41(25)
              </th>
              <td> </td>
              <td> Adil Rahid&nbsp; &nbsp; 18-2 (4) </td>
            </tr>
            <tr>
              <th scope="row">
                R powell &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 35(17)
              </th>
              <td></td>
              <td>Livingston 49-2(4)</td>
            </tr>
            <tr>
              <th scope="row">Brandon King 34(31)</th>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th bgcolor="#ba3240" scope="col">
                HSK (toss)
              </th>
              <th bgcolor="#ba3240" scope="col">
                16.1 OVERS
              </th>
              <th bgcolor="#ba3240" scope="col">
                {" "}
                &emsp; 180-1
              </th>
            </tr>
          </thead>
          <tr>
            <th scope="row">
              Roy &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 100(60)
            </th>
            <td> </td>
            <td> Akeal Hussain&nbsp; &nbsp; 30-1 (4) </td>
          </tr>
          <tr>
            <th scope="row">J vince &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 80(37)</th>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Brandon King 34(31)</th>
          </tr>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Summry;
