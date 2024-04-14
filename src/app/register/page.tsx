"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button, buttonVariants } from "@/components/ui/button";
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

function register() {
  const { register, handleSubmit, formState : {errors}, } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="justify-center items-center flex border-slate-600 border-2 w-72 rounded-sm p-4">
        <form onSubmit={onSubmit} className="w-full">
        <div className="justify-center items-center text-center flex text-white text-xl mb-4 font-bold">Registrarse</div>
        <div className=" mb-4">
          <div className="flex flex-col space-y-1.5 ">
            <label htmlFor="nombre" className="text-sm">Nombre</label>            
            <input
              className="p-1 rounded-sm bg-slate-900 text-white border border-slate-500"
              type="text"
              placeholder="Ingresar nombre"
              {...register("nombre", {
                required: true
              }
            )}
            ></input>
            { errors.nombre?.type == "required" && <span className="text-red-500 text-sm">campo requerido</span>}
          </div>
        </div>
        <div className=" mb-4">
          <div className="flex flex-col space-y-1.5 ">
            <label htmlFor="apellido" className="text-sm">Apellido</label>            
            <input
              className="p-1 rounded-sm bg-slate-900 text-white border border-slate-500"
              type="text"
              placeholder="Ingresar apellido"
              {...register("apellido", {
                required: true
              }
            )}
            ></input>
            { errors.apellido?.type == "required" && <span className="text-red-500 text-sm">campo requerido</span>}
          </div>
        </div>
        <div className=" mb-4">
          <div className="flex flex-col space-y-1.5 ">
            <label htmlFor="email" className="text-sm">Email</label>            
            <input
              className="p-1 rounded-sm bg-slate-900 text-white border border-slate-500"
              type="text"
              placeholder="Ingresar email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{3}/
              }
            )}
            ></input>
            { errors.email?.type == "required" && <span className="text-red-500 text-sm">campo requerido</span>}
            { errors.email?.type == "pattern" && <span className="text-red-500 text-sm">formato incorrecto</span>}
          </div>
        </div>
        <div className=" mb-4">
          <div className="flex flex-col space-y-1.5 ">
            <label htmlFor="password" className="text-sm">Password</label>            
            <input
              className="p-1 rounded-sm bg-slate-900 text-white border border-slate-500"
              type="text"
              placeholder="Ingresar password"
              {...register("password", {
                required: true
              }
            )}
            ></input>
            { errors.password?.type == "required" && <span className="text-red-500 text-sm ">campo requerido</span>}
          </div>
        </div>
        <div className=" mb-4">
          <div className="flex flex-col space-y-1.5 ">
            <label htmlFor="rol" className="text-sm">Rol</label>            
            <select 
              className="p-1 rounded-sm bg-slate-900 text-white border border-slate-500"
              {...register("rol", {
                required: true
              })}
            >
              <option >Seleccionar</option>
              <option value="cliente">Cliente</option>
              <option value="tecnico">Técnico</option>
              <option value="administrador">Administrador</option>
            </select>
            { errors.rol?.type == "required" && <span className="text-red-500 text-sm">campo requerido</span>}
          </div>
        </div>
        <Button>Guardar</Button>
      </form>
      {/* <Card className="w-[380px]">
          <CardHeader>
            <CardTitle className="text-center">Registro</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Nombre</Label>
                <Input id="nombre" placeholder="Ingresar nombre" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Apellido</Label>
                <Input id="apellido" placeholder="Ingresa apellido" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Email</Label>
                <Input id="email" placeholder="Ingresa email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Contraseña</Label>
                <Input id="" placeholder="Ingresa contraseña" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Rol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cliente">Cliente</SelectItem>
                    <SelectItem value="tecnico">Técnico</SelectItem>
                    <SelectItem value="administrador">Administrador</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button>Guardar</Button>
          </CardFooter>
        </Card> */}
    </div>
    </div>
  );
}

export default register;
