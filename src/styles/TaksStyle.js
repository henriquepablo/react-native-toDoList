import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${(props) => props.background};
    flex: 1;
`
export const ContainerDay = styled.View`
    margin-left: 26px;
    margin-top: 20px;
    margin-bottom: 34px;
`
export const Title = styled.Text`
    color: ${(props) => props.TitleDay ? '#fff' : '#000'};
    font-size: 26px;   
`
export const TitleDesc = styled.Text`
    color: ${(props) => props.TitleDesc ? '#fff' : '#000'};
    font-size: 17px;
    margin-top: 22px;
`