"use client";
import React from "react";
import Link from "next/link";
import { Label } from "../ui/label";
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
import { IoEyeSharp } from "react-icons/io5";
import { Title } from "../Title";
import { LinkButton } from "../LinkButton";

export const Devices = () => {

    const handleDevice = () => {
      alert("device");
      
    };


  return (
    <div>
      <Title value="Dispositivos"/>
      <div className="bg-slate-900 p-2 ">
        <div className="grid grid-cols-4 ">
          <div className="mt-4 ml-2">
            <LinkButton url="/device/add" />
          </div>
          <div>
            <Label className="pl-2">Categoría</Label>
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
            <Label className="pl-2">Ubicación</Label>
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
            <Label className="pl-2">Estados</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Activos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Activos</SelectItem>
                <SelectItem value="dark">Inactivos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="bg-slate-900  mt-4 rounded-sm">
        <Table>
          <TableHeader >
            <TableRow>
              <TableHead>ID Dispositivo</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Descripción</TableHead>
              <TableHead>ID Usuario</TableHead>
              <TableHead>Ubicación</TableHead>
              <TableHead>Fecha instalación</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Detalles</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Device</TableCell>
              <TableCell>Guardian</TableCell>
              <TableCell>Primero</TableCell>
              <TableCell>1</TableCell>
              <TableCell>Argentina</TableCell>
              <TableCell>dd/MM/yyyy</TableCell>
              <TableCell>Activo</TableCell>
              <TableCell><Link href="./device"><IoEyeSharp className="ml-6" title="ver detalles"/></Link></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Device</TableCell>
              <TableCell>Guardian</TableCell>
              <TableCell>Segundo</TableCell>
              <TableCell>1</TableCell>
              <TableCell>Argentina</TableCell>
              <TableCell>dd/MM/yyyy</TableCell>
              <TableCell>Inactivo</TableCell>
              <TableCell><Link href="./device"><IoEyeSharp className="ml-6" title="ver detalles"/></Link></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
