"use client";
import React from "react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "../ui/label";
import { Title } from "../Title";

export const Alerts = () => {


  return (
    <div>
      <Title value="Alertas y notificaciones" />
      <div className="bg-slate-900 p-2 ">
        <div className="grid grid-cols-2 ">
          <div>
            <Label className="pl-2">Dispositivo</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="pl-2">Tipo</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 mt-4 ">
        <Table>
          <TableHeader className="bg-slate-700 ">
            <TableRow>
              <TableHead>ID Alerta</TableHead>
              <TableHead>ID Dispositivo</TableHead>
              <TableHead>ID Usuario</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Descripción</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Hora</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>alerta</TableCell>
              <TableCell>descripcion</TableCell>
              <TableCell>dd/MM/yyyy</TableCell>
              <TableCell>00:00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
