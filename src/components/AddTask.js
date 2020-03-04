import React, { Component } from 'react';

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0,10)
    state = {
      text: "",
      checked: false,
      date: this.minDate

    }


    handleText = (e) => {
      this.setState({
        text: e.target.value
      })
    }

    handleCheckBox = (e) => {
      this.setState({
        checked: e.target.checked
      })
    }

    handleDate = (e) => {
      this.setState({
        date: e.target.value
      })
    }

    handleClick = () => {
      const { text, date, checked} = this.state;
      if (text.length > 0) {
      const add = this.props.add(text, date, checked)
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate
        })
      }
    } else {
      alert("Wpisz cos!")
    }
  }

    render() {

    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

    return(
        <div className="form">
        <input className="form__input" type="text" placeholder=" wpisz zadanie" value={this.state.text} onChange={this.handleText}/>
        <input className="form__input" type="checkbox" id="important" checked={this.state.checked} onChange={this.handleCheckBox}/>
        <label htmlFor="important">Priorytet</label>
        <br/>
        <label htmlFor="date">Do kiedy zrobić</label>
        <input className="form__input" type="date" value={this.state.date} min={this.state.date} max={maxDate} onChange={this.handleDate}/>
        <br/>
        <button className="form__button" onClick={this.handleClick}>Dodaj</button>
        </div>
    )
  }
}

export default AddTask