import React, { PureComponent } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends PureComponent {
  constructor() {
    super();
    this.state = { inputValue: '0' };
    this.onClickEventHandler = this.onClickEventHandler.bind(this);
  }

  onClickEventHandler(e) {
    const { inputValue } = this.state;
    const newValue = calculate(inputValue, e.target.innerText);
    this.setState({ inputValue: newValue });
    const outPut = document.getElementById('output');
    if (newValue.next !== null) {
      outPut.textContent = newValue.next;
    } else {
      outPut.textContent = newValue.total;
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display />
        <Button text="AC" onClick={this.onClickEventHandler} />
        <Button text="+/-" onClick={this.onClickEventHandler} />
        <Button text="%" onClick={this.onClickEventHandler} />
        <Button className="operator" text="&divide;" onClick={this.onClickEventHandler} />
        <Button text="7" onClick={this.onClickEventHandler} />
        <Button text="8" onClick={this.onClickEventHandler} />
        <Button text="9" onClick={this.onClickEventHandler} />
        <Button className="operator" text="x" onClick={this.onClickEventHandler} />
        <Button text="4" onClick={this.onClickEventHandler} />
        <Button text="5" onClick={this.onClickEventHandler} />
        <Button text="6" onClick={this.onClickEventHandler} />
        <Button className="operator" text="-" onClick={this.onClickEventHandler} />
        <Button text="1" onClick={this.onClickEventHandler} />
        <Button text="2" onClick={this.onClickEventHandler} />
        <Button text="3" onClick={this.onClickEventHandler} />
        <Button className="operator" text="+" onClick={this.onClickEventHandler} />
        <Button id="three-spanned" text="0" onClick={this.onClickEventHandler} />
        <Button text="." onClick={this.onClickEventHandler} />
        <Button className="operator" text="=" onClick={this.onClickEventHandler} />
      </div>
    );
  }
}

export default Calculator;
