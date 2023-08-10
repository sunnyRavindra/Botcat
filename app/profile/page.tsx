'use client'
import { title } from "@/components/primitives";
import { Card, CardBody } from "@nextui-org/react";

export default function AutoPage() {
	return (
	    <>
    		<div className="grid grid-cols-2 gap-8 mt-10">
          <div className="col-span-2">
  				  <h1 className={title()}>Profile In Progress.&nbsp;</h1>
          </div>
        </div>
		</>	
	);
}
