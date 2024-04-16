"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Title } from "@/components/Title";

function device() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div>
      <form>
        <Card>
          <CardHeader>
            <Title value="Nuevo dispositivo" />
          </CardHeader>
          <CardContent>
            <Label>Tipo</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">UPS</SelectItem>
                <SelectItem value="dark">Sensor</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
          <CardContent>
            <div>
              <Label>Fecha instalación</Label>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? format(date, "PPP") : <span>Seleccionar</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </CardContent>
          <CardContent>
            <Label>Ubicación</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
          <CardContent>
            <Label>Descripción</Label>
            <Input type="text"></Input>
          </CardContent>
          <CardContent>
            <Button type="submit">Guardar dispositivo</Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}

export default device;
