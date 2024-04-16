import Link from 'next/link';
import React from 'react'

interface Props {
    url : string;
}

export const LinkButton = ({url}:Props) => {
  return (
    <>
        <Link type="button" href={url} className="bg-slate-200 text-black p-1 w-32 justify-center text-center rounded-sm hover:bg-slate-400 hover:text-slate-200">Nueva alerta</Link>
    </>
  )
}
