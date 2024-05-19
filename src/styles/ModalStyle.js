import styled from "styled-components/native";

export const ContainerModal = styled.View`
    flex: 1;
    justify-content: flex-end;
`
export const ViewModal = styled.View`
    background-color: ${(props) => props.background ? '#363c5f' : '#acc1ff'};
    height: 333px;
    border-radius: 30px 30px 0px 0px;   
`