import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "../ui/label";

export const User = () => {
  return (
    <div className="flex justify-center  mt-10">
      <div className="w-96">
        <div className="text-left mb-3">
        <Label className="text-xl items-start">Datos personales</Label>
        </div>     
        <Card className="justify-center ">
          <CardContent className="mt-1.5 max-h-8 text-left text-sm">
            <p>firstname lastname</p>
          </CardContent>
          <hr />
          <CardContent className="mt-1.5 max-h-8 text-left text-sm">
            <p>example@gmail.com</p>
          </CardContent>
        </Card>
        <br />
        <div className="text-left mb-3">
        <Label className="text-xl items-start">Cuenta</Label>
        </div>
        <Card >
          <CardContent className="mt-2 max-h-8 text-left text-sm">
            <p>usuario: username</p>
          </CardContent>
          <hr />
          <CardContent className="mt-1.5 max-h-8 text-left text-sm">
            <p>password: ********</p>
          </CardContent>
        </Card>
        <br />
        <div className="text-left mb-3">
        <Label className="text-xl items-start">Rol</Label>
        </div>
        <Card >
          <CardContent className="mt-2 max-h-8 text-left text-sm">
            <p>tecnico</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
