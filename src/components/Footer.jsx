import React from "react";
import { FooterLogo } from "./FooterLogo";
import { FooterMenu } from "./FooterMenu";
import { Link } from "./Copyright";


export const Footer=()=>{
    return(
        <footer className="footer">
            <FooterLogo/>
            <FooterMenu/>
            <Link/>
        </footer>
    )
}