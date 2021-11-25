import axios from 'axios';

function App() {
  axios({
    url: 'https://opentdb.com/api.php?amount=10',
    method: 'GET',
    dataResponse: 'json'
  }).then((res) => {
    console.log(res.data.results);
  });


  return (
    <div className="App">
      <header>
        <h1>Quarantine Pursuit</h1>
        <p>See console</p>
      </header>
    </div>
  )
}

export default App;