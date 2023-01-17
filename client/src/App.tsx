import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <>
    <div className="flex min-h-screen flex-col">
            <div className="mb-2 md:border-b py-2">
                <div className="container mx-auto">
                    <div className="flex justify-between gap-2">
                        <img
                            className="w-32 ml-2"
                            src="https://refine.dev/img/refine_logo.png"
                            alt="Logo"
                        />
                        <ul className="hidden md:flex">
                                <li  className="float-left">
                                    <Link to={"/turtorials"}
                                        className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize
                                    decoration-indigo-500 decoration-2 underline-offset-1 transition duration-300 ease-in-out"
                                        
                                    >
                                        <span className="text-green-500">Turtorial</span>
                                    </Link>  
                                </li>
                                <li  className="float-left">
                                    <Link to={"/add"}
                                        className="flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1 mt-2 capitalize
                                    decoration-indigo-500 decoration-2 underline-offset-1 transition duration-300 ease-in-out"
                                        
                                    >
                                        <span className="text-green-500">Add Data</span>
                                    </Link>  
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-white">tes</div>
        </div>
    </>
  );
}

export default App;
