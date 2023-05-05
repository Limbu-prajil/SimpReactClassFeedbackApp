import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const Statistics = ({p1,p2,p3}) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Topic</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Good</td>
          <td>{p1}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{p2}</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>{p3}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{((p1-p3)/(p1+p2+p3)).toFixed(1)}</td>
        </tr>
        <tr>
          <td>Percentage</td>
          <td>{((p1/(p1+p2+p3))*100).toFixed(1)} %</td>
        </tr>
      </tbody>
    </table>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0
    }
  }

  countGood = (count) => () => this.setState({ counter1: count })
  countNeutral = (count) => () => this.setState({ counter2: count })
  countBad = (count) => () => this.setState({ counter3: count })

  render() {
    const handleStats = (x,y,z) => {
      if (x !== 0 || y !== 0 || z !== 0)
        return <Statistics p1={x} p2={y} p3={z} />
      return 'Give feedback first'
    }
    return (
      <div>
        <h1>Return feedback</h1>
        <Button handleClick={this.countGood(this.state.counter1 + 1)} text="Good" />
        <Button handleClick={this.countNeutral(this.state.counter2 + 1)} text="Neutral" />
        <Button handleClick={this.countBad(this.state.counter3 + 1)} text="Bad" />
        <h2>Statistics</h2>
        <div>{handleStats(this.state.counter1,this.state.counter2,this.state.counter3)}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'))
