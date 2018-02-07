import React, { Component } from 'react';

import '../../Styles/RightMenu.css';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            daysName: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
            defferentMonth: 0,
            date: new Date()
        }

        this.prev = () => {
            const { date, defferentMonth } = this.state;
            date.setMonth( date.getMonth() - 1);  
            let defferent = defferentMonth - 1;
            this.setState({date: date, defferentMonth: defferent});   
        }

        
        this.next = () => {
            const { date, defferentMonth } = this.state;
            date.setMonth(date.getMonth() + 1, 1);         
            let defferent = defferentMonth + 1;
            this.setState({date: date, defferentMonth: defferent}); 
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

        this.click = (e) => {
            
        }
        
        this.getWeek = (dayStart, days) => {
            let today = new Date();
            const { date } = this.state;
            if(today.getFullYear() === date.getFullYear() && today.getMonth() === date.getMonth()) {
                date.setDate(today.getDate())              
            }
            let index = 0, rows = [];
            for( let i = 0; i < 7; i++) {
                if(i >= dayStart - 1) {
                   days[index] === undefined ?  rows.push( <td key={i} className="empty"></td> ) :
                    rows.push( <td 
                        onClick={days[index] >= today.getDate() && date.getMonth() === today.getMonth() ? 
                            this.click: date.getMonth() > today.getMonth() ? this.click : null } 
                        className = { this.isToday(days, index, date, today) ? 'date-today': 'date-day' } 
                        key={i}>{days[index]}
                        </td>  
                    );
                    index++;
                }
                else {
                    rows.push( <td key={i} className="empty"></td> ) ;   
                }
            }
            return rows;               
        }

        this.isToday = (days, index, date, today) => {
            return days[index] === date.getDate() && 
            date.getMonth() === today.getMonth() && 
            date.getFullYear() === today.getFullYear();
        }
    }
    render() {
        const { months, daysName, date, defferentMonth } = this.state;
        let [dayStart, days]  = this.generateDays();
        return (
            <div className="rightMenu-calendar">
               <div className="calendar-header">
                    <button onClick={this.prev} 
                        className="calendar-passing passing-left" 
                        disabled={ defferentMonth === 0 ? true: false }><span>←</span>
                    </button> 
                    <p className="calendar-date">{`${months[date.getMonth()]} ${date.getFullYear()}`}</p> 
                    <button onClick={this.next} 
                        className="calendar-passing passing-right"><span>→</span>
                    </button> 
                </div>
               
               <table>
                   <thead><tr>{ daysName.map((item, index) => <th className="calendar-daysName" key={index}>{item}</th>) }</tr></thead>
                   <tbody>
                      { this.getMonth(dayStart, days) }
                   </tbody>
               </table>
               
            </div>
        );
    }
}
//<CalendarEvents/>
export default Calendar;
