import { useEffect, useState } from 'react';
import { listStatus } from './WorkoutStatusService';

const WorkoutStatusList = () => {
    const [status, setStatus] = useState([]);

    useEffect(() => {
        listStatus()
            .then((response) => {
                // Ensure that the response data is an array before setting the state
                if (Array.isArray(response.data)) {
                    setStatus(response.data);
                } else {
                    console.error("Response data is not an array:", response.data);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className='container'>
            <h2>List of Workout Status</h2>
            <style>{`
                .card-container {
                    display: flex;
                    flex-wrap: wrap;
                }

                .card {
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 10px;
                    margin: 10px;
                    width: 300px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                }

                .card h3 {
                    margin-bottom: 10px;
                }
            `}</style>
            <div className="card-container">
                {status.map(wstatus =>
                    <div key={wstatus.status_id} className="card">
                        <h3>Workout Status ID: {wstatus.statusId}</h3>
                        <p>User ID: {wstatus.userId}</p>
                        <p>Timestamp: {wstatus.timestamp}</p>
                        <p>Distance Ran: {wstatus.distanceRan}</p>
                        <p>Pushups Completed: {wstatus.pushupsCompleted}</p>
                        <p>Weight Lifted: {wstatus.weightLifted}</p>
                        <p>Duration Minutes: {wstatus.durationMinutes}</p>
                        <p>Calories Burned: {wstatus.caloriesBurned}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WorkoutStatusList;
