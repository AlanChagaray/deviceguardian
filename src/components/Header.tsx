"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "./ui/menubar";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { IoPersonCircleOutline } from "react-icons/io5";

export const Header = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    console.log('close');
    setModal(false);
  };

  return (
    <div>
      <header className="bg-slate-900 text-white">
        <div className="flex justify-between items-center p-2">
          <div>
            <Link href="/home">DEVICE GUARDIAN</Link>
          </div>
          <Menubar className="hover:bg-slate-700" title="Alan Chagaray" >
            <MenubarMenu>
              <MenubarTrigger >
                <IoPersonCircleOutline />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/user">Perfil</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/config">Configuración</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/help">Ayuda</Link>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem onClick={showModal}>Cerrar sesión</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <hr />
      </header>
      {modal && (
        <div  className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto">
            <Card className="p-4">
              <CardContent className="mt-2">Desea cerrar sesión?</CardContent>
              <div className="mb-2 grid grid-cols-2 gap-6">
              <Button >SI</Button>
              <Button onClick={closeModal}>NO</Button>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};
