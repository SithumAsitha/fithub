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
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Workout Status ID</th>
                        <th>userId</th>
                        <th>timestamp</th>
                        <th>distanceRan</th>
                        <th>pushupsCompleted</th>
                        <th>weightLifted</th>
                        <th>durationMinutes</th>
                        <th>caloriesBurned</th>
                    </tr>
                </thead>
                <tbody>
                    {status.map(wstatus =>
                        <tr key={wstatus.status_id}>
                            <td>{wstatus.status_id}</td>
                            <td>{wstatus.userId}</td>
                            <td>{wstatus.timestamp}</td>
                            <td>{wstatus.distanceRan}</td>
                            <td>{wstatus.pushupsCompleted}</td>
                            <td>{wstatus.weightLifted}</td>
                            <td>{wstatus.durationMinutes}</td>
                            <td>{wstatus.caloriesBurned}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default WorkoutStatusList;
