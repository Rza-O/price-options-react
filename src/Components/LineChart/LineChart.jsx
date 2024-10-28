// import PropTypes from 'prop-types';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const subjectMarksData = [
        { "id": 1, "name": "Alice Johnson", "math": 75, "physics": 82, "chemistry": 78 },
        { "id": 2, "name": "Bob Smith", "math": 88, "physics": 74, "chemistry": 90 },
        { "id": 3, "name": "Charlie Davis", "math": 92, "physics": 89, "chemistry": 85 },
        { "id": 4, "name": "Diana Garcia", "math": 68, "physics": 76, "chemistry": 80 },
        { "id": 5, "name": "Evan Martinez", "math": 85, "physics": 82, "chemistry": 88 },
        { "id": 6, "name": "Fiona Brown", "math": 79, "physics": 81, "chemistry": 74 },
        { "id": 7, "name": "George Wilson", "math": 91, "physics": 87, "chemistry": 92 },
        { "id": 8, "name": "Hannah Lee", "math": 76, "physics": 80, "chemistry": 78 },
        { "id": 9, "name": "Ian Clark", "math": 84, "physics": 85, "chemistry": 83 },
        { "id": 10, "name": "Julia Walker", "math": 90, "physics": 88, "chemistry": 91 }
    ]


    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math' stroke='red'></Line>
                <Line dataKey='physics' stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

LineChart.propTypes = {
    
};

export default LineChart;