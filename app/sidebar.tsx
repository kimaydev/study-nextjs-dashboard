"use client";
import Link from "next/link";
import styled from "styled-components";

const SidebarWrap = styled.div`
  background-color: pink;
`;
export default function Sidebar() {
  return (
    <SidebarWrap>
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/earnings">Earnings</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/analytics">Analytics</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
        <li>
          <button>Log Out</button>
        </li>
      </ul>
    </SidebarWrap>
  );
}
