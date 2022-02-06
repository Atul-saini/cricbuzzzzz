import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function TeamA() {
  const mystyle = {
    height: "500px",
    width: "500px"
  };
  return (
    <div>
      <Header />
      <br />
      <h1> CDK 179-4 (20.0) </h1>
      <br />
      <Link to="/Summry">
        <b>
          {" "}
          <h7>Click for Match Summary</h7>
        </b>
      </Link>
      <br />
      <br />
      <br />
      <table class="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">Batter</th>
            <th scope="col">Run</th>
            <th scope="col">Four</th>
            <th scope="col">Six</th>
            <th scope="col"> Ball Faced </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Brandon King</th>
            <td>34</td>
            <td>2</td>
            <td>2</td>
            <td>31 </td>
          </tr>
          <tr>
            <th scope="row">K Mayers</th>
            <td>31</td>
            <td>3</td>
            <td>2</td>
            <td>19 </td>
          </tr>
          <tr>
            <th scope="row">Romario Shepherd</th>
            <td>6</td>
            <td>0</td>
            <td>1</td>
            <td>5 </td>
          </tr>
          <tr>
            <th scope="row">Pooran (wk)</th>
            <td>21</td>
            <td>0</td>
            <td>1</td>
            <td>24 </td>
          </tr>
          <tr>
            <th scope="row">Pollard (c)</th>
            <td>41</td>
            <td>1</td>
            <td>2</td>
            <td>25 </td>
          </tr>
          <tr>
            <th scope="row">Rovman Powell</th>
            <td>35</td>
            <td>1</td>
            <td>4</td>
            <td>17 </td>
          </tr>
        </tbody>
      </table>
      <h1> Extras 11 </h1>
      <br />
      <h1> Total 179-4 (20.0)</h1>
      <br />
      <table class="table table-bordered table">
        <thead>
          <tr>
            <th scope="col">Bowler</th>
            <th scope="col">Balls_Bowled</th>
            <th scope="col">runs_given</th>
            <th scope="col">Wickets</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">R Topley</th>
            <td>24</td>
            <td>43</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">Chris Jordan</th>
            <td>24</td>
            <td>43</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">Adil Rashid</th>
            <td>24</td>
            <td>18</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">Livingstone</th>
            <td>24</td>
            <td>49</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">Moeen</th>
            <td>24</td>
            <td>50</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <h1> HSJ 180-1 (16.1) </h1>
      <table class="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">Batter</th>
            <th scope="col">Run</th>
            <th scope="col">Four</th>
            <th scope="col">Six</th>
            <th scope="col"> Ball Faced </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Roy</th>
            <td>100</td>
            <td>2</td>
            <td>6</td>
            <td>60 </td>
          </tr>
          <tr>
            <th scope="row">Tom Bantom</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td> 1 </td>
          </tr>
          <tr>
            <th scope="row">J Vince</th>
            <td>80</td>
            <td>5</td>
            <td>1</td>
            <td>37 </td>
          </tr>
        </tbody>
      </table>
      <h1> Extras 0 </h1>
      <br />
      <h1> Total 180-1 (16.1)</h1>
      <br />
      <br />
      <table class="table table-bordered table">
        <thead>
          <tr>
            <th scope="col">Bowler</th>
            <th scope="col">Balls_Bowled</th>
            <th scope="col">runs_given</th>
            <th scope="col">Wickets</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Akeal Hosein</th>
            <td>24</td>
            <td>30</td>
            <td>1</td>
          </tr>
          <tr>
            <th scope="row">Jason Holder</th>
            <td>24</td>
            <td>50</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">Sheldon Cotrell</th>
            <td>24</td>
            <td>18</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">Odean Smith</th>
            <td>24</td>
            <td>49</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">Fabian Allen</th>
            <td>1</td>
            <td>6</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <br /> <br />
      <hr />
      <h1> Match Info </h1>
      <hr />
      <h2> HSK VS CDK ,2022</h2>
      <br /> <br />
      <h3> Toss : HSK opt to Bowl </h3>
      <h3> Venue : Oval ,Barbados </h3>
      <h3> Umpires : KN Anantha ,Nitin Menon</h3>
      <hr />
      <h2> CDK playing 11</h2>
      <table class="table table-striped table-dark">
        <tbody>
          <tr>
            <td>Brandon King</td>
          </tr>
          <tr>
            <td>Kyle Mayers</td>
          </tr>
          <tr>
            <td>Nicholas Pooran (wk)</td>
          </tr>
          <tr>
            <td>Rovman Powell</td>
          </tr>
          <tr>
            <td>Jason Holder</td>
          </tr>
          <tr>
            <td>Kieron Pollard(C)</td>
          </tr>
          <tr>
            <td>Fabian Allen</td>
          </tr>
          <tr>
            <td>Romario Shepherd</td>
          </tr>
          <tr>
            <td>Odean Smith</td>
          </tr>
          <tr>
            <td>Akeal Hosein</td>
          </tr>
          <tr>
            <td>Sheldon Cotrell</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <h2> HSJ playing 11</h2>
      <table class="table table-striped table-dark">
        <tbody>
          <tr>
            <td>Jason Roy</td>
          </tr>
          <tr>
            <td>Tom Banton</td>
          </tr>
          <tr>
            <td>James Vince </td>
          </tr>
          <tr>
            <td>Moeen Ali (c)</td>
          </tr>
          <tr>
            <td>Liam Livingstone</td>
          </tr>
          <tr>
            <td>Sam Billings(Wk)</td>
          </tr>
          <tr>
            <td>Philip Salt</td>
          </tr>
          <tr>
            <td>Chris Jordan</td>
          </tr>
          <tr>
            <td>Adil Rashid</td>
          </tr>
          <tr>
            <td>Saqib Mahmood</td>
          </tr>
          <tr>
            <td>Reece Topley</td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default TeamA;
