"use client";
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";
import Image from "next/image";
import "./sidebar.css";

import menu from "@/app/utils/menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { arrowLeft, bars, logout } from "@/app/utils/Icons";

function Sidebar() {
  const { theme } = useGlobalState();

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarStyled theme={theme}>
      <div className="profile hover:border-[#f9f9f9] hover:border-opacity-10 hover:opactiy-100 transition-all hover:bg-[#161616] hover:border-2 ">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image
            width={70}
            height={70}
            src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
            alt="profile"
          />
        </div>

        <h1 className="capitalize">
          <span>Royce </span>
          <span>Vinci</span>
        </h1>
      </div>
      <ul className="nav-items items-center justify-center text-center">
        {menu.map((item) => {
          const link = item.link;
          return (
            <li
              key={item.id}
              className={`nav-item pl-[2.1rem] pr-[0.6rem] py-[1rem] grid relative cursor-pointer  hover:bg-[#1f1f1f] transition-all ${
                pathname === link ? "active" : ""
              }`}
              style={{
                gridTemplateColumns: "40px 1fr",
              }}
              onClick={() => {
                handleClick(link);
              }}
            >
              {item.icon}
              <Link href={link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <button className="m-[1.5rem]"></button>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.colorGrey3};

  .profile {
    margin: 1.5rem;
    padding: 0.8rem 0.8rem;
    position: relative;

    border-radius: 1rem;
    cursor: pointer;
    color: ${(props) => props.theme.colorGrey0};
    font-weight: 500;
    display: flex;

    align-items: center;

    .profile-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      z-index: 0;
      background: ${(props) => props.theme.colorBg3};
      border-radius: 1rem;
      border: 2px solid ${(props) => props.theme.borderColor2};

      opacity: 0.2;
    }
    h1 {
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
      line-height: 1.4rem;
      margin-left: 0.8rem;
    }
    .image,
    h1 {
      position: relative;
      z-index: 1;
    }
    .image {
      flex-shrink: 0;
      display: inline-block;
      overflow: hidden;
      transition: all 0.5s ease;
      border-radius: 100%;
      height: 70px;
      width: 70px;

      img {
        border-radius: 100%;
        transition: all 0.5s ease;
      }

      .capitalize {
        margin-left: 0.8rem;
        font-size: clamp(1.2rem, 4vw, 1.4rem);
        line-height: 100%;
      }

      &:hover {
        .profile {
          opactiy: 1;
          border: 1px;
          color: black;
          border: 2px solid ${(props) => props.theme.borderColor2};
        }
        img {
          transform: scale(1.1);
        }
      }
    }
    a {
      font-weight: 500;
    }

    i {
      display: flex;
      align-items: center;
    }
  }
`;

export default Sidebar;
