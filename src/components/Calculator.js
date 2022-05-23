import React, { PureComponent } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';

class Calculator extends PureComponent {
  render() {
    return (
      <div className="calculator">
        <Display />
        <Button text="AC" />
        <Button text="+/-" />
        <Button text="%" />
        <Button className="operator" text="&divide;" />
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button className="operator" text="x" />
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button className="operator" text="-" />
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button className="operator" text="+" />
        <Button id="three-spanned" text="0" />
        <Button text="." />
        <Button className="operator" text="=" />
      </div>
    );
  }
}

export default Calculator;
