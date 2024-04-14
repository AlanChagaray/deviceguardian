import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  IoAlertCircleOutline,
  IoBarChartSharp,
  IoClipboardSharp,
  IoPeopleCircleSharp,
  IoRadioOutline,
} from "react-icons/io5";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="bg-slate-900 text-gray-400 h-screen w-72 p-4 ">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm hover:text-white">
            <IoBarChartSharp  />
            Gráficos y análisis
          </AccordionTrigger>
          <AccordionContent className="text-sm p-2 hover:bg-slate-800 hover:text-white rounded-sm">
            Vista de gráficos
          </AccordionContent>
          <AccordionContent className="text-sm p-2 hover:bg-slate-800 hover:text-white rounded-sm">
            Opciones de personalización de gráficos
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm hover:text-white">
            <IoAlertCircleOutline />
            Alertas y notificaciones
          </AccordionTrigger>
          <AccordionContent className="text-sm p-2 hover:bg-slate-800 hover:text-white rounded-sm">
            <Link href="/alert">Historial de notificaciones</Link>
          </AccordionContent>
          <AccordionContent className="text-sm p-2 hover:bg-slate-800 hover:text-white rounded-sm">
            <Link href="/alert/add">Configuración de alertas</Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm hover:text-white">
            <IoClipboardSharp />
            Gestión de dispositivos
          </AccordionTrigger>
          <AccordionContent className="text-sm p-2 hover:bg-slate-800 hover:text-white rounded-sm">
            ABM dispositivos
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm hover:text-white">
            <IoRadioOutline />
            Monitoreo y diagnóstico
          </AccordionTrigger>
          <AccordionContent className="text-sm p-2 hover:bg-slate-800 hover:text-white rounded-sm">
            Herramientas de diagnósticos
          </AccordionContent>
          <AccordionContent className="text-sm p-2 hover:bg-slate-800 hover:text-white rounded-sm">
            Logs y reportes de dispositivos
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm hover:text-white">
            <IoPeopleCircleSharp />
            Administración
          </AccordionTrigger>
          <AccordionContent className="text-sm">
            Gestión de usuarios
          </AccordionContent>
          <AccordionContent className="text-sm">
            Configuraciones avanzadas del sistema
          </AccordionContent>
          <AccordionContent className="text-sm">
            Análisis y reportes de uso de la aplicación
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
