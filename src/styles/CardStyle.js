import styled from "styled-components/native";

export const ViewCard = styled.View`
    background-color: ${(props) => props.backgroundCard ? '#3F414D' : '#fff'};
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 95%;
    height: 70px;
    margin: 32px 0px 32px 0px;
    border-radius: 10px;
`
export const TextTasks = styled.Text`
    color: ${(props) => props.text ? '#fff' : '#000'};
    font-size: 16px;
    text-decoration: ${(props) => props.complete ? 'line-through' : 'none'};
`

