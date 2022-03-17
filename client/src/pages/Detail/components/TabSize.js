import React from "react";
import { Tab } from "@headlessui/react";
import Size from "./Size";
export default function TabSize() {
    return (
        <div>
            <Tab.Group>
                <Tab.List className="flex justify-between pl-20 space-x-5 rounded-xl">
                    <Tab
                        className={({ selected }) =>
                            selected ? "text-white" : "text-black"
                        }
                    >
                        <Size title="S" />
                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            selected ? "text-white" : "text-black"
                        }
                    >
                        <Size title="M" />
                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            selected ? "text-white" : "text-black"
                        }
                    >
                        <Size title="L" />
                    </Tab>
                </Tab.List>
            </Tab.Group>
        </div>
    );
}
