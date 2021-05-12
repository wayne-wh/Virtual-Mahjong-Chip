import React, { Component } from "react";
import { AiFillPlusCircle, AiFillMinusCircle, AiFillInstagram, AiOutlineGithub, AiOutlineArrowRight } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count : 0,
      multiplier : 0
    }
  }

  setMultiplier1 = () => {
    this.setState({
      multiplier : 0.1
    });
  }

  setMultiplier2 = () => {
    this.setState({
      multiplier : 0.2
    });
  }

  setMultiplier3 = () => {
    this.setState({
      multiplier : 0.3
    });
  }


  increment1 = () => {
    if (this.state.multiplier === 0.3) {
      this.setState({
        count: this.state.count + 1
      });
    } else {
      this.setState({
        count: (this.state.count + (this.state.multiplier))
      });
    }
  }

  decrement1 = () => {
    if (this.state.multiplier === 0.3) {
      this.setState({
        count: this.state.count -1 
      });
    } else {
      this.setState({
        count: (this.state.count - (this.state.multiplier))
      });
    }
  }

  increment2 = () => {
    if (this.state.multiplier === 0.3) {
      this.setState({
        count: this.state.count + 2
      });
    } else {
      this.setState({
        count: (this.state.count + (this.state.multiplier*2))
      });
    }
  }

  decrement2 = () => {
    if (this.state.multiplier === 0.3) {
      this.setState({
        count: this.state.count -2
      });
    } else {
      this.setState({
        count: (this.state.count - (this.state.multiplier*2))
      });
    }
  }

  increment3 = () => {
    if (this.state.multiplier === 0.3) {
      this.setState({
        count: this.state.count + 3
      });
    } else {
      this.setState({
        count: (this.state.count + (this.state.multiplier*4))
      });
    }
  }

  decrement3 = () => {
    if (this.state.multiplier === 0.3) {
      this.setState({
        count: this.state.count - 3
      });
    } else {
      this.setState({
        count: (this.state.count - (this.state.multiplier*4))
      });
    }
  }

  increment4 = () => {
    if (this.state.multiplier === 0.3) {
      this.setState({
        count: this.state.count + 5
      });
    } else {
      this.setState({
        count: (this.state.count + (this.state.multiplier*8))
      });
    }
  }

  decrement4 = () => {
    if (this.state.multiplier === 0.3) {
      this.setState({
        count: this.state.count - 5
      });
    } else {
      this.setState({
        count: (this.state.count - (this.state.multiplier*8))
      });
    }
  }

  increment5 = () => {
    if (this.state.multiplier === 0.3) {
      this.setState({
        count: this.state.count + 10
      });
    } else {
      this.setState({
        count: (this.state.count + (this.state.multiplier*16))
      });
    }
  }

  decrement5 = () => {
    if (this.state.multiplier === 0.3) {
      this.setState({
        count: this.state.count - 10
      });
    } else {
      this.setState({
        count: (this.state.count - (this.state.multiplier*16))
      });
    }
  }

  increment6 = () => {
    if (this.state.multiplier === 0.3) {
      this.setState({
        count: this.state.count + 20
      });
    } else {
      this.setState({
        count: (this.state.count + (this.state.multiplier*32))
      });
    }
  }

  decrement6 = () => {
    if (this.state.multiplier === 0.3) {
      this.setState({
        count: this.state.count - 20
      });
    } else {
      this.setState({
        count: (this.state.count - (this.state.multiplier*32))
      });
    }
  }

  reset = () => {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div className='main-container'>
        <div className='title-container'>
          <h1>Virtual Mahjong Chip</h1>
        </div>
        <div className='total-container'>
          <h1>Total: {(this.state.count).toFixed(1)}</h1>
          <h4>Current Mahjong Rate - {this.state.multiplier}</h4>
        </div>
        <div className='multiplier-container'>
          <p>Play how big?</p>
          <div className='multiplier-buttons-div'>
            <button onClick={this.setMultiplier1} className='multiplier-buttons'>0.1/0.2</button>
            <button onClick={this.setMultiplier2} className='multiplier-buttons'>0.2/0.4</button>
            <button onClick={this.setMultiplier3} className='multiplier-buttons'>0.3/0.6</button>
          </div>
        </div>
        <div className='increment-decrement'>
          <button onClick={this.decrement1} className='increment-decrement-button' ><AiFillMinusCircle/></button>
          <p className='increment-decrement-amount'>{ this.state.multiplier===0.3 ? 1 : this.state.multiplier*1}</p>
          <button onClick={this.increment1} className='increment-decrement-button'><AiFillPlusCircle/></button>
        </div>
        <div className='increment-decrement'>
          <button onClick={this.decrement2} className='increment-decrement-button'><AiFillMinusCircle/></button>
          <p className='increment-decrement-amount'>{this.state.multiplier===0.3 ? 2 : this.state.multiplier*2}</p>
          <button onClick={this.increment2} className='increment-decrement-button'><AiFillPlusCircle/></button>
        </div>
        <div className='increment-decrement'>
          <button onClick={this.decrement3} className='increment-decrement-button'><AiFillMinusCircle/></button>
          <p className='increment-decrement-amount'>{this.state.multiplier===0.3 ? 3 : this.state.multiplier*4}</p>
          <button onClick={this.increment3} className='increment-decrement-button'><AiFillPlusCircle/></button>
        </div>
        <div className='increment-decrement'>
          <button onClick={this.decrement4} className='increment-decrement-button'><AiFillMinusCircle/></button>
          <p className='increment-decrement-amount'>{this.state.multiplier===0.3 ? 5 : this.state.multiplier*8}</p>
          <button onClick={this.increment4} className='increment-decrement-button'><AiFillPlusCircle/></button>
        </div>
        <div className='increment-decrement'>
          <button onClick={this.decrement5} className='increment-decrement-button'><AiFillMinusCircle/></button>
          <p className='increment-decrement-amount'>{this.state.multiplier===0.3 ? 10 : this.state.multiplier*16}</p>
          <button onClick={this.increment5} className='increment-decrement-button'><AiFillPlusCircle/></button>
        </div>
        <div className='increment-decrement'>
          <button onClick={this.decrement6} className='increment-decrement-button'><AiFillMinusCircle/></button>
          <p className='increment-decrement-amount'>{this.state.multiplier===0.3 ? 20 : this.state.multiplier*32}</p>
          <button onClick={this.increment6} className='increment-decrement-button'><AiFillPlusCircle/></button>
        </div>
        <div className='reset-container'>
          <button onClick={this.reset} className='reset-button'>Reset</button>
        </div>
        <div className='footer-container'>
          <p>© Built By Wayne Tay</p>
          <div className='footer'>
            <div className='footer-logo-div'>
              <a className='react-icon-btn button' href='https://www.instagram.com/wayne_twh96/'>
                <AiFillInstagram size={24} className='footer-logo'/>
              </a>
              <a className='react-icon-btn button' href='https://www.facebook.com/wayne.tay.904/'>
                <FaFacebook size={24} className='footer-logo'/>
              </a>
              <a className='react-icon-btn button' href='https://www.linkedin.com/in/wayne-tay-62857a72/'>
                <FaLinkedin size={24} className='footer-logo'/>
              </a>
              <a className='react-icon-btn button' href='https://github.com/wayne-wh'>
                <AiOutlineGithub size={24} className='footer-logo'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Counter;