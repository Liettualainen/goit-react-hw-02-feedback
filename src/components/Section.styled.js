import styled from "styled-components";

export const ProfileShape = styled.div`
padding: 200px;
width: 1200px;
background-color: #ebf2fc;
box-shadow: 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);;
border-radius: 3%;    
`;

export const DescriptionShape = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: white;
padding-top: 100px;
padding-right: 200px;
padding-left: 200px;
padding-bottom: 5px;
border-radius: 1%;
`;

export const ImageShape = styled.div`
display: flex;
width: 240px;
margin: 0 auto;
`;

export const NameShape = styled.p`
font-weight: 700;
margin: 0 auto;
`;
export const TagShape = styled.p`
color: gray;
margin-top: -50px;
margin-bottom: -80px;
`;

export const LocationShape = styled.p`
color: gray;
`;

export const StatsShape = styled.div`
display:flex;
justify-content: space-between;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
overflow: hidden;
border: 1px solid grey;
`;

export const BoxShape = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
border-left: 1px solid grey;
border-right:1px solid grey;
width: 100%;
padding: 50px;
background-color: #eaf4f4;
`;

export const LabelShape = styled.span`font-size: 30px;
`;
export const QuantityShape = styled.span`
font-size: 35px;
margin-top: 10px;
font-weight: 700;
`;