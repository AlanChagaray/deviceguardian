import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

export const Log = () => {
  return (
    <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>IdLog</TableHead>
              <TableHead>IdDevice</TableHead>
              <TableHead>Fecha registro</TableHead>
              <TableHead>Temperatura</TableHead>
              <TableHead>Estado bateria</TableHead>
              <TableHead>Marca tiempo</TableHead>
              <TableHead>Observaciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>dd/MM/yyyy</TableCell>
              <TableCell>10°</TableCell>
              <TableCell>estado</TableCell>
              <TableCell>11</TableCell>
              <TableCell>observacion</TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </div>
  )
}
