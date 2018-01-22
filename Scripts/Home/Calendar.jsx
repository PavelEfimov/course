import React, { Component } from 'react';

import '../../Styles/Home.css';

//var date = new Date();

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            daysName: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
            defferentMount: 0,
            date: new Date()
        }

        this.prev = () => {
            const { date } = this.state;
            date.setMonth( date.getMonth() - 1 );  
            this.setState({date: date});          
        }

        
        this.next = () => {
            const { date } = this.state;
            date.setMonth( date.getMonth() + 1 );  
            this.setState({date: date}); 
        }

        this.generateDays = () => {
            const { date } = this.state;
            let days = [];
            let daysCount = (new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDate();
            let dayStart = (new Date(date.getFullYear(), date.getMonth(), 1)).getDay();
            for (let i = 1; i <= daysCount; i++ ) {
                days.push(i);
            }
            return [dayStart, days];
        }
        
        this.getMonth = (dayStart, days) => {
            let daysRows = [], key = 0;
            dayStart === 0 ? dayStart = 7: null ; 
            while(days.length > 0) {
                let arr = days.splice(0, 8 - dayStart);
                daysRows.push(<tr key ={key++}>{this.getWeek(dayStart, arr)}</tr>);
                dayStart = 1;
            }
            return daysRows;
        }

        this.getWeek = (dayStart, days) => {
            let index = 0, rows = [];
            for( let i = 0; i < 7; i++) {
                if(i >= dayStart - 1) {
                    rows.push(<td key={i}>{days[index]}</td>);
                    index++;
                }
                else {
                    rows.push(<td key={i}></td>) ;   
                }
            }
            return rows;               
        }
    }
    render() {
        const { months, daysName, date } = this.state;
        let [dayStart, days]  = this.generateDays();
        return (
            <div className="sidemenu-calendar">
               <div className="calendar-header">
                    <span onClick={this.prev} className="calendar-passing passing-left">←</span>
                    <p className="calendar-date">{`${months[date.getMonth()]} ${date.getFullYear()}`}</p> 
                    <span onClick={this.next} className="calendar-passing passing-right">→</span> 
                </div>
               
               <table>
                   <thead><tr>{ daysName.map((item, index) => <th key={index}>{item}</th>) }</tr></thead>
                   <tbody>
                      { this.getMonth(dayStart, days) }
                   </tbody>
               </table>
               </div>
        );
    }
}

export default Calendar;
/*
 this.getTableRow = (dayStart, days) => {
            
            console.log('!!!!', dayStart);
            if ( dayStart === 0 ) {
                dayStart = 7; 
            }
            let index = 0;
            let rows = [];
            let arr = days.splice(0, 8 - dayStart);
            console.log(arr);
            for( let i = 0; i < 7; i++) {
                if(i >= dayStart - 1) {
                    rows.push(<td key={i}>{arr[index]}</td>);
                    index++;
                }
                else {
                    rows.push(<td key={i}></td>) ;   
                }
            }
            return rows;               
        }
*/