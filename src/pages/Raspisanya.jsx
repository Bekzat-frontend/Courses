// import React from "react";
// import styled from "styled-components";

// function Raspisanya() {
//   const daysInMonth = 30;
//   const startDay = 1;

//   const days = [];
//   for (let i = 0; i < startDay; i++) {
//     days.push("");
//   }
//   for (let i = 1; i <= daysInMonth; i++) {
//     days.push(i);
//   }
//   return (
//     <Container>
//       <h3>Март 2025</h3>
//       <span>
//         {" "}
//         <StyledSelect>
//           <option>Month</option>
//           <option>Week</option>
//           <option>Day</option>
//         </StyledSelect>
//       </span>

//       <Weekdays>
//         {["Дш", "Шш", "Шр", "Бш", "Жм", "Иш", "Жк"].map((day) => (
//           <DayName key={day}>{day}</DayName>
//         ))}
//       </Weekdays>
//       <Grid>
//         {days.map((day, index) => (
//           <DayCell key={index}>{day}</DayCell>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// const Container = styled.div`
//   width: 40%;
//   margin: 20px auto;
//   text-align: center;
//   font-family: Arial, sans-serif;
// `;

// const StyledSelect = styled.select`
//   margin-left: 90%;
//   margin-bottom: 20px;
// `;
// const Weekdays = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(7, 1fr);
//   gap: 30px;
//   margin-top: 10px;
// `;

// const DayName = styled.div`
//   width: 40px;
//   text-align: center;
// `;

// const DayCell = styled.div`
//   width: 40px;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid #ddd;
//   background-color: #f9f9f9;
// `;

// export default Raspisanya;
