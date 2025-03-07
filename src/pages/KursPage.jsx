import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const courses = [
  {
    id: 1,
    title: "React 1",
    date: "2025-01-07",
    time: "18:00/20:00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Xi8cHRogKk4vykmSdtpOfsIP2fgf-Icbawh9DKy-jidxGx1u9dGtJqdmLty41na2iDI&usqp=CAU",
  },
  {
    id: 2,
    title: "English",
    date: "2024-10-08",
    time: "18:00/20:00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkJA_r0YqusL--FnAJyCkrW7h5JgOGNj3EFw&s",
  },
  {
    id: 3,
    title: "JS 16",
    date: "2024-10-01",
    time: "18:00/20:00",
    image:
      "https://ellipsiseducation.com/wp-content/uploads/2023/02/javascript-736400_1280.png",
  },
];

function KursPage() {
  return (
    <StyledDivTag>
      <StyledH1>Мои курсы</StyledH1>
      <StyledCourseList>
        {courses.map((course) => (
          <StyledCourseCard key={course.id}>
            <Link to="course/id">
              <StyledCourseImage src={course.image} alt={course.title} />
              <StyledCourseTitle>{course.title}</StyledCourseTitle>
              <StyledCourseInfo>
                <span>{course.date}</span>
                <span>{course.time}</span>
              </StyledCourseInfo>
            </Link>
          </StyledCourseCard>
        ))}
      </StyledCourseList>
    </StyledDivTag>
  );
}

const StyledDivTag = styled.div`
  box-sizing: border-box;
  background-color: #e2e0e099;
  width: 84%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledH1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  margin-bottom: 70px;
`;

const StyledCourseList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledCourseCard = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledCourseImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const StyledCourseTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  padding: 10px;
  color: #036efabd;
`;

const StyledCourseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px 10px;
  font-size: 14px;
  color: #707070;
`;

export default KursPage;
