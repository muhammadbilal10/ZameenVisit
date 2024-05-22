"use client";
import Modal from "@/components/common/Modal";
import { Button } from "@/components/ui/button";
import { FilterIcon, Plus, PlusIcon } from "lucide-react";
import { useState } from "react";

export function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Modal isOpen={isOpen} setOpen={setIsOpen}>
        Filter
      </Modal>
      <Button variant="ghost" onClick={() => setIsOpen(true)}>
        <FilterIcon className="w-6 h-6 mr-2" />
        Filter
      </Button>
    </div>
  );
}
