import { TableContainer, TableHead, TableRow, TableHeader, TableData, TableBody } from '../styles/Table'

export default function Table({ data }) {


    return (
        <TableContainer>
            <TableHead>
            <TableRow>
                <TableHeader>First Name</TableHeader>
                <TableHeader>Last Name</TableHeader>
                <TableHeader>Start Date</TableHeader>
                <TableHeader>Department</TableHeader>
                <TableHeader>Date of Birth</TableHeader>
                <TableHeader>Street</TableHeader>
                <TableHeader>City</TableHeader>
                <TableHeader>State</TableHeader>
                <TableHeader>Zip Code</TableHeader>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((item, index) => {
                return (
                <TableRow key={`${item.lastName}-${index}`}>
                    <TableData>{item.firstName}</TableData>
                    <TableData>{item.lastName}</TableData>
                    <TableData>{item.startDate}</TableData>
                    <TableData>{item.department}</TableData>
                    <TableData>{item.dateOfBirth}</TableData>
                    <TableData>{item.address.street}</TableData>
                    <TableData>{item.address.city}</TableData>
                    <TableData>{item.address.state}</TableData>
                    <TableData>{item.address.zipCode}</TableData>
                </TableRow>
                );
            })}
            </TableBody>
        </TableContainer>
    )
}