import Products from "components/Products";
import Button from "components/Button";
import { Menu } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

export default function Drinks() {
    return (
        <section className="text-center">
            <div className="container bg-quaternary-500">
                <div
                    className="min-h-[720px] bg-drinks-pattern bg-cover bg-center bg-fixed 
                    bg-no-repeat flex-center flex-col gap-y-4 relative">
                    <div className="w-[1250px] h-20 bottom-[-50px] z-10 absolute">
                        <div className="absolute inset-0 bg-secondary-500 opacity-50 -z-10 rounded-full"></div>
                        <div className="flex-center-y mx-3 justify-between absolute inset-y-2/4 left-5 right-5">
                            <Button
                                className="w-[120px] h-[56px] hover:color-white"
                                name="Hot"
                            />
                            <Button
                                className="w-[120px] h-[56px] absolute left-[200px] hover:color-white"
                                name="New"
                            />
                            <div className=" relative flex-row cursor-pointer">
                                <Menu>
                                    <Menu.Button as="div">
                                        <Button
                                            className="w-64 text-left h-14 hover:text-black"
                                            name="Price"
                                            Icon={BiChevronDown}
                                        />
                                    </Menu.Button>
                                    <Menu.Items className="flex flex-col absolute w-64 top-[calc(100%+16px)] right-0 bg-secondary-500 rounded-md shadow-popup font-bold overflow-hidden">
                                        <Menu.Item>
                                            <a href="/account-settings">
                                                <button className="text-left font-bold w-full px-3 py-3 hover:bg-primary-500 text-white">
                                                    Price: low to high
                                                </button>
                                            </a>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <a href="/account-settings">
                                                <button className="text-left font-bold w-full px-3 py-3  hover:bg-primary-500 text-white">
                                                    Price: high to low
                                                </button>
                                            </a>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                            </div>
                            <div className="text-white">
                                <input
                                    type="text"
                                    placeholder="Find"
                                    maxLength={15}
                                    className="relative text-base bg-primary-500  px-9 py-3 rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-24">
                    <Products />
                </div>
            </div>
        </section>
    );
}

