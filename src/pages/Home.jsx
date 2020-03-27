import React, {useState, useEffect} from 'react'
import Dashboard from '../components/Dashboard'
import DateForm from '../components/DateForm'
import Date from '../components/Date'


const Home = () => {
    let initialDates = JSON.parse(localStorage.getItem('dates'))
    if(!initialDates) {
        initialDates = []
    }

    //State para las citas ya agendadas
    const [dates, sendDate] = useState(initialDates)

    useEffect(() => {
        if (initialDates) {
            localStorage.setItem('dates', JSON.stringify(dates))
        } else {
            localStorage.setItem('dates', JSON.stringify([]))
        }
    }, [dates])

    const deleteDate = id => {
        const filterList = dates.filter(date => date.id !== id  )

        sendDate(filterList)
    }

    return (
        <div className="home-layout">
            <Dashboard />
            
            <div className="main">
                <h1>Administrador de pacientes</h1>

                <div className="main-body">
                    <div className="main-body-left">
                        <DateForm 
                            sendDate={sendDate}
                            dates={dates}
                        />
                    </div>

                    <div className="main-body-right">
                        <h3>Citas agendadas</h3>

                        {dates.length === 0 
                        ? 
                            <div>No hay citas agendadas</div> 
                        : 
                            dates.map (data => {
                                return (
                                    <Date 
                                        key={data.id}
                                        data={data}
                                        deleteDate={deleteDate}
                                    />
                                )
                            } )
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home