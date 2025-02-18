import React from 'react';
import './App.css';

// Sample student data
const students = [
  { id: 1, name: 'John Doe', age: 21, grade: 'A' },
  { id: 2, name: 'Jane Smith', age: 22, grade: 'B' },
  { id: 3, name: 'Sam Brown', age: 20, grade: 'A' },
  { id: 4, name: 'Emily Davis', age: 23, grade: 'C' }
];

function App() {
  return (
    <div className="App">
      <h1>Student Information</h1>
      <div className="student-list">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;