import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export const Info = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Tipo dispositivo</CardTitle>
          <CardDescription>Description dispositivo</CardDescription>
        <hr/>
        </CardHeader>
        <CardContent>
          <p>usuario: Alan Chagaray</p>
        </CardContent>
        <CardContent>
          <p>fecha creación: dd/mm/yyyy</p>
        </CardContent>
        <CardContent>
          <p>ultima modificacion: dd/mm/yyyy</p>
        </CardContent>
      </Card>
    </div>
  );
};
