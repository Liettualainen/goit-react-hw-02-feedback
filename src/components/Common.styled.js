import styled from "styled-components";

export const ButtonShape = styled.div`
 display: flex;
 gap: 20px;
//  align-items: center;
//   justify-content: center;  gap: 20px;

  border: black;
  padding: 50px 30px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
`;

export const ButtonDecoration = styled.div`
background-color:white;
 display: flex;
  align-items: center;
  text-align: center;
 border: black;
 border: 1px solid grey;
 padding: 10px 20px;
border-radius: 5%;
:hover {
    background-color: #008CBA; /* Blue */
    color: white;
}
cursor: pointer;
`;

export const StatisticsShape = styled.div`
font-size: 40px;

`;

export const NotificationShape = styled.div`
font-size: 20px;
 padding: 20px 0px;
`;


export const StatisticResultShape = styled.div`
font-size: 20px;
 padding: 10px 0px;
`;

