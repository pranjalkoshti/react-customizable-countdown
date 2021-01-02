import React,  { Component, Fragment } from "react";

class TimerSegment extends Component {

  defaultDate = new Date(new Date().setDate(new Date().getDate()+1))

  leadingZero(num) {
    return num < 10 ? "0" + num : num;
  }

  getTimeUntil(deadline) {
    const time =
      Date.parse(deadline) - Date.parse(new Date());

    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      deadline: this.props.date ? this.props.date : this.defaultDate
      // deadline: this.props.date ? this.props.date : "April, 6, 2019"
    };
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    let counterStyle = this.props.counterStyle ? this.props.counterStyle  : {};
    let timerStyle = this.props.timerStyle ? this.props.timerStyle : {};
    let labelStyle = this.props.labelStyle ? this.props.labelStyle : {};

    return (
      <div style={timerStyle} >
          <div style={{padding:'0px',textAlign:'center', height:'100%',background:'none'}}  >
            <p style={{color: labelStyle.color ? labelStyle.color : 'grey', marginBottom:'0px'}}>STARTS IN</p>
            <div style={{display:'flex', justifyContent:'center'}}>
                <div style={{flex:1}}>
                    <h1 className="timer-counter" style={counterStyle}>{this.leadingZero(days)}</h1>
                    <p style={labelStyle}>Days</p>
                </div>
                <div style={{flex:1}}>
                    <h1 className="timer-counter" style={counterStyle}>{this.leadingZero(hours)}</h1>
                    <p style={labelStyle}>Hours</p>
                </div>
                <div style={{flex:1}}>
                    <h1 className="timer-counter" style={counterStyle}>{this.leadingZero(minutes)}</h1>
                    <p style={labelStyle}>Minutes</p>
                </div>
                <div style={{flex:1}}>
                    <h1 className="timer-counter" style={counterStyle}>{this.leadingZero(seconds)}</h1>
                    <p style={labelStyle}>Seconds</p>
                </div>
            </div>
        </div>
        </div>
    );
  }
}

export default TimerSegment;
