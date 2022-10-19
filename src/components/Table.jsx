import { TableContainer, TableHead, TableRow, TableHeader, TableData, TableBody } from '../styles/Table'
import arrowUp from '../assets/images/arrow-up.svg'
import { useState, useEffect } from 'react'

export default function Table({ data, column, sortOrder, handleClick }) {

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
                    {data.length === 0
                        ? <TableRow>
                            <TableData colSpan={9}>There is no registered employee</TableData>
                        </TableRow>
                        : data.map((item, index) => {
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