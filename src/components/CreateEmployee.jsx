import { Button, Column, Main, Row } from '../styles/GlobalStyle'
import InputItem from './InputItem'
import SelectItem from './SelectItem'
import departments from '../assets/data/departments'
import { FieldSet } from '../styles/CreateEmployee'
import states from '../assets/data/states'
import { useState } from 'react'
import Modal from './Modal'

export default function CreateEmployee() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [startDate, setStartDate] = useState('')
    const [department, setDepartment] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')

    const employee = {
        firstName,
        lastName,
        dateOfBirth,
        startDate,
        department,
        street,
        city,
        state,
        zipCode
    }

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        let employeeList = JSON.parse(localStorage.getItem('employees')) || []

        if (
            firstName
            && lastName
            && dateOfBirth
            && startDate
            && department
            && street
            && city
            && state
            && zipCode
        ) {
            employeeList.push(employee)
            localStorage.setItem('employees', JSON.stringify(employeeList))
            // setOpen(true)
        }

    }

    return (
        <Main>
            <Row>
                <Column>
                    <InputItem label="First Name" type="text" value={firstName} setValue={setFirstName} />
                    <InputItem label="Last Name" type="text" value={lastName} setValue={setLastName} />
                    <InputItem label="Date of Birth" type="date" value={dateOfBirth} setValue={setDateOfBirth} />
                    <InputItem label="Start Date" type="date" value={startDate} setValue={setStartDate} />
                    <SelectItem label="Department" list={departments} value={department} setValue={setDepartment} />
                </Column>
                <Column>
                    <FieldSet>
                        <legend>Address</legend>
                        <InputItem label="Street" type="text" value={street} setValue={setStreet} />
                        <InputItem label="City" type="text" value={city} setValue={setCity} />
                        <SelectItem label="State" list={states} value={state} setValue={setState} />
                        <InputItem label="Zip Code" type="text" value={zipCode} setValue={setZipCode} />
                    </FieldSet>
                    <Button
                        onClick={handleClick}
                    >
                        Save
                    </Button>
                </Column>
            </Row>
            <Modal open={open} setOpen={setOpen} />
        </Main>
    )
}