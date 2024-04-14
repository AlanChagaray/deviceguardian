import React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button"
// import { ModelToogle } from "@/components/ButtonToogleDark"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Login() {
  return (
      <div className="justify-center items-center flex  mt-20">    
        {/* <ModelToogle/> */}
    <Card className="w-[380px]">
      <CardHeader >
        <CardTitle className="text-center">Device Guardian</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nombre">Usuario</Label>
              <Input id="" placeholder="Ingresar usuario" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="" placeholder="Ingresa contraseña" />
            </div>
          </div>
        </form>
      </CardContent>
      <div className="flex justify-center mb-5">
        <Link href="/register">Registrarse</Link>
        </div>
      <CardFooter className="flex justify-center">
        <Button>Login</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Login;