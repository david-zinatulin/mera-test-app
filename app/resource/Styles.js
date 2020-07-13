import styled, { css } from 'styled-components'

const input = styled.input `
  position: absolute;
  width: 396px;
  height: 39px;
  left: 442px;
  top: 324px;
  background: linear-gradient(180deg, #6574FF 0%, rgba(116, 4, 169, 0.97) 100%), #6574FF;
  border-color: linear-gradient(180deg, #6574FF 0%, rgba(116, 4, 169, 0.97) 100%), #6574FF;
  border-bottom-width: 1px; /* Толщина линии внизу */
  border-bottom-style: solid; /* Стиль линии внизу */
  border-bottom-color: white; /* Цвет линии внизу */
`

const Form = styled.div `
    position: absolute;
    width: 396px;
    height: 250px;
    left: 0;
    right: 0;
    bottom: 0;
    top:0;
    margin:auto;
`;

const ImgInInput = styled.img `
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    bottom: 0;
    margin: auto;
`
const linkToReg = styled.span `
    position: absolute;
    width: 260px;
    height: 50px;
    border-radius: 10px;
    background:  none;
    border: 1px solid #ffffff;
    font: 18px 'SF Display';
    font-weight: 100;
    color: #ffffff;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
`
const Redirect = styled.div `
    margin-left: 20%
    position: relative;
    height: 220px;
`
const Label = styled.label `
    position: absolute;
	width: 130px;
	height: 21px;
	bottom: 70px;
	left: 0;
	right: 0;
	margin: auto;
	font: 18px 'SF Display';
	font-weight: 100;
	color: #ffffff;
`

export { ImgInInput, input, Form, linkToReg, Redirect, Label }