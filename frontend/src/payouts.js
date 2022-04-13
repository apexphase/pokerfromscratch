export default function Payouts() {
  return (
    <div class="container">
      <div class="table-responsive-md">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Player Count</th>
              <th scope="col">1st Place</th>
              <th scope="col">2nd Place</th>
              <th scope="col">3rd Place</th>
              <th scope="col">4th Place</th>
              <th scope="col">5th Place</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1-4</th>
              <td>100%</td>
            </tr>
            <tr>
              <th scope="row">5-7</th>
              <td>70%</td>
              <td>30%</td>
            </tr>
            <tr>
              <th scope="row">8-9</th>
              <td>70%</td>
              <td>30%</td>
              <td>$25</td>
            </tr>
            <tr>
              <th scope="row">10-11</th>
              <td>50%</td>
              <td>30%</td>
              <td>20%</td>
            </tr>
            <tr>
              <th scope="row">12-15</th>
              <td>50%</td>
              <td>30%</td>
              <td>20%</td>
              <td>$25</td>
            </tr>
            <tr>
              <th scope="row">16+</th>
              <td>50%</td>
              <td>25%</td>
              <td>15%</td>
              <td>10%</td>
              <td>$25</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
