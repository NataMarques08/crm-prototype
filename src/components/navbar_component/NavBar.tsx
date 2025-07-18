import { SearchBar } from '../searchbar_component/SearchBar';
import './NavBar.css';
import { IoSettingsOutline } from "react-icons/io5";
import React, {useState, useRef, useEffect} from 'react';




export const NavBar : React.FC = () =>{
    
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // close the menu when clicking outside
    useEffect(() =>{
        const handleClickOutside = (event: MouseEvent) =>{
            if(menuRef.current && !menuRef.current.contains(event.target as Node)){
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);



    return(
        <div className="navbar">
            <h1>PrototypeCRM</h1>
            <SearchBar placeholdertext='Pesquise'/>
            <div className='menu' ref={menuRef}>
                <button className='settings-button' onClick={() => setOpen(!open)}>
                    <IoSettingsOutline className='settings-icon' />
                </button>
                     {open && (
                        <div >
                            <ul className="settings-menu">
                                <li >Perfil</li>
                                <li>Painel do Administrador</li>
                                <li>Funil Vendedores</li>
                                <li >Sair</li>
                            </ul>
                        </div>
      )}
            </div>
                    
            <h1>Prospecção</h1>  
            <h1>{"Meu Funil"}</h1>  
            <h1>Marketing</h1>  
            <h1>Contatos</h1>  
                    
        </div>
    );
}
