import { TableContainer, TableHead, TableRow, TableHeader, TableData, TableBody } from '../styles/Table'
import arrowUp from '../assets/images/arrow-up.svg'
import { useState, useEffect } from 'react'

export default function Table({ data }) {
    const [column, setColumn] = useState('firstName')
    const [sortOrder, setSortOrder] = useState('asc')
    const [sortedData, setSortedData] = useState([])

    useEffect(() => {
        setSortedData([...data])
    }, [data])

    const handleClick = (e) => {
        setColumn(e.target.abbr)
        setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')

        if (sortOrder === 'asc') {
            setSortedData(prev => prev.sort((a, b) => a[column].localeCompare(b[column])))
        } else {
            setSortedData(prev => prev.sort((a, b) => a[column].localeCompare(b[column])).reverse())
        }
    }

    console.log(data)

        return (
            <TableContainer>
                <TableHead>
                    <TableRow>
                        <TableHeader
                            abbr="firstName"
                            onClick={handleClick}
                            sortOrder={sortOrder}
                            column={column}
                        >
                            First Name
                            <img src={arrowUp} />
                        </TableHeader>
                        <TableHeader 
                            abbr="lastName" 
                            onClick={handleClick} 
                            sortOrder={sortOrder} 
                            column={column}
                        >
                            Last Name
                            <img src={arrowUp} />
                        </TableHeader>
                        <TableHeader 
                            abbr="startDate" 
                            onClick={handleClick} 
                            sortOrder={sortOrder} 
                            column={column}
                        >
                            Start Date
                            <img src={arrowUp} />
                        </TableHeader>
                        <TableHeader 
                            abbr="department" 
                            onClick={handleClick} 
                            sortOrder={sortOrder} 
                            column={column}
                        >
                            Department
                            <img src={arrowUp} />
                        </TableHeader>
                        <TableHeader 
                            abbr="dateOfBirth" 
                            onClick={handleClick} 
                            sortOrder={sortOrder} 
                            column={column}
                        >
                            Date of Birth
                            <img src={arrowUp} />
                        </TableHeader>
                        <TableHeader 
                            abbr="street" 
                            onClick={handleClick} 
                            sortOrder={sortOrder} 
                            column={column}
                        >
                            Street
                            <img src={arrowUp} />
                        </TableHeader>
                        <TableHeader 
                            abbr="city" 
                            onClick={handleClick} 
                            sortOrder={sortOrder} 
                            column={column}
                        >
                            City
                            <img src={arrowUp} />
                        </TableHeader>
                        <TableHeader 
                            abbr="state" 
                            onClick={handleClick} 
                            sortOrder={sortOrder} 
                            column={column}
                        >
                            State
                            <img src={arrowUp} />
                        </TableHeader>
                        <TableHeader 
                            abbr="zipCode" 
                            onClick={handleClick} 
                            sortOrder={sortOrder} 
                            column={column}
                        >
                            Zip Code
                            <img src={arrowUp} />
                        </TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedData.length === 0
                        ? <TableRow>
                            <TableData colSpan={9}>There is no registered employee</TableData>
                        </TableRow>
                        : sortedData.map((item, index) => {
                            return (
                                <TableRow key={`${item.lastName}-${index}`}>
                                    <TableData>{item.firstName}</TableData>
                                    <TableData>{item.lastName}</TableData>
                                    <TableData>{item.startDate}</TableData>
                                    <TableData>{item.department}</TableData>
                                    <TableData>{item.dateOfBirth}</TableData>
                                    <TableData>{item.street}</TableData>
                                    <TableData>{item.city}</TableData>
                                    <TableData>{item.state}</TableData>
                                    <TableData>{item.zipCode}</TableData>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </TableContainer>
        )
    }