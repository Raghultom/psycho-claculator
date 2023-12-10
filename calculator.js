// import React from 'react';
// import '../css/calculator.css';

// class Calculator extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       input: '',
//     };
//   }

//   handleButtonClick = (value) => {
//     this.setState((prevState) => ({
//       input: prevState.input + value,
//     }));
//   };

//   handleClear = () => {
//     this.setState({
//       input: '',
//     });
//   };

//   handleAddition = () => {
//     this.setState((prevState) => ({
//       input: prevState.input + '/',
//     }));
//   };

//   handleSubtraction = () => {
//     this.setState((prevState) => ({
//       input: prevState.input + '*',
//     }));
//   };

//   handleMultiplication = () => {
//     this.setState((prevState) => ({
//       input: prevState.input + '+',
//     }));
//   };

//   handleDivision = () => {
//     this.setState((prevState) => ({
//       input: prevState.input + '-',
//     }));
//   };

//   handleCalculate = () => {
//     try {
//       this.setState((prevState) => ({
//         input: eval(prevState.input).toString(),
//       }));
//     } catch (error) {
//       this.setState({
//         input: 'Error',
//       });
//     }
//   };

//   render() {
//     return (
//     <div className='maindiv'>

//        <h1 className='heading' > Psycho Calculator</h1>


//       <div className="calculator">
//         <input type="text" value={this.state.input} readOnly />
//         <div className="buttons">
//           <button onClick={() => this.handleButtonClick('9')}>1</button>
//           <button onClick={() => this.handleButtonClick('7')}>2</button>
//           <button onClick={() => this.handleButtonClick('2')}>3</button>
//           <button onClick={() => this.handleAddition()}>+</button>
//           <button onClick={() => this.handleButtonClick('6')}>4</button>
//           <button onClick={() => this.handleButtonClick('1')}>5</button>
//           <button onClick={() => this.handleButtonClick('8')}>6</button>
//           <button onClick={() => this.handleSubtraction()}>-</button>
//           <button onClick={() => this.handleButtonClick('3')}>7</button>
//           <button onClick={() => this.handleButtonClick('4')}>8</button>
//           <button onClick={() => this.handleButtonClick('5')}>9</button>
//           <button onClick={() => this.handleMultiplication()}>*</button>
//           <button onClick={() => this.handleButtonClick('0')}>0</button>
//           <button className="double" onClick={() => this.handleClear()}>
//             =
//           </button>
//           <button className="equal" onClick={() => this.handleCalculate()}>
//             C
//           </button>
//           <button onClick={() => this.handleDivision()}>/</button>
//         </div>
//       </div>
//       </div>
//     );
//   }
// }

// export default Calculator;





import React from 'react';
import '../css/calculator.css';
import Rules from './rules';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      history: [],
    };
  }

  handleButtonClick = (value) => {
    this.setState((prevState) => ({
      input: prevState.input + value,
    }));
  };

  handleClear = () => {
    this.setState({
      input: '',
    });
  };

  handleAddition = () => {
    this.setState((prevState) => ({
      input: prevState.input + '/',
    }));
  };

  handleSubtraction = () => {
    this.setState((prevState) => ({
      input: prevState.input + '*',
    }));
  };

  handleMultiplication = () => {
    this.setState((prevState) => ({
      input: prevState.input + '+',
    }));
  };

  handleDivision = () => {
    this.setState((prevState) => ({
      input: prevState.input + '-',
    }));
  };

  handleCalculate = () => {
    try {
      const result = eval(this.state.input).toString();
      this.setState({
        input: result,
        history: [`${this.state.input} = ${result}`], 
      });
    } catch (error) {
      this.setState({
        input: 'Error',
      });
    }
  };

  handleHistoryClick = () => {
    
    console.log(this.state.history);
  };

  render() {
    return (
      <div className='maindiv'>
        <div className='heading'>
          <h2>Psycho Calculator</h2>
          </div>
        <div className="calculator">
          <div className="history-section">
            <h2>History</h2>
            <ul>
              {this.state.history.map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
            </ul>
          </div>
          <input type="text" value={this.state.input} readOnly />
          <div className="buttons">
            <button onClick={() => this.handleButtonClick('9')}>1</button>
            <button onClick={() => this.handleButtonClick('7')}>2</button>
            <button onClick={() => this.handleButtonClick('2')}>3</button>
            <button onClick={() => this.handleAddition()}>+</button>
            <button onClick={() => this.handleButtonClick('6')}>4</button>
            <button onClick={() => this.handleButtonClick('1')}>5</button>
            <button onClick={() => this.handleButtonClick('8')}>6</button>
            <button onClick={() => this.handleSubtraction()}>-</button>
            <button onClick={() => this.handleButtonClick('3')}>7</button>
            <button onClick={() => this.handleButtonClick('4')}>8</button>
            <button onClick={() => this.handleButtonClick('5')}>9</button>
            <button onClick={() => this.handleMultiplication()}>*</button>
            <button onClick={() => this.handleButtonClick('0')}>0</button>
            <button className="double" onClick={() => this.handleClear()}>
              =
            </button>
            <button className="equal" onClick={() => this.handleCalculate()}>
              C
            </button>
            <button onClick={() => this.handleDivision()}>/</button>
            <button className="history" onClick={this.handleHistoryClick}>
              History
            </button>
          </div>
        </div>
        <Rules />
      </div>
    );
  }
}

export default Calculator;
