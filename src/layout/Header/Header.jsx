import React from "react";
import Link from "next/link";
import { links, sanpham, tintuc } from "@/libs/HeaderData";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-lg-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <LinkGroup links={links} />
            <DropDownLink title="Sản phẩm" items={sanpham} />
            <DropDownLink title="Tin tức" items={tintuc} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

const DropDownLink = ({ title, items }) => {
  return (
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </Link>
      <ul className="dropdown-menu">
        {items.map((item, index) => (
          <li key={index}>
            <Link className="dropdown-item" href={item.url}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
const LinkGroup = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <li key={index} className="nav-item">
          <Link className="nav-link" href={link.url}>
            {link.text}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Header;
